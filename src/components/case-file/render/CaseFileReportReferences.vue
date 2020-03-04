<template>
  <div>
    {{ reportModel }}
    <v-row>
      <v-col
        cols="8"
        md="4"
        offset="1"
      >
        <v-text-field
          v-model="reportModel['phone-contact']"
          label="Phone Number"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
      <v-col
        cols="8"
        md="4"
      >
        <v-text-field
          v-model="reportModel['current-workplace']"
          label="Current Workplace"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IReferences from '../types/IReferences'
import CaseFileReportBaseDataCard from './CaseFileReportDataBaseCard.vue'

@Component({
  name: 'CaseFileReportReferencesCard'
})
export default class CaseFileReportReferencesCard extends CaseFileReportBaseDataCard {
}
</script>
