// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.ts',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    // },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: ['css-loader', 'less-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    //  'postcss-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', ".less", "..."],
    },
    externals: [
        {
            react: 'react',
            'react-dom': 'react-dom',
            'styled-components': 'styled-components',
        },
        // Make antd library styles to be external to current project
        /^antd[.]*/,
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

    } else {
        config.mode = 'development';
    }
    return config;
};
