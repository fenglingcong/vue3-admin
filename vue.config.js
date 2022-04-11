const { defineConfig } = require('@vue/cli-service');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const mockApi = require('./mock');

/* const isProd = process.env.NODE_ENV === 'production';
const assetsCDN = {
  externals: {
    vue: 'vue',
    'vue-router': 'vue-router',
  },
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@3.2.13/dist/vue.global.prod.js',
    '//cdn.jsdelivr.net/npm/vue-router@4.0.3/dist/vue-router.global.prod.js',
    // '//cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.global.prod.js',
  ],
}; */

module.exports = defineConfig({
  transpileDependencies: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'local-ip',
    client: {
      // logging: 'info', // 日志
      overlay: { // 编译错误或警告时 是否全屏显示
        errors: true,
        warnings: false,
      },
      // progress: true, // 在浏览器百分比显示编译进度
      // 指定 URL 到 web socket 服务器
      // To get protocol/hostname/port from browser
      webSocketURL: 'auto://0.0.0.0:0/ws',
      /* webSocketURL: {
        hostname: '0.0.0.0', // 不是真正意义上的IP 是一个本地ip的集合
        pathname: '/ws',
        port: 0, // 指定port 只在port相同时 会热更新
      }, */
    },
    /* proxy: {
      '/api': {
        target: 'http://dev.com', // dev
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    }, */
    // 详细配置参考 https://webpack.docschina.org/configuration/dev-server/#devserversetupmiddlewares
    // mock数据
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      mockApi.dashboard.getList(devServer);

      return middlewares;
    },
  },
  configureWebpack: {
    plugins: [
      // 压缩成 .gz 文件
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240, // 压缩限制
        minRatio: 0.8, // 压缩率
        deleteOriginalAssets: false, // 删除源文件
      }),
    ],
    // externals: isProd ? assetsCDN.externals : {},
  },
  /* chainWebpack: (config) => {
    if (isProd) {
      config.plugin('html').tap((args) => {
        args[0].cdn = assetsCDN;
        return args;
      });
    }
  }, */
});
