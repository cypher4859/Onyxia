import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home-dashboard/HomeView.vue'
import CaseFile from '@/components/case-file/CaseFileView.vue'
import CaseFileReport from '@/components/case-file/CaseFileReportView.vue'
import NetworkMonitor from '@/components/network-monitor/NetworkMonitorView.vue'
import AddOns from '@/components/add-on-manager/AddOnsView.vue'
import CameraMonitor from '@/components/camera-monitor/CameraMonitorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Not Found',
    component: Home
  },
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
    path: '/case-file-report',
    name: 'Case File Report',
    component: CaseFileReport
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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: AddOns
  }
]

const router = new VueRouter({
  routes
})

export default router
