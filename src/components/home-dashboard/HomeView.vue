<template>
  <div>
    <dashboard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HomeDashboardCard from './render/HomeDashboardCard.vue'

@Component({
  name: 'HomeView',
  components: {
    'dashboard': HomeDashboardCard
  }
})
export default class HomeView extends Vue {

}
</script>
