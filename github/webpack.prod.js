const HtmlWebpackPlugin = require("html-webpack-plugin");
const { request } = require("http");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin =  require('terser-webpack-plugin');

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";
  const webpack = require('webpack')

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: "./src/index.jsx",
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
    },
  
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          include:[path.resolve(__dirname,'src/styles'),/node_modules/],
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader","postcss-loader"
          ]
        },
        {
          test: /\.css$/,
          exclude:[path.resolve(__dirname,'src/styles'),/node_modules/],
          use:[ MiniCssExtractPlugin.loader,"css-loader?modules","postcss-loader"]
        },
        {
          test: /\.less$/,
          include:[path.resolve(__dirname,'src/styles'),/node_modules/],
          use: [
            "style-loader","css-loader","postcss-loader","less-loader"
          ]
        },
        {
          test: /\.less$/,
          exclude:[path.resolve(__dirname,'src/styles'),/node_modules/],
          use:["style-loader","css-loader?modules","postcss-loader","less-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }

      ],
    },
    optimization:{
      minimize:true,
      minimize: [
        new TerserPlugin(),
        new OptimizeCssAssetsPlugin(),
      ],
      splitChunks:{
        chunks:'all',
        name:true,
        cacheGroups:{
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        },
      },

    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Github热⻔项⽬',
        favicon: 'public/favicon.png',
        template: "public/index.html",
        minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        },
      }),
 
      new MiniCssExtractPlugin({
          filename:'[name].[contenthash:8].css',
          chunkFilename:'[name].[contenthash:8].chunk.css',          
      }),
      new BundleAnalyzerPlugin(),
    ],
  };
};