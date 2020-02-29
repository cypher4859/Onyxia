<template>
  <div>
    {{ reportModel }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ILocation from '@/types/ILocation'
import CaseFileReportBaseDataCard from './CaseFileReportBaseDataCard.vue'

@Component({
  name: 'CaseFileReportLocationCard'
})
export default class CaseFileReportLocationCard extends CaseFileReportBaseDataCard {
}
</script>
