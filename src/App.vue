<template>
  <v-app>
    <div
      v-if="!signedIn"
    >
      You are signed out
    </div>
    <amplify-auth-container>
      <amplify-authenticator>
        <amplify-sign-in
          slot="sign-in"
          header-text="Welcome to Obsidia"
        />
        <div v-if="signedIn">
          <v-main
            class="fill-height"
            fluid
          >
            <nav-drawer
              @logout="showLogoutWarningDialog()"
            />
          </v-main>
        </div>
        <standard-dialog
          :show-dialog="showLogoutWarning"
          @close="showLogoutWarning = false"
        >
          <v-card-title>
            Logout
          </v-card-title>
          <v-card-text>
            <div>
              You are about to <strong class="red--text">logout</strong>. Are you sure you want to continue?
            </div>
          </v-card-text>
          <v-row>
            <v-col
              class="d-flex justify-center"
            >
              <v-btn
                class="mx-4"
                color="error"
                @click="logout()"
              >
                Logout
              </v-btn>
              <v-btn
                class="mx-4"
                outlined
                @click="showLogoutWarning = false"
              >
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </standard-dialog>
      </amplify-authenticator>
    </amplify-auth-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Mixins } from 'vue-property-decorator'
import NavDrawer from '@/components/NavDrawer.vue'
import DialogBoxStandard from '@/components/utility/DialogBoxStandard.vue'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'
import { inject } from 'inversify-props'
import TYPES from './InjectableTypes/types'
import IUserManagementService from '@/services/interfaces/IUserManagementService'
import RouteMixin from './mixins/route-mixin'

@Component({
  name: 'app',
  components: {
    'nav-drawer': NavDrawer,
    'standard-dialog': DialogBoxStandard
  }
})

export default class App extends Mixins(RouteMixin) {
  @inject(TYPES.IUserManagementService)
  private userManagementService!: IUserManagementService

  private unsubscribeAuth!: any
  private showLogoutWarning: boolean = false

  get signedIn () : boolean {
    return true
  }

  showLogoutWarningDialog () {
    this.showLogoutWarning = true
  }

  created () {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.userManagementService.loadUser(authData, authState)
      if (authState === 'signedin') {
        this.gotoPath('/')
      }
    })
  }

  beforeDestroy () {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.userManagementService.loadUser(authData, authState)
    })
  }

  logout () {
    this.showLogoutWarning = false
    this.signOut()
  }

  async signOut () {
    try {
      await Auth.signOut()
    } catch (error) {
      const e = error
    }
  }
}
</script>
<style lang="scss">
  @import './styles/scss/colors.scss';

  amplify-authenticator {
    --amplify-primary-color: #00C853;
    --amplify-background-color: #1e1e1e;
    --amplify-secondary-color: var(--amplify-grey);
    --amplify-primary-tint: #188d95;
    --amplify-primary-shade: #15828a;
  }
</style>
