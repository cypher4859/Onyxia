<template>
  <div>
    <v-row>
      <v-col
        cols="8"
        md="3"
        offset="1"
      >
        <v-text-field
          v-model="reportModel['full-name']"
          label="Full Name"
          color="success"
          outlined
          shaped
          success
          :readonly="!isEditableFlag"
        />
        {{ printIsEditable }}
      </v-col>
      <v-col
        cols="8"
        md="3"
        offset="2"
      >
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
      <v-col
        cols="6"
        md="2"
        offset="1"
      >
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
      <v-col
        cols="6"
        md="2"
        offset="1"
      >
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
      <v-col
        cols="6"
        md="2"
        offset="1"
      >
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
      <v-col
        cols="6"
        md="2"
        offset="1"
      >
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
      <v-col
        cols="6"
        md="2"
      >
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
      <v-col
        cols="6"
        md="2"
      >
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
      <v-col
        cols="6"
        md="2"
      >
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IIdentity from '@/types/IIdentity'
import CaseFileReportBaseDataCard from './CaseFileReportBaseDataCard.vue'
import { Prop } from 'vue-property-decorator'
import EditButton from '@/components/utility/EditButton.vue'

@Component({
  name: 'CaseFileReportIdentityCard',
  components: {
    'edit-btn': EditButton
  }
})
export default class CaseFileReportIdentityCard extends CaseFileReportBaseDataCard {
}
</script>
