<template>
  <div>
    <v-snackbar
      v-model="showSnackbar"
      top
      left
      :timeout="1800"
    >
      <span color="success">
        {{ snackBarMessage }}
      </span>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'SystemSnackbarAlert'
})
export default class SystemSnackbarAlert extends Vue {
  @Prop(String) readonly snackBarMessage!: string
  @Prop(Boolean) readonly showSnackbar!: boolean
}
</script>
