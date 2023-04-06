import axios from 'axios';
// Set config defaults when creating the instance
const request = axios.create({
    timeout: 5000
});
request.defaults.headers.Authorization = window.localStorage.getItem('token');

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    switch (response.data.code) {
        case 400:
            alert(response.data.message)
            break;
        case 401:
            alert(response.data.message)
            break;
        case 404:
            alert(response.data.message)
            break;
        case 403:
            alert(response.data.message)
            break;
        case 500:
            alert(response.data.message)
            break;
        default:
            break;
    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default request