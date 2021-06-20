<template>
  <div>
    <!-- Grab the actual case file data and display it -->
    <case-file-report-card :model="model" />
  </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileReportCard from './render/CaseFileReportCard.vue'
import IPersonOfInterest from './types/IPersonOfInterest'
import ICaseFileInfoModel from './types/ICaseFileInfoModel'

@Component({
  name: 'CaseFileReportView',
  components: {
    'case-file-report-card': CaseFileReportCard
  }
})
export default class CaseFileReportView extends Vue {
  @Prop(Object) model!: ICaseFileInfoModel
}
</script>
