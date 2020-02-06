<template>
  <v-app>
    <v-content
      class="fill-height"
      fluid
    >
      <nav-drawer />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import NavDrawer from '@/components/NavDrawer.vue'

@Component({
  name: 'app',
  components: {
    'nav-drawer': NavDrawer
  }
})

export default class App extends Vue {
  //
}
</script>
