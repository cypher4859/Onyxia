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
          <p>Add Ons</p>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                v-model="selectedEnabledAddonsTitles"
                :items="registeredAddonsTitles"
                label="Enabled Addons"
                deletable-chips
                multiple
                chips
                hint="Select which addons should be enabled"
              />
            </v-col>
          </v-row>
          <v-btn
            @click="saveAddons()"
          >
            <div class="primary-content-button-text">
              Save
            </div>
          </v-btn>
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
  private addonManagerService!: IAddonsService

  // It will need to grab the possible addons from the store
  private selectedEnabledAddonsTitles : string[] = []
  private registeredAddonsTitles : string[] = this.addonManagerService.getRegisteredAddonsTitles
  private addonsSavedToStorageAlert : string = 'Addons Saved!'
  private showAlertAddonsSaved : boolean = false

  created () {
    this.addonManagerService.retrieveAddonComponentsFromLocalStorage()
    this.selectedEnabledAddonsTitles = this.addonManagerService.getEnabledAddonsTitles()
  }

  @Watch('selectedEnabledAddonsTitles', { immediate: false, deep: false })
  public syncAddonsTitlesWithEnabledDisabledAddons () : void {
    this.addonManagerService.syncEnableDisableAddons(this.selectedEnabledAddonsTitles)
  }

  public saveAddons () : void {
    this.toggleAddonsSavedAlert()
    this.addonManagerService.saveAddonsToLocalStorage()
  }

  get addonsSavedAlert () : boolean {
    return this.showAlertAddonsSaved
  }

  private toggleAddonsSavedAlert () : void {
    this.showAlertAddonsSaved = !this.showAlertAddonsSaved
  }
}
</script>
