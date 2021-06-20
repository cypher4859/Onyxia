<template>
  <div>
    <!-- <v-snackbar
      v-model="showSnackbar"
      top
      right
      :timeout="1800"
      color="primary"
      text
    >
      <span color="success">
        {{ snackBarMessage }}
      </span>
    </v-snackbar> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Toasted from 'vue-toasted'

@Component({
  name: 'SystemSnackbarAlert'
})
export default class SystemSnackbarAlert extends Vue {
  @Prop(String) readonly snackBarMessage!: string
  @Prop({ type: Boolean, default: false }) readonly showSnackbar!: boolean
}
</script>
