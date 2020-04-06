import 'reflect-metadata'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'LocalStorageAddonStore',
  storage: window.sessionStorage,
  supportCircular: true,
  reducer: (state: any) => ({
    myAddonStore: state.AddonStore
  }) // only save navigation module
  // filter: (mutation) => mutation.type == 'addNavItem'
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
