// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".css"],
        // 使用的扩展名
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, './src'),
            "components": path.resolve(__dirname, './src/components'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html"
        }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
    ]
}