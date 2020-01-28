import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

class AppSetup {
  constructor () {
    this.loadApp()
  }

  private loadApp (): void {
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
