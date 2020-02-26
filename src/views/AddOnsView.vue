<template>
  <div>
    <add-ons />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AddOnsCard from '@/components/add-ons/AddOnsCard.vue'

@Component({
  name: 'AddonsView',
  components: {
    'add-ons': AddOnsCard
  }
})
export default class AddOnsView extends Vue {

}
</script>
