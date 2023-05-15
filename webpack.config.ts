import path from "path";
import webpack, {Configuration} from "webpack";
import dotenv from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const webpackConfig = (env): Configuration => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed)
            /*{
                PRODUCTION: env.production || !env.development,
                NAME: JSON.stringify(require("./package.json").name),
                VERSION: JSON.stringify(require("./package.json").version)
            }*/
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
});

export default webpackConfig;