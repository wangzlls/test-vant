module.exports = {
  //配置cli
  configureWebpack: {
    //重新保存一些配置
    resolve: {
      //配置路径
      alias: {
        'views': '@/view',
      }
    }
  },
  devServer: {
    disableHostCheck: true,
  }
}