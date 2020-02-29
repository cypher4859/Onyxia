<template>
  <div>
    <case-file-card :root-path="rootPath" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileCard from '@/components/case-file/CaseFileCard.vue'

@Component({
  name: 'CaseFileView',
  components: {
    'case-file-card': CaseFileCard
  }
})
export default class CaseFileView extends Vue {
  private rootPath: string = '/case-file'
}
</script>
