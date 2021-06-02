<template>
  <v-container v-if="model">
    <v-row dense>
      <v-col
        cols="12"
        md="1"
      >
        <back-btn />
      </v-col>
      <v-col>
        <edit-btn @toggleIsEditable="toggleIsEditableFlag()" />
      </v-col>
    </v-row>
    <v-card
      class="d-flex justify-center align-center"
      elevation="19"
    >
      <v-container>
        <div>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.fullName"
                label="Full Name"
                outlined
                shaped
                color="success"
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.socialSecurityNumber"
                label="Social Security Number"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules(20)"
                :readonly="!isEditable"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.month"
                label="Month"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules(2)"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.day"
                label="Day"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules(2)"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.year"
                label="Year"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules(4)"
                :readonly="!isEditable"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.first"
                label="First Name"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.middle"
                label="Middle Name"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.last"
                label="Last Name"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.additional"
                label="Additional Names"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.streetAddress"
                label="Street Address"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.city"
                label="City"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.zip"
                label="Zip"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.state"
                label="State"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.country"
                label="Country"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              <v-text-field
                v-model="model.phones[0]"
                label="Phone Number"
                color="success"
                outlined
                shaped
                :rules="maxLengthRules()"
                :readonly="!isEditable"
              />
            </v-col>
            <!-- <v-col>
              <v-text-field
                v-model="model['current-workplace']"
                label="Current Workplace"
                color="success"
                outlined
                shaped
                :readonly="!isEditable"
              />
            </v-col> -->
            <!-- <v-col>
              <v-text-field
                v-model="model['previous-workplaces']"
                label="Previous Workplaces"
                color="success"
                outlined
                shaped
                :readonly="!isEditable"
              />
            </v-col> -->
            <!-- <v-col>
              <v-text-field
                v-model="model['family']"
                label="Family Members"
                color="success"
                outlined
                shaped
                :readonly="!isEditable"
              />
            </v-col> -->
          </v-row>
        </div>
      </v-container>
    </v-card>
    <!-- <v-row dense>
      <v-col
        cols="12"
        md="1"
      >
        <save-btn />
      </v-col>
    </v-row> -->
    <snackbar-alert
      :snack-bar-message="snackBarMessage()"
      :show-snackbar="showIsEditableSnackbar"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RouterBackButton from '@/components/utility/BackButton.vue'
import EditButton from '@/components/utility/EditButton.vue'
import SnackbarAlert from '@/components/utility/SystemSnackbarAlert.vue'
import CaseFileReportCardIdentity from './CaseFileReportCardIdentity.vue'
import CaseFileReportCardReferencesCard from './CaseFileReportCardReferences.vue'
import CaseFileReportCardLocation from './CaseFileReportCardLocation.vue'
import IPersonOfInterest from '../types/IPersonOfInterest'
import { Mixins, Prop } from 'vue-property-decorator'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import CaseFileValidators from '../CaseFileValidatorsMixin'

@Component({
  name: 'CaseFileReportCard',
  components: {
    'back-btn': RouterBackButton,
    'edit-btn': EditButton,
    'snackbar-alert': SnackbarAlert,
    'report-identity': CaseFileReportCardIdentity,
    'report-references': CaseFileReportCardReferencesCard,
    'report-location': CaseFileReportCardLocation
  }
})
export default class CaseFileReportCard extends Mixins(CaseFileValidators) {
  private isEditable : boolean = false
  private showIsEditableSnackbar : boolean = false

  @Prop(Object) model!: ICaseFileInfoModel

  public toggleIsEditableFlag () : void {
    this.isEditable = !this.isEditable
    this.showIsEditableSnackbar = true
  }

  private snackBarMessage () : string {
    return !this.isEditable ? 'Edit Mode:   OFF' : 'Edit Mode:   ON'
  }

  mounted () {
    console.log('Report: ', this.model)
  }
}
</script>
