<template>
  <div>
    <case-file-info-bar :model="caseFiles[0]" />
    <!-- Create a service for loading a contrived single case file from db.json;
      Grab the data; do a router link and pass that data to the CaseFileReportCard as a prop -->
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

  async created () {
    await Promise.resolve(this.caseFileService.getAllCaseFiles({})).then((result) => {
      this.caseFiles = result
    })
  }
  // private caseFileModel: ICaseFileInfoModel = this.caseFileService.getDefaultModel()
}
</script>
