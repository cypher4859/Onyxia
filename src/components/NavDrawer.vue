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
    <hello-world />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Inject } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import navMenuMixin from '@/mixins/nav-menu-item-mixin'
import IMenuItem from '../types/IMenuItem'

@Component({
  name: 'NavDrawer',
  components: {
    'hello-world': HelloWorld
  },
  mixins: [navMenuMixin]
})

export default class NavDrawer extends Vue {
  private drawer: boolean = true
}
</script>
