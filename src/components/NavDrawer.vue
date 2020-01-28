<template>
  <v-container>
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        :color="black"
        expand-on-hover
        left
        absolute
        dark
      >
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="(item, key) in menuItems"
            :key="key"
            link
          >
            <v-list-item-content>
              <v-list-item-icon>{{ item.icon }}</v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'NavDrawer'
})

export default class NavDrawer extends Vue {
  private drawer: boolean = true
  private menuItems: object[] = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'Case File', icon: 'mdi-ballot' }
  ]
}
</script>
