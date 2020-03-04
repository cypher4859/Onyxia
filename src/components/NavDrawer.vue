<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      left
      class="radial-gradient-background-nav"
      mini-variant
      mini-variant-width="80"
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
          :to="item.path"
          link
        >
          <v-tooltip
            right
            color="black"
            close-delay="0"
          >
            <template v-slot:activator="{ on }">
              <v-list-item-icon
                v-on="on"
              >
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content />
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
          <!-- <v-list-item-content class="primary-nav-text">
            <v-list-item-title class="subtitle-1">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <hello-world />
    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { inject } from 'inversify-props'
import HelloWorld from '@/components/HelloWorld.vue'
import IMenuItem from '@/types/IMenuItem'
import IHomeDashboardService from '@/services/interfaces/IHomeDashboardService'
import IAddonsService from '@/services/interfaces/IAddonsService'
import ICaseFileService from './case-file/services/ICaseFileService'
import INetworkMonitorService from '@/services/interfaces/INetworkMonitorService'
import ICameraMonitorService from '@/services/interfaces/ICameraMonitorService'
import TYPES from '@/InjectableTypes/types'

@Component({
  name: 'NavDrawer',
  components: {
    'hello-world': HelloWorld
  }
})
export default class NavDrawer extends Vue {
  private drawer: boolean = true

  @inject(TYPES.IAddonsService)
  public addonService!: IAddonsService

  @inject(TYPES.INetworkMonitorService)
  private networkMonitorService!: INetworkMonitorService

  @inject(TYPES.ICaseFileService)
  private caseFileService!: ICaseFileService

  @inject(TYPES.IHomeDashboardService)
  private homeDashboardService!: IHomeDashboardService

  @inject(TYPES.ICameraMonitorService)
  private cameraMonitorService!: ICameraMonitorService

  private navMenuItems: IMenuItem[] = [
    this.homeDashboardService.defaultModel(),
    this.addonService.defaultModel(),
    this.networkMonitorService.defaultModel(),
    this.caseFileService.defaultModel(),
    this.cameraMonitorService.defaultModel()
  ]

  get menuItems () {
    return this.navMenuItems
  }
}
</script>
