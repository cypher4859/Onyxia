module.exports = {
  'css': {
    'loaderOptions': {
      'scss': {
        'prependData': '@import "@/assets/styles/_variables.scss"'
      },
      'sass': {
        'prependData': '@import "@/assets/styles/_variables.sass"'
      }
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
