<template>
  <v-card>
    <back-btn />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RouterBackButton from '@/components/utility/RouterBackButton.vue'

@Component({
  name: 'CaseFileReportCard',
  components: {
    'back-btn': RouterBackButton
  }
})
export default class CaseFileReportCard extends Vue {

}
</script>
