<template>
  <amplify-authenticator>
    <v-app>
      <v-main
        class="fill-height"
        fluid
      >
        <nav-drawer />
      </v-main>
    </v-app>
    <amplify-sign-out />
  </amplify-authenticator>
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
