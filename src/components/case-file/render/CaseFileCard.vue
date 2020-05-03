<template>
  <div>
    <case-file-info-bar :model="caseFileModel" />
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

@Component({
  name: 'CaseFileCard',
  components: {
    'case-file-info-bar': CaseFileInfoBar
  }
})
export default class CaseFileCard extends Vue {
  @inject(TYPES.ICaseFileInfoService)
  public caseFileInfoService!: ICaseFileInfoService

  private caseFileModel: ICaseFileInfoModel = this.caseFileInfoService.getDefaultModel()
  private caseFileReportPath: string = '/case-file-report'
}
</script>
