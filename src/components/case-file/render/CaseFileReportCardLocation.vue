<template>
  <div>
    <v-row>
      <v-col
        cols="8"
        md="2"
        offset="1"
      >
        <v-text-field
          v-model="reportModel['street-address']"
          label="Street Address"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
      <v-col
        cols="8"
        md="2"
      >
        <v-text-field
          v-model="reportModel['city']"
          label="City"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
      <v-col
        cols="8"
        md="2"
      >
        <v-text-field
          v-model="reportModel['zip']"
          label="Zip"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
      <v-col
        cols="8"
        md="2"
      >
        <v-text-field
          v-model="reportModel['state']"
          label="State"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="8"
        md="4"
        offset="3"
      >
        <v-text-field
          v-model="reportModel['country']"
          label="Country"
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
import ILocation from '../types/ILocation'
import CaseFileReportCardBaseData from './CaseFileReportCardBaseData.vue'

@Component({
  name: 'CaseFileReportCardLocation'
})
export default class CaseFileReportCardLocation extends CaseFileReportCardBaseData {
}
</script>
