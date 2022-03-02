const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/, // css 확장자 추가
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(webp|png|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        MODE: JSON.stringify("production"),
        SERVER_URL: JSON.stringify("/"),
      },
    }),
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7777",
      },
    },
    static: {
      directory: path.resolve(__dirname, "public"),
      publicPath: "/assets", // localhost:port/assets/public
    },
    compress: true,
    port: 1111,
    historyApiFallback: true,
  },
};
