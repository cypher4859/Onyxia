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
            <v-toolbar-title>{{ model.fullName }}</v-toolbar-title>
          </v-col>
          <v-spacer />
          <v-col>
            <div>{{ model.age }} yrs</div>
            <div>{{ model.height }}</div>
            <div>{{ model.weight }}</div>
          </v-col>
          <v-col>
            <div>{{ model.streetAddress }} {{ model.city }} {{ model.state }}</div>
          </v-col>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <v-btn
            icon
            color="success"
            :to="{ path: '/case-file-report', params: { model: model }}"
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
import { Prop } from 'vue-property-decorator'
import IPersonOfInterest from '../types/IPersonOfInterest'
import caseFileExampleData from '../testCaseFileData'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

@Component({
  name: 'CaseFileInfoBar'
})
export default class CaseFileInfoBar extends Vue {
  @Prop(Object) model!: ICaseFileInfoModel
}
</script>
