<template>
  <div>
    <v-btn @click="$router.back()">
      <div class="primary-content-button-text">
        Back
      </div>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'RouterBackButton'
})
export default class RouterBackButton extends Vue {

}
</script>
