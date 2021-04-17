<template>
  <div>
    <settings />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SettingsGlobalCard from './render/SettingsGlobalCard.vue'

@Component({
  name: 'HomeView',
  components: {
    'settings': SettingsGlobalCard
  }
})
export default class SettingsGlobalView extends Vue {

}
</script>
