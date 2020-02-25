<template>
  <div>
    <case-file />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CaseFileCard from '@/components/case-file/CaseFileCard.vue'

@Component({
  name: 'CaseFileView',
  components: {
    'case-file': CaseFileCard
  }
})
export default class CaseFileView extends Vue {

}
</script>
