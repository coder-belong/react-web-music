const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    // 配置别名
    alias: {
      '@': resolve('src'),
    },

    // 解决打包后页面空白问题
    // 以下代码！！！  与alias或babel同级
    // configure: (webpackConfig, {env, paths}) => {
    //   // 修改build的生成文件名称 不设置的话默认会在build文件夹下打包
    //   paths.appBuild = 'dist';
    //   webpackConfig.output = {
    //     ...webpackConfig.output,
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: './'
    //   }
    //   return webpackConfig;
    //
    // }
  }
}
