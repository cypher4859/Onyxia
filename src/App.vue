<template>
  <v-app>
    <div
      v-if="!signedIn"
    >
      You are signed out
    </div>
    <amplify-auth-container>
      <amplify-authenticator>
        <div v-if="signedIn">
          <v-main
            class="fill-height"
            fluid
          >
            <nav-drawer />
          </v-main>
        </div>
        <amplify-sign-out />
      </amplify-authenticator>
    </amplify-auth-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import NavDrawer from '@/components/NavDrawer.vue'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

@Component({
  name: 'app',
  components: {
    'nav-drawer': NavDrawer
  }
})

export default class App extends Vue {
  private user!: object | undefined
  private authState!: any

  get signedIn () : boolean {
    return true
  }

  private unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
    this.authState = authState
    this.user = authData
  })

  created () {
    this.unsubscribeAuth()
  }

  beforeDestroy () {
    this.unsubscribeAuth()
  }
}
</script>
