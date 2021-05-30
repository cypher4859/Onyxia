<template>
  <div>
    <div
      v-for="(casefile, index) in caseFiles"
      :key="index"
    >
      <case-file-info-bar :model="casefile" />
    </div>
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

  async mounted () {
    await Promise.resolve(this.caseFileService.getAllCaseFiles()).then((result) => {
      this.caseFiles = result
      console.log(this.caseFiles)
    })
  }
  // private caseFileModel: ICaseFileInfoModel = this.caseFileService.getDefaultModel()
}
</script>
