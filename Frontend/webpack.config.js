const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

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
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/, // css 확장자 추가
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(webp|png|jpg|jpeg|gif)$/,
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new FaviconsWebpackPlugin({
      logo: "public/favicon.ico",
    }),
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8888",
      },
    },
    static: {
      directory: path.resolve(__dirname, "dist"), // directory경로: dist 폴더
      publicPath: "/assets", // localhost:port/publicPath안에 있는 파일에 접근 가능, 파일 업로드시 src경로 변경
    },
    compress: true,
    port: 1811,
    historyApiFallback: true,
  },
};
