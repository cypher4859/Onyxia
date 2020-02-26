<template>
  <div>
    <!-- Grab the actual case file data and display it -->
    <case-file-report-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileReportCard from '@/components/case-file/CaseFileReportCard.vue'

@Component({
  name: 'CaseFileReportView',
  components: {
    'case-file-report-card': CaseFileReportCard
  }
})
export default class CaseFileReportView extends Vue {

}
</script>
