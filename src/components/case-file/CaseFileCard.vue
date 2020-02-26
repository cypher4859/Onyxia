<template>
  <v-card>
    <v-btn
      :to="caseFileReportPath"
    >
      <div class="primary-content-button-text">
        Read Case File
      </div>
    </v-btn>
    <!-- Create a service for loading a contrived single case file from db.json;
    Grab the data; do a router link and pass that data to the CaseFileReportCard as a prop -->
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'CaseFileCard'
})
export default class CaseFileCard extends Vue {
  private caseFileReportPath: string = '/case-file-report'
}
</script>
