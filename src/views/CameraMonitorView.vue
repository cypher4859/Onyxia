<template>
  <div>
    <camera-monitor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CameraMonitorCard from '@/components/camera-monitor/CameraMonitorCard.vue'

@Component({
  name: 'CameraMonitorView',
  components: {
    'camera-monitor': CameraMonitorCard
  }
})
export default class CameraMonitorView extends Vue {

}
</script>
