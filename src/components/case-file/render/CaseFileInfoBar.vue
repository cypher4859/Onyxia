<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-toolbar prominent>
          <v-col>
            <v-img
              src="@/assets/empty-person.png"
              max-height="160"
              max-width="93"
            />
          </v-col>
          <v-col>
            <v-toolbar-title>James R. Watts</v-toolbar-title>
          </v-col>
          <v-spacer />
          <v-col>
            <div>{{ model.age }}</div>
            <div>{{ model.height }}</div>
            <div>{{ model.weight }}</div>
          </v-col>
          <v-col>
            <div>{{ model.lastLocation }}</div>
            <div>{{ model.phone }}</div>
            <div>{{ model.email }}</div>
            <div>{{ model.relationship }}</div>
          </v-col>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <v-btn
            icon
            color="success"
            :to="{ path: caseFileReportPath, params: { targetPerson: model }}"
          >
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import ICaseFileInfoService from '../services/ICaseFileInfoService'
import { inject } from 'inversify-props'
import TYPES from '@/InjectableTypes/types'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'CaseFileInfoBar'
})
export default class CaseFileInfoBar extends Vue {
  @Prop(Object) readonly model!: ICaseFileInfoModel
  private caseFileReportPath: string = '/case-file-report'

  mounted () {
    this.setDefaults()
  }

  public setDefaults () {
    this.model.age = '44'
    this.model.name = 'James R. Watts'
    this.model.height = '6\'4'
    this.model.weight = '180lbs'
    this.model.lastLocation = 'Salt Lake City, UT'
    this.model.phone = '304-442-4328'
    this.model.email = 'someAlias@someemail.com'
    this.model.relationship = 'Friend'
  }
}
</script>
