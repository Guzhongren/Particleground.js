const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirname = __dirname.replace( /\\/g, '/' );

module.exports = {
    entry: {
        lib: ['react', 'react-dom', 'jquery'],
        app: './app/src/app.js'
    },
    output: {
        path: './app/dist',
        filename: '[name]-[hash:8].js',

        // require.ensure 按需加载的时候输出名称
        chunkFilename: 'chunk-[name]-[hash:8].js'
    },
    module: {

        // 忽略对已知文件解析，提高编译速度
        //noParse: ['react', 'react-dom', 'jquery'],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,

                // 注意：数组声明时，这里是loaders
                loaders: [ 'react-hot', 'babel' ]
            },
            {
                test: /\.less$/,

                // https://github.com/webpack/extract-text-webpack-plugin
                //loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.scss/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.ttf$|\.eot$/,

                // 将文件从上下文目录复制到输出目录并保留完整的目录结构
                loader: 'file?name=[path][name]-[hash:8].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    // https://github.com/postcss/postcss-loader
    postcss: [
        autoprefixer({
            browsers: [ "IE >= 9", "Firefox > 10", "chrome > 10" ]
        })
    ],
    plugins: [
        new HtmlWebpackPlugin({
            filename: `./index.html`,
            template: `./app/src/app.html`,
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            },
            chunks: ['lib', 'app']
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: '[name]-[hash:8].js'
        })

    ],
    resolve: {
        root: dirname,
        extensions: [ '', '.js', '.jsx', '.json', '.scss', '.less', '.css' ],
        alias: {
            pjs: 'production/particleground.all'
        }
    },
    devServer: {
        contentBase: `${ dirname }/app/dist`,
        hot: true,
        inline: true,
        colors: true
    }
};