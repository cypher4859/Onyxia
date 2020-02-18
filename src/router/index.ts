import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import CaseFile from '@/views/CaseFile.vue'
import NetworkMonitor from '@/views/NetworkMonitor.vue'
import AddOns from '@/views/AddOns.vue'
import CameraMonitor from '@/views/CameraMonitor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/add-ons',
    name: 'Add Ons and Plugins',
    component: AddOns
  },
  {
    path: '/camera-monitor',
    name: 'Camera Monitor',
    component: CameraMonitor
  }
]

const router = new VueRouter({
  routes
})

export default router
