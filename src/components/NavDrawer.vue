<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      app
      left
      dark
    >
      <v-list
        nav
      >
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/blackmesa_logo.png">
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item
          v-for="(item, key) in menuItems"
          :key="key"
          link
        >
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import bioExample from './BioExample.vue'

@Component({
  name: 'NavDrawer',
  components: {
    'hello-world': HelloWorld
  }
})

export default class NavDrawer extends Vue {
  private drawer: boolean = true
  private menuItems: object[] = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'Case File', icon: 'mdi-ballot' }
  ]
}
</script>
