const mysql = require('mysql');
const { mysqlConfig } = require('../../config/config.default')
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('db connection successful!');
});
const query = (sql) => {
    return new Promise((resovle, reject) => {
        connection.query(sql, function (error, results) {
            if (error) {
                reject(error);
                return;
            } else {
                resovle(results);
            }
        });

    })
}
module.exports = query