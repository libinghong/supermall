module.exports = {
  configureWebpack: {
    resolve: {
      // Extensions: [],
      alias: {
        'assets': '@/assets' ,
        'components': '@/components' ,
        'network': '@/network' ,
        'common': "@/common" ,
        'views': "@/views"
      }
    }
  },
  lintOnSave: false,
  devServer: {

      overlay: {

          warning: false,

          errors: false

      }

  },
}
