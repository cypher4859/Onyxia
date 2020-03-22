<template>
  <v-card>
    <p>Add Ons</p>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="enabledAddons"
          :items="installedAddonsNames"
          label="Enabled Addons"
          multiple
          chips
          hint="Select which addons should be enabled"
          persistent-hint
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
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
  private installedAddons! : IMenuItem[]
  private installedAddonsNames! : string[]

  @inject(TYPES.IAddonsService)
  private addonManagerService!: IAddonsService

  beforeMount () {
    this.installedAddons = this.addonManagerService.getEnabledAddonModels()
    this.installedAddonsNames = this.addonManagerService.getEnabledAddonModels().map((addonModel: IMenuItem) => addonModel.title)
  }

  public enableAndDisabledAddons () {
    this.addonManagerService.setEnabledAddonComponents(this.enabledAddons)
  }
}
</script>
