<template>
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
              v-model="enabledAddons"
              :items="registeredAddons"
              label="Enabled Addons"
              deletable-chips
              multiple
              chips
              hint="Select which addons should be enabled"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import IAddonsService from '@/components/add-on-manager/services/IAddonsService'
import TYPES from '@/InjectableTypes/types'
import { inject } from 'inversify-props'
import IAddon from '../types/IAddon'

@Component({
  name: 'AddOnsCard'
})
export default class AddOnsCard extends Vue {
  // It will need to grab the possible addons from the store
  private enabledAddons : string[] = []
  private registeredAddons! : string[]

  @inject(TYPES.IAddonsService)
  private addonManagerService!: IAddonsService

  beforeMount () {
    this.enabledAddons = this.addonManagerService.getEnabledAddonsModels().map((addonModel: IMenuItem) => addonModel.title)
    this.registeredAddons = this.addonManagerService.getRegisteredAddonsModels().map((addonModel: IMenuItem) => addonModel.title)
  }

  @Watch('enabledAddons', { immediate: false, deep: false })
  public enableAndDisabledAddons () {
    this.addonManagerService.enableAddons(this.enabledAddons)
  }
}
</script>
