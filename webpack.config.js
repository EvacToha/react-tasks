const path = require("path");

module.exports = {
    mode: "development",

    entry: "./src/index.tsx",

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
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

// {
//     test: /.(js|jsx)$/,
//         exclude: /node_modules/,
//     use: {
//     loader: "babel-loader",
//         options:{
//         presets: ["@babel/preset-env", "@babel/preset-react"],
//     }
// },
// },