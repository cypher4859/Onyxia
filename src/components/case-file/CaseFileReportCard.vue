<template>
  <v-card>
    <v-btn @click="goBack">
      <div class="primary-content-button-text">
        BACK
      </div>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'CaseFileCard'
})
export default class CaseFileCard extends Vue {
  private goBack () {
    this.$router.back()
  }
}
</script>
