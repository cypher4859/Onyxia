<template>
  <v-container>
    <div>
      <v-row>
        <v-col>
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
        <v-col>
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
        <v-col>
          <v-text-field
            v-model="reportModel['previous-workplaces']"
            label="Previous Workplaces"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['family']"
            label="Family Members"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import CaseFileReportCardBaseData from './CaseFileReportCardBaseData.vue'

@Component({
  name: 'CaseFileReportCardReferences'
})
export default class CaseFileReportCardReferences extends CaseFileReportCardBaseData {
}
</script>
