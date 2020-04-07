import 'reflect-metadata'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'LocalStorageAddonStore',
  storage: window.localStorage,
  supportCircular: true
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
