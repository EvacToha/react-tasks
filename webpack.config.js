const path = require("path");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },

    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
            },
        ],
    },
};