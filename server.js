const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config')
const server = new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    inline:true,
    historyApiFallback: true
})

server.listen(1234,'localhost', function(err, resule){
    console.log('服务器在1234端口')
})