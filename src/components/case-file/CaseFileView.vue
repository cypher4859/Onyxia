<template>
  <div>
    <case-file-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileCard from './render/CaseFileCard.vue'

@Component({
  name: 'CaseFileView',
  components: {
    'case-file-card': CaseFileCard
  }
})
export default class CaseFileView extends Vue {
}
</script>
