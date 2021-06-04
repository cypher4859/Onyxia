<template>
  <div>
    <v-row>
      <v-col>
        <div class="d-flex justify-end">
          <v-btn
            @click="enableSelectMode"
          >
            Select
          </v-btn>
        </div>
      </v-col>
      <v-col
        v-if="selectedCaseFiles.length"
        cols="2"
      >
        <div class="d-flex justify-end">
          <v-btn
            @click="showDeleteWarning = true"
          >
            Delete
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div
      v-for="(casefile, index) in caseFiles"
      :key="index"
    >
      <div>
        <case-file-info-bar
          :model="casefile"
          :disabled="selectMode"
        >
          <template v-slot:caseFileSelection>
            <v-col
              v-if="selectMode"
              :cols="1"
            >
              <v-checkbox
                v-model="selectedCaseFiles"
                :value="casefile"
                class="align-content-center"
              />
            </v-col>
          </template>
        </case-file-info-bar>
      </div>
    </div>
    <v-dialog
      v-model="showDiscardSelectedCaseFileWarning"
      transition="dialog-bottom-transition"
      max-width="600"
      max-height="400"
    >
      <v-card>
        <v-container>
          <v-card-title>
            Discard Warning
          </v-card-title>
          <div class="d-flex align-content-center justify-center ma0-4">
            {{ showDiscardSelectedWarningMessage }}
          </div>
          <div class="d-flex align-content-center justify-center ma-4">
            <v-btn
              class="d-flex ma-2"
              @click="contiueDiscardDialog()"
            >
              <div class="primary-content-button-text">
                Continue
              </div>
            </v-btn>
            <v-btn
              class="d-flex ma-2"
              @click="showDiscardSelectedCaseFileWarning = false"
            >
              <div class="primary-content-button-text">
                Cancel
              </div>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="showDeleteWarning"
      transition="dialog-bottom-transition"
      max-width="600"
      max-height="400"
    >
      <v-card>
        <v-container>
          <v-card-title>
            Deletion
          </v-card-title>
          <div class="d-flex align-content-center justify-center ma0-4">
            {{ showDeletionWarningMessage }}
          </div>
          <div class="d-flex align-content-center justify-center ma-4">
            <v-btn
              class="d-flex ma-2"
              @click="deleteSelectedCaseFiles()"
            >
              <div class="primary-content-button-text">
                Continue
              </div>
            </v-btn>
            <v-btn
              class="d-flex ma-2"
              @click="showDeleteWarning = false"
            >
              <div class="primary-content-button-text">
                Cancel
              </div>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileInfoBar from './CaseFileInfoBar.vue'
import TYPES from '@/InjectableTypes/types'
import { inject } from 'inversify-props'
import ICaseFileInfoService from '../services/ICaseFileInfoService'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import ICaseFileService from '../services/ICaseFileService'

@Component({
  name: 'CaseFileCard',
  components: {
    'case-file-info-bar': CaseFileInfoBar
  }
})
export default class CaseFileCard extends Vue {
  @inject(TYPES.ICaseFileService)
  public caseFileService!: ICaseFileService

  private caseFiles: ICaseFileInfoModel[] = []
  private selectMode: boolean = false
  private selectedCaseFiles: ICaseFileInfoModel[] = []
  private showDiscardSelectedCaseFileWarning: boolean = false
  private showDeleteWarning: boolean = false

  async mounted () {
    await Promise.resolve(this.caseFileService.getAllCaseFiles()).then((result) => {
      this.caseFiles = result
    })
  }

  private enableSelectMode () : void {
    if (this.selectMode && this.selectedCaseFiles) {
      this.showDiscardSelectedCaseFileWarning = true
    } else {
      this.changeSelectMode()
    }
  }

  private changeSelectMode () : void {
    this.selectMode = !this.selectMode
  }

  get showDiscardSelectedWarningMessage () : string {
    return 'Are you sure you want to discard the current selection?'
  }

  private contiueDiscardDialog () : void {
    this.showDiscardSelectedCaseFileWarning = false
    this.changeSelectMode()
  }

  private deleteSelectedCaseFiles () : void {
    this.caseFileService.deleteCaseFiles(this.selectedCaseFiles)
    this.selectedCaseFiles = []
    this.changeSelectMode()
    this.showDeleteWarning = false
  }

  get showDeletionWarningMessage () : string {
    return 'Are you sure you want to delete the currently selected case files?'
  }
}
</script>
