<template>
  <div>
    <v-btn
      :elevation="changeElevation"
      @click="callToggle()"
    >
      <div class="primary-content-button-text">
        Edit
      </div>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'EditButton'
})
export default class EditButton extends Vue {
  private clickedElevationRaised: boolean = false
  private callToggle () : void {
    this.clickedElevationRaised = !this.clickedElevationRaised
    this.$emit('toggleIsEditable')
  }

  get changeElevation () : number {
    return this.clickedElevationRaised ? 16 : 1
  }
}
</script>
