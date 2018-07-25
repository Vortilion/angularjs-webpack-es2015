const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const root = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const paths = {
    app: `${root}/app/app.module.js`,
    styles: `${root}/styles`,
    static: {
        index: `${root}/index.html`,
        images: `${root}/img/**/*`,
    },
};

// Plugins
const prep = {
    clean: new cleanPlugin([
        dist,
    ]),
    copy: new copyPlugin([{
        from: paths.static.index,
    }, {
        from: paths.static.images,
        to: 'img/',
        flatten: true,
    }]),
    htmlwebpack: new htmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
    })
};

const extract = {
    styles: new extractPlugin('css/styles.css'),
};

// Loaders
const scripts = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        {loader: 'ng-annotate-loader'},
        {loader: 'babel-loader'}
    ],
};

const styles = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
};


const markup = {
    test: /\.html$/,
    use: [
        {loader: 'raw-loader'}
    ]
};

const fonts = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    use: [
        {loader: 'file-loader?name=fonts/[name].[ext]'}
    ]
};

// Config object
const config = {
    entry: paths.app,
    module: {
        rules: [
            scripts,
            styles,
            markup,
            fonts,
        ],
    },
    plugins: [
        prep.clean,
        prep.copy,
        extract.styles,
        prep.htmlwebpack
    ],
    output: {
        path: `${dist}/`,
        publicPath: '/',
        filename: 'js/app.[name].js',
    },
    devServer: {
        contentBase: './src',
        port: 8080,
        historyApiFallback: true,
    },
};

module.exports = config;
