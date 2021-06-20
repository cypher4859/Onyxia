<template>
  <div>
    <v-btn @click="backClick()">
      <div class="primary-content-button-text">
        Back
      </div>
    </v-btn>
    <slot name="warning" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'RouterBackButton'
})
export default class RouterBackButton extends Vue {
  private backClick () : void {
    this.$emit('go-back')
  }
}
</script>
