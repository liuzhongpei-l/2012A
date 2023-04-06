const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                    'css-loader'
                ]
            },
            // vue 文件中支持scss语法 vue-loader中有 单独配置匹配scss后缀使用vue-style-loader与sass-loader也可以
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'sass-loader'
                ]
            },
            // 配置加载图片   在vue-loader官网中起步下面处理资源路径 中相关loader中点击file-loader 
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    // 命名规则 文件夹名/文件夹下面的文件名字（原文件名_哈希乱码:6位乱码.原后缀名）
                    name: 'images/[name]_[hash:6].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".css"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "./src"),
            "components": path.resolve(__dirname, "./src/components"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html', filename: "index.html" }),
        new VueLoaderPlugin()
    ],
}
