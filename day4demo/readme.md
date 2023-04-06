### webpack搭建vue项目步骤
1. 建立空文件夹 
2. 初始化包管理文件
3. 创建项目目录
    -总文件夹
     --config
        ---webpack.config.js
     --public
        ---index.html
     --src
        ---components(下级目录内容可选)
        ---App.vue
        ---main.js
     --package.json
4. 配置main.js
    - 引入vue实例
    - 改造实例 删除掉data 增加components属性、template属性
    - 引入vue包 npm i vue@2.x -S
    - 引入App.vue vue的主文件
    ```js
        import Vue from 'vue';
        import App from './App.vue';
        var app = new Vue({
            el: '#app',
            components: { App },
            template: "<App />"
        });
    ```
5. 生成html文件内容 生成后设置一个div配置id为vue实例选择的id名
6. 配置package.json 中的脚本(scripts)命令
    ```json
        "scripts": {
            "build": "webpack --config ./config/webpack.config.js",
            "serve": "webpack-dev-server --config ./config/webpack.config.js --open --hot"
        }
    ```
7. 配置webpack.config.js
    - 打开vue-loader与webpack官网
    - 先去vue-loader官网中去下载编译vue文件的loader 注⚠️：vue-loader需要使用15版本 `npm install -D vue-loader@15.x vue-template-compiler`
    - 在起步中复制webpack中的基础配置 缺少入口、出口、解析需要单独配置
      - 将基础配置中涉及的loader与package.json中进行比对，是否已经安装了这些loader，未安装进行安装
        安装命令如下：`npm i babel-loader vue-style-loader css-loader -D`
    - 配置出口 记忆不佳去webpack官网复制结构 改造path属性采用node的path核心模块，进行加载目录
    - 配置解析 进入webpack官网，头部导航点击配置 找到“选项”标题翻找resolve属性进行复制，复制完成后删除无用内容，保留extensions、alias属性。extensions将jsx修改为vue ，alias属性清空内容，自己配置vue$、@、components 别名
    - 配置html自动加载编译后的js文件
        - 点击webpack头部导航中的plugin 进入后点击左侧导航栏第一项便是 然后进行复制下载命令与结构，点击中文文档进入后点击左侧导航栏中的plugin，去复制HtmlWebpackPlugin中的template属性然后修改路径找到自己的html文件，自己补充filename属性
8. 命令行运行`npm run build`与`npm run serve`进行分别测试打包功能与热加载编译功能是否正常
9. 命令行执行run build后提示是否下载webpack-cli 输入yes后回车 出现  `successfully` 代表打包成功，然后打开项目中的dist目录运行html检查是否正确有无报错
10. 测试run serve 命令 提示：webpack-dev-server: command not found 进行下载webpack-dev-server包 命令如下：`npm i webpack-dev-server -D` 
11. 修改App.vue 中内容观察浏览器中是否实时编译变动
12. done