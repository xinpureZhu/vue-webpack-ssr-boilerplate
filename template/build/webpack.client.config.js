const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  resolve: {
    alias: {
    }
  },
  optimization:{
    splitChunks:{
      name: true,
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "manifest",
                chunks: "all"
            }
        }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === 'production') {

  webpackConfig.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({})
  ]

  webpackConfig.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-seethru',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        }
      ]
    })
  )
}

module.exports = webpackConfig
