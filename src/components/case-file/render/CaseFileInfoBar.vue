<template>
  <div class="mx-6">
    <v-row>
      <slot
        name="caseFileSelection"
      />
      <v-col>
        <v-toolbar prominent>
          <v-row>
            <v-col v-if="$vuetify.breakpoint.mdAndUp">
              <v-img
                src="@/assets/empty-person.png"
                max-height="160"
                max-width="93"
              />
            </v-col>
            <v-col>
              <v-toolbar-title>
                {{ model.fullName }}
              </v-toolbar-title>
            </v-col>
            <v-spacer />
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-col>
                <div>{{ model.age }} yrs</div>
                <div>{{ model.height }}</div>
                <div>{{ model.weight }}</div>
              </v-col>
              <v-col>
                <div>{{ model.streetAddress }} {{ model.city }} {{ model.state }}</div>
              </v-col>
            </div>
            <!-- <v-btn
              icon
              class="d-flex mx-auto"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->
            <v-btn
              class="d-flex mx-auto"
              icon
              color="success"
              :to="{ name: 'Case File Report', params: { model: model }}"
            >
              <v-icon>mdi-export</v-icon>
            </v-btn>
          </v-row>
        </v-toolbar>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import IPersonOfInterest from '../types/IPersonOfInterest'
import caseFileExampleData from '../testCaseFileData'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

@Component({
  name: 'CaseFileInfoBar'
})
export default class CaseFileInfoBar extends Vue {
  @Prop(Object) model!: ICaseFileInfoModel
}
</script>
