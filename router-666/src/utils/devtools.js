const jwt = require('jsonwebtoken');
const secret = "123fsjfgsfgsft78tfsfgsuyfewf"
const signToken = async (data) => {
    return await jwt.sign({
        ...data
    }, secret, { expiresIn: '1h' });
}
const verifyToken = async (token) => {
    return await jwt.verify(token, secret, function (err, decoded) {
        if (err) {
            return err.name
        } else {
            return decoded
        }
    });
}
module.exports = {
    signToken,
    verifyToken
}