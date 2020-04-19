<template>
  <div>
    <network-monitor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import NetworkMonitorCard from './render/NetworkMonitorCard.vue'

@Component({
  name: 'NetworkMonitorView',
  components: {
    'network-monitor': NetworkMonitorCard
  }
})
export default class NetworkMonitorView extends Vue {

}
</script>
