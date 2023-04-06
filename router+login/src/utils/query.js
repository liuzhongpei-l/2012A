const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '2012A'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, results) {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        });
    })
}
module.exports = query