<template>
  <div>
    <v-btn
      :disabled="disabled"
      @click="$emit('save')"
    >
      <div class="primary-content-button-text">
        Save
      </div>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'SaveButton'
})
export default class SaveButton extends Vue {
  @Prop(Boolean) disabled!: boolean
}
</script>
