<template>
  <div>
    <v-btn @click="$emit('toggleIsEditable')">
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

}
</script>
