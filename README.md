从零开始搭建react开发环境

首先搭建node环境(省略)
### npm init

### 安装依赖
```bash
npm install webpack webpack-dev-server babel --save-dev

npm install react react-dom babel-loader less-loader css-loader style-loader url-loader file-loader babel-preset-es2015 babel-preset-react react-hot-loader jquery eslint eslint-plugin-react --save-dev

npm install babel-preset-stage-0 --save-dev
移动端  npm install antd-mobile --save-dev
pc     npm install antd --save-dev
```

### 新建webpack.config.js文件
[html-webpack-plugin](https://www.cnblogs.com/wonyun/p/6030090.html)

```bash
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename: './js/[name].js',
        path:path.resolve('./build')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['es-2015','react']
                }
            },
            {
                test:/\.[s]*css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/i,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            context: './src',
                            name: './img/[path][hash].[ext]',
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            template: 'index.html'
        }),
        new CleanWebpackPlugin([
            'build'
        ])
    ],
    devtool:'inline-source-map'
}
```


