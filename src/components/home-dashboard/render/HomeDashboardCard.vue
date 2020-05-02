<template>
  <v-container>
    <addon-manager />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AddOnsView from '@/components/add-on-manager/AddOnsView.vue'

@Component({
  name: 'HomeDashboardCard',
  components: {
    'addon-manager': AddOnsView
  }
})
export default class HomeDashboardCard extends Vue {

}
</script>
