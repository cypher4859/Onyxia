<template>
  <v-container
    v-if="model"
    fluid
  >
    <v-row no-gutters>
      <v-col>
        <div class="d-flex justify-start">
          <div class="ma-1">
            <back-btn />
          </div>
          <div class="ma-1">
            <edit-btn @toggleIsEditable="toggleIsEditableFlag()" />
          </div>
        </div>
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
                v-model="workingCopy.fullName"
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
                v-model="workingCopy.socialSecurityNumber"
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
                v-model="workingCopy.month"
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
                v-model="workingCopy.day"
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
                v-model="workingCopy.year"
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
                v-model="workingCopy.first"
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
                v-model="workingCopy.middle"
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
                v-model="workingCopy.last"
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
                v-model="workingCopy.additional"
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
                v-model="workingCopy.streetAddress"
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
                v-model="workingCopy.city"
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
                v-model="workingCopy.zip"
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
                v-model="workingCopy.state"
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
                v-model="workingCopy.country"
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
                v-model="workingCopy.phones[0]"
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
                v-model="workingCopy['current-workplace']"
                label="Current Workplace"
                color="success"
                outlined
                shaped
                :readonly="!isEditable"
              />
            </v-col> -->
            <!-- <v-col>
              <v-text-field
                v-model="workingCopy['previous-workplaces']"
                label="Previous Workplaces"
                color="success"
                outlined
                shaped
                :readonly="!isEditable"
              />
            </v-col> -->
            <!-- <v-col>
              <v-text-field
                v-model="workingCopy['family']"
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
    <v-row>
      <v-col>
        <div class="d-flex justify-end">
          <save-btn
            :disabled="changesHaveBeenMade"
            @save="showSaveConfirmation = true"
          />
        </div>
      </v-col>
    </v-row>
    <v-dialog
      v-model="showDeleteWorkingCopyDialog"
      transition="dialog-bottom-transition"
      max-width="600"
      max-height="400"
    >
      <v-card>
        <v-container>
          <v-card-title>
            Unsaved Progress
          </v-card-title>
          <div class="d-flex align-content-center justify-center ma0-4">
            {{ deleteWorkingCopyWarningMessage }}
          </div>
          <div class="d-flex align-content-center justify-center ma-4">
            <v-btn
              class="d-flex ma-2"
              @click="deleteWorkingCopy()"
            >
              <div class="primary-content-button-text">
                Continue
              </div>
            </v-btn>
            <v-btn
              class="d-flex ma-2"
              @click="showDeleteWorkingCopyDialog = false"
            >
              <div class="primary-content-button-text">
                Cancel
              </div>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="showSaveConfirmation"
      transition="dialog-bottom-transition"
      max-width="600"
      max-height="400"
    >
      <v-card>
        <v-container>
          <v-card-title>
            Save
          </v-card-title>
          <div class="d-flex align-content-center justify-center ma0-4">
            {{ showSaveConfirmationMessage }}
          </div>
          <div class="d-flex align-content-center justify-center ma-4">
            <v-btn
              class="d-flex ma-2"
              @click="saveWorkingCopy()"
            >
              <div class="primary-content-button-text">
                Continue
              </div>
            </v-btn>
            <v-btn
              class="d-flex ma-2"
              @click="showSaveConfirmation = false"
            >
              <div class="primary-content-button-text">
                Cancel
              </div>
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
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
import { Mixins, Prop, Watch } from 'vue-property-decorator'
import { inject } from 'inversify-props'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import CaseFileValidators from '../CaseFileValidatorsMixin'
import SaveButton from '@/components/utility/SaveButton.vue'
import ICaseFileService from '../services/ICaseFileService'
import TYPES from '@/InjectableTypes/types'
import { cloneDeep, isEqual } from 'lodash'

@Component({
  name: 'CaseFileReportCard',
  components: {
    'back-btn': RouterBackButton,
    'edit-btn': EditButton,
    'save-btn': SaveButton,
    'snackbar-alert': SnackbarAlert,
    'report-identity': CaseFileReportCardIdentity,
    'report-references': CaseFileReportCardReferencesCard,
    'report-location': CaseFileReportCardLocation
  }
})
export default class CaseFileReportCard extends Mixins(CaseFileValidators) {
  @inject(TYPES.ICaseFileService)
  public caseFileService!: ICaseFileService

  private isEditable : boolean = false
  private showDeleteWorkingCopyDialog : boolean = false
  private showSaveConfirmation: boolean = false
  private workingCopy: ICaseFileInfoModel = {} as ICaseFileInfoModel

  @Prop(Object) model!: ICaseFileInfoModel

  created () : void {
    this.workingCopy = cloneDeep(this.model)
  }

  public toggleIsEditableFlag () : void {
    this.isEditable = !this.isEditable
    if (!this.isEditable && !isEqual(this.model, this.workingCopy)) {
      // pop a warning notification that progress is unsaved. Which will delete the working copy
      this.showDeleteWorkingCopyDialog = true
    } else {
      this.$toasted.success(this.snackBarMessage, { duration: 2000 })
    }
  }

  private deleteWorkingCopy () : void {
    this.$toasted.success(this.snackBarMessage, { duration: 2000 })
    this.workingCopy = cloneDeep(this.model)
    this.showDeleteWorkingCopyDialog = false
  }

  private saveWorkingCopy () : void {
    this.caseFileService.save(this.workingCopy, this.model)
    this.showSaveConfirmation = false
  }

  get deleteWorkingCopyWarningMessage () : string {
    return 'Are you sure you want to exit Edit Mode? This will remove any unsaved progress'
  }

  get showSaveConfirmationMessage () : string {
    return `Are you sure you want to save the current case file for ${this.workingCopy.fullName}?`
  }

  get snackBarMessage () : string {
    return !this.isEditable ? 'Edit Mode:   OFF' : 'Edit Mode:   ON'
  }

  get changesHaveBeenMade () {
    return isEqual(this.model, this.workingCopy)
  }
}
</script>
