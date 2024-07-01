import path from "path";
import { Configuration, IgnorePlugin, webpack } from "webpack";
import "webpack-dev-server";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: Configuration = {
    mode: "production",
    target: "node",
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/build/chrono-curator"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.node$/,
                use: "node-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./tsconfig.json",
                extensions: [".ts", ".js"],
                baseUrl: "./",
            }),
        ],
    },
};

export default config;
