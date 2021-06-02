import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import registerContainerServices from './app.container'
import 'reflect-metadata'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import Toasted from 'vue-toasted'

Amplify.configure(config)

// css
require('@mdi/font/css/materialdesignicons.css')
require('vuetify/dist/vuetify.min.css')

class AppSetup {
  constructor () {
    this.loadDependencies()
    this.loadApp()
  }

  loadDependencies () {
    registerContainerServices()
  }

  private loadApp (): void {
    Vue.use(Toasted)
    Vue.config.productionTip = false
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
}

const app = new AppSetup()
export default app
