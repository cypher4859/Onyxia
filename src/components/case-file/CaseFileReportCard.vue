<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
          md="1"
        >
          <back-btn />
        </v-col>
        <v-col>
          <edit-btn @toggleIsEditable="toggleIsEditableFlag()" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels
            popout
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header>Identity</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-identity
                  :is-editable-flag="isEditable"
                  :report-model="model.identity"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Location</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-location
                  :is-editable-flag="isEditable"
                  :report-model="model.location"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>References</v-expansion-panel-header>
              <v-expansion-panel-content>
                <report-references
                  :is-editable-flag="isEditable"
                  :report-model="model.references"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="showIsEditableSnackbar"
        top
        left
        :timeout="1800"
      >
        <span color="success">
          {{ snackBarMessage() }}
        </span>
      </v-snackbar>
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
import EditButton from '@/components/utility/EditButton.vue'

@Component({
  name: 'CaseFileReportCard',
  components: {
    'back-btn': RouterBackButton,
    'edit-btn': EditButton,
    'report-identity': CaseFileReportIdentityCard,
    'report-references': CaseFileReportReferencesCard,
    'report-location': CaseFileReportLocationCard
  }
})
export default class CaseFileReportCard extends Vue {
  private model! : IPersonOfInterest
  private isEditable : boolean = false
  private showIsEditableSnackbar : boolean = false

  created () {
    this.loadCaseFileData()
  }

  @inject(TYPES.ICaseFileService)
  private caseFileService!: ICaseFileService

  public loadCaseFileData () {
    this.model = this.caseFileService.getCaseFileData()
  }

  public toggleIsEditableFlag () : void {
    this.isEditable = !this.isEditable
    this.showIsEditableSnackbar = true
  }

  private snackBarMessage () : string {
    return !this.isEditable ? 'Edit Mode:   OFF' : 'Edit Mode:   ON'
  }
}
</script>
