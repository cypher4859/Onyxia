import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CaseFile from '../views/CaseFile.vue'
import NetworkMonitor from '../views/NetworkMonitor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Case File',
    component: CaseFile
  },
  {
    path: '/case-file',
    name: 'Case File',
    component: CaseFile
  },
  {
    path: '/net-monitor',
    name: 'Network Monitor',
    component: NetworkMonitor
  }
]

const router = new VueRouter({
  routes
})

export default router
