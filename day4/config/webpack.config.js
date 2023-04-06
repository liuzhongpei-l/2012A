const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 以及 `.vue` 文件中的 `<style>` 块
            // 它会应用到普通的 `.css` 文件
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, './src'),
            "components": path.resolve(__dirname, './src/components'),
        },
        extensions: [".js", ".json", ".vue", ".css"],// 使用的扩展名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html"
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}