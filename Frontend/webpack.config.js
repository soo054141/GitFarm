const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
      title: "Progressive Web Application",
    }),
    new InjectManifest({
      swSrc: "./public/service-worker.js", // service-worker file location before build
      swDest: "service-worker.js", //  service-worker file location after build(default: dist/)
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/favicon.ico", to: "" },
        { from: "./public/manifest.json", to: "" },
        { from: "./public/sad-face-logo.svg", to: "" },
        { from: "./public/offline.html", to: "" },
        { from: "./public/logo.png", to: "" },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        MODE: JSON.stringify("production"),
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
      publicPath: "/", // localhost:port/assets/public
    },
    compress: true,
    port: 1111,
    historyApiFallback: true,
  },
};
