<template>
  <div>
    <addon-manager />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AddOnsView from '@/components/add-on-manager/AddOnsView.vue'

@Component({
  name: 'SettingsGlobalCard',
  components: {
    'addon-manager': AddOnsView
  }
})
export default class SettingsGlobalCard extends Vue {

}
</script>
