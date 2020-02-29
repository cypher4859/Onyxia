<template>
  <v-card>
    <back-btn />
    <v-container>
      <v-row>
        <v-col>
          <v-expansion-panels
            popout
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>Identity</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-identity :report-model="model.identity" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Location</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-location :report-model="model.location" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>References</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-references :report-model="model.references" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RouterBackButton from '@/components/utility/BackButton.vue'
import CaseFileReportIdentityCard from '@/components/case-file/CaseFileReportIdentityCard.vue'
import CaseFileReportReferencesCard from '@/components/case-file/CaseFileReportReferences.vue'
import CaseFileReportLocationCard from '@/components/case-file/CaseFileReportLocationCard.vue'
import ICaseFileService from '../../services/interfaces/ICaseFileService'
import IPersonOfInterest from '@/types/IPersonOfInterest'
import { inject } from 'inversify-props'
import TYPES from '@/InjectableTypes/types'

@Component({
  name: 'CaseFileReportCard',
  components: {
    'back-btn': RouterBackButton,
    'report-identity': CaseFileReportIdentityCard,
    'report-references': CaseFileReportReferencesCard,
    'report-location': CaseFileReportLocationCard
  }
})
export default class CaseFileReportCard extends Vue {
  private model! : IPersonOfInterest

  created () {
    this.loadCaseFileData()
  }

  @inject(TYPES.ICaseFileService)
  private caseFileService!: ICaseFileService

  public loadCaseFileData () {
    this.model = this.caseFileService.getCaseFileData()
  }
}
</script>
