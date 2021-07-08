<template>
  <div>
    <v-dialog
      v-model="showDialog"
      persistent
      :max-width="defaultWidth"
    >
      <v-card>
        <v-row>
          <v-col
            class="d-flex justify-end mx-auto"
          >
            <v-btn
              class="mx-4 justify-center align-self"
              outlined
              color="success"
              @click="$emit('close')"
            >
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <slot />
      </v-card>
    </v-dialog>
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
  /**
   * @param {Boolean} showDialog REQUIRED: This property controls whether the dialog component is open or not
   * @param {Number} defaultWidth OPTIONAL: The default width of the standard dialog box which can be overridden
   */
  @Prop({ type: Number, default: 420 }) defaultWidth!: number
  @Prop(Boolean) showDialog!: boolean
}
</script>
