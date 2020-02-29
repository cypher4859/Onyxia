import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#212F3D',
        secondary: '#17202A',
        success: '#00C853'
      }
    }
  }
})
