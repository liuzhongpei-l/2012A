const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = {
    mode: "development",
    entry: {
        index: "./src/main.js",
        user: "./modules/user/main.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].builder.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, "../src"),
            "components": path.resolve(__dirname, "../src/components")
        },
        extensions: [".vue", ".js", ".json", ".css"], // 新加css⽂件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./public/user.html",
            filename: "user.html"
        }),
        new VueLoaderPlugin()
    ]
}