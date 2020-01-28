<template>
  <v-app>
    <v-content>
      <base-layout />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import BaseLayout from './components/BaseLayout.vue'

@Component({
  name: 'app',
  components: {
    'hello-world': HelloWorld,
    'base-layout': BaseLayout
  }
})

export default class App extends Vue {
  //
}
</script>
