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
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'CaseFileReportLocationCard'
})
export default class CaseFileReportLocationCard extends CaseFileReportBaseDataCard {
}
</script>
