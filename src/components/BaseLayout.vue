<template>
  <div>
    <nav-drawer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavDrawer from '@/components/NavDrawer.vue'

@Component({
  name: 'base-layout',
  components: {
    'nav-drawer': NavDrawer
  }
})

export default class BaseLayout extends Vue {
  // Top bar?
  // left menu bar
  // Everything else
}
</script>
