<template>
  <div>
    <v-container>
      <v-card
        class="ml-n12 mx-auto"
        height="200"
        elevation="18"
      >
        <v-col
          cols="12"
          sm="12"
        >
          <v-subheader>Add Ons</v-subheader>
          <v-row>
            <v-col
              v-for="(index, key) in registeredAddons"
              :key="key"
            >
              <v-checkbox
                v-model="index.enabled"
                :label="index.model.title"
                color="success"
              />
            </v-col>
          </v-row>
          <div>
            <v-btn
              @click="saveAddons()"
            >
              <div class="primary-content-button-text">
                Save
              </div>
            </v-btn>
            &nbsp;
            <v-btn
              @click="clearAllAddons()"
            >
              <div class="primary-content-button-text">
                Clear
              </div>
            </v-btn>
          </div>
        </v-col>
      </v-card>
      <addons-saved-alert
        :snack-bar-message="addonsSavedToStorageAlert"
        :show-snackbar="addonsSavedAlert"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IMenuItem from '@/types/IMenuItem'
import TYPES from '@/InjectableTypes/types'
import SystemSnackbarAlert from '@/components/utility/SystemSnackbarAlert.vue'
import IAddonsService from '../services/IAddonsService'
import IAddon from '../types/IAddon'
import { Prop, Watch } from 'vue-property-decorator'
import { inject } from 'inversify-props'

@Component({
  name: 'AddOnsCard',
  components: {
    'addons-saved-alert': SystemSnackbarAlert
  }
})
export default class AddOnsCard extends Vue {
  @inject(TYPES.IAddonsService)
  private addonService!: IAddonsService

  // It will need to grab the possible addons from the store
  private selectedEnabledAddonsTitles : string[] = []
  private registeredAddons: IAddon[] = this.addonService.getRegisteredAddonsFromStore()
  private addonsSavedToStorageAlert : string = 'Addons Saved!'
  private showAlertAddonsSaved : boolean = false

  mounted () {
    this.selectedEnabledAddonsTitles = this.addonService.getEnabledAddonsTitles
  }

  @Watch('selectedEnabledAddonsTitles', { immediate: true, deep: false })
  public syncAddonsTitlesWithEnabledDisabledAddons () : void {
    this.selectedEnabledAddonsTitles.forEach((enabledAddonTitle: string) => {
      console.log('Checking Selection is enabled for: ', enabledAddonTitle)
      this.registeredAddons.forEach((registeredAddon: IAddon) => {
        if (registeredAddon.model.title === enabledAddonTitle && !registeredAddon.enabled) {
          console.log('Enabling Addon since it is not enabled:', registeredAddon.model.title)
          registeredAddon.enabled = true
        }
      })
    })
  }

  public clearAllAddons () : void {
    this.selectedEnabledAddonsTitles = []
    this.registeredAddons.forEach((addon: IAddon) => {
      addon.enabled = false
    })
    // need to show a confirmation dialog then
    // wipe local storage.
  }

  public saveAddons () : void {
    this.toggleAddonsSavedAlert()
    this.addonService.saveAddonsToLocalStorage()
  }

  get addonsSavedAlert () : boolean {
    return this.showAlertAddonsSaved
  }

  private toggleAddonsSavedAlert () : void {
    this.showAlertAddonsSaved = !this.showAlertAddonsSaved
  }
}
</script>
