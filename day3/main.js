const App = require('./App.vue')
const Vue = require('vue')
var app = new Vue({
    el: '#app',
    component: { App },
    template: "<App/>"
})
