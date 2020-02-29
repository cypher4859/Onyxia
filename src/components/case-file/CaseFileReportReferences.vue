<template>
  <div>
    {{ reportModel }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IReferences from '@/types/IReferences'
import CaseFileReportBaseDataCard from '@/components/case-file/CaseFileReportBaseDataCard.vue'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'CaseFileReportReferencesCard'
})
export default class CaseFileReportReferencesCard extends CaseFileReportBaseDataCard {
}
</script>
