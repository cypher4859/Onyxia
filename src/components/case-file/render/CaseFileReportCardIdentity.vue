<template>
  <v-container>
    <div>
      <v-row>
        <v-col>
          <v-text-field
            v-model="reportModel['full-name']"
            label="Full Name"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
          <!-- {{ printIsEditable }} -->
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['social-security-number']"
            label="Social Security Number"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="reportModel['month']"
            label="Month"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['day']"
            label="Day"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['year']"
            label="Year"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="reportModel['first']"
            label="First Name"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['middle']"
            label="Middle Name"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['last']"
            label="Last Name"
            color="success"
            outlined
            shaped
            success
            :readonly="!isEditableFlag"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="reportModel['additional']"
            label="Additional Names"
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
import Vue from 'vue'
import Component from 'vue-class-component'
import EditButton from '@/components/utility/EditButton.vue'
import CaseFileReportCardBaseData from './CaseFileReportCardBaseData.vue'

@Component({
  name: 'CaseFileReportCardIdentity',
  components: {
    'edit-btn': EditButton
  }
})
export default class CaseFileReportCardIdentity extends CaseFileReportCardBaseData {
}
</script>
