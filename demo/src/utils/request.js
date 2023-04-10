const axios = require('axios');
const request = axios.create({
    timeout: 5000
});
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
module.exports = request