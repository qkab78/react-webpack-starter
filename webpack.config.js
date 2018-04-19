const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname, '/dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'React app',
            template:'./src/index.html'
        })
    ],
    devServer:{
        port:9000
    }
}