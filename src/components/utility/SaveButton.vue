<template>
  <div>
    <v-btn @click="$emit('save')">
      <div class="primary-content-button-text">
        Save
      </div>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'SaveButton'
})
export default class SaveButton extends Vue {

}
</script>
