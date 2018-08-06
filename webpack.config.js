const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const root = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const isDevMode = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV.toString().trim() !== 'production' : true;

const paths = {
    app: `${root}/app/app.module.js`,
    styles: `${root}/styles`,
    static: {
        images: `${root}/img/**/*`
    },
};

// Plugins
const prep = {
    clean: new cleanPlugin([
        dist,
    ]),
    copy: new copyPlugin([{
        from: paths.static.images,
        to: 'img/',
        flatten: true,
    }]),
    htmlwebpack: new htmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
    }),
    extract: new miniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        path: `${dist}/`,
        publicPath: `/${root}/`,
        filename: "css/[name].css"
    })
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

const images = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        {loader: 'file-loader'}
    ]
};

const styles = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        {loader: isDevMode ? 'style-loader' : miniCssExtractPlugin.loader},
        {loader:'css-loader'},
        {loader: 'postcss-loader'},
        {loader:'sass-loader'}
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

module.exports = {
    /* if no entry name is submitted, e.g. like 'entry: paths.app' instead of an object, the name is 'main'.
       This value is available e.g. in output config via [name] (see output.filename)
       @see https://webpack.js.org/configuration/entry-context/#entry */
    entry: {
        testcomponents: paths.app
    },
    module: {
        rules: [
            scripts,
            images,
            styles,
            markup,
            fonts,
        ],
    },
    plugins: [
        prep.clean,
        prep.copy,
        prep.extract,
        prep.htmlwebpack
    ],
    output: { // @see https://webpack.js.org/configuration/output/
        path: `${dist}/`,
        publicPath: '/angularjs-webpack-es2015',
        filename: 'js/app.[name].js',
    },
    devServer: {
        contentBase: './src',
        index: 'index.html',
        openPage: 'angularjs-webpack-es2015/',
        port: 8080,
        historyApiFallback: {
            index:'404.html'
        }
    }
};
