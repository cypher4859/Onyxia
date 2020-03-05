<template>
  <v-card>
    <p>Add Ons</p>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="someAddons"
          :items="installedAddons"
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

@Component({
  name: 'AddOnsCard'
})
export default class AddOnsCard extends Vue {
  // It will need to grab the possible addons from the store
  private someAddons : string[] = []
  private installedAddons : string[] = ['camera-monitor', 'network-monitor', 'case-file']
}
</script>
