import 'reflect-metadata'
import store from '@/store'
import TYPES from '@/InjectableTypes/types'
import CameraMonitorService from '@/components/camera-monitor/services/CameraMonitorService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import CaseFileService from '@/components/case-file/services/CaseFileService'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import NetworkMonitorService from '@/components/network-monitor/services/NetworkMonitorService'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '../types/IAddon'
import IAddonStore from '../types/IAddonStore'
import { IAddonProperty } from '../types/IAddonDataTypes'
import { inject } from 'inversify-props'
import { clone, find, forEach } from 'lodash'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

const localStorageAddonKey: string = 'localAddons'

@Module({ dynamic: true, store, name: 'AddonStore' })
export default class AddonStore extends VuexModule implements IAddonStore {
  // @inject(TYPES.ICameraMonitorService)
  private cameraMonitorService: ICameraMonitorService = new CameraMonitorService()

  // @inject(TYPES.ICaseFileService)
  public caseFileService: ICaseFileService = new CaseFileService()

  // @inject(TYPES.INetworkMonitorService)
  private networkMonitorService: INetworkMonitorService = new NetworkMonitorService()

  // list of all implemented components
  /// THE NAME IS REDUNDANT! Remove
  public registeredAddonComponents : IAddon[] = [
    {
      model: this.cameraMonitorService.defaultModel(),
      enabled: false
    },
    {
      model: this.caseFileService.defaultModel(),
      enabled: false
    },
    {
      model: this.networkMonitorService.defaultModel(),
      enabled: false
    }
  ]

  public enabledAddonComponents : IAddon[] = []

  get getRegisteredAddonComponentsTitles () : string[] {
    return this.getRegisteredAddonComponents.map((addon) => addon.model.title)
  }

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }

  get getEnabledAddonComponents () : IAddon[] {
    return this.getRegisteredAddonComponents.filter((addon: IAddon) => addon.enabled === true)
  }

  get getEnabledAddonComponentsMenuItem () : IMenuItem[] {
    return this.getEnabledAddonComponents.map((addon) => addon.model)
  }

  get getEnabledAddonComponentsTitles () : string[] {
    return this.getEnabledAddonComponents.map((addon) => addon.model.title)
  }

  @Action
  public storeTheseAddons () {
    localStorage.setItem(localStorageAddonKey, JSON.stringify(this.getRegisteredAddonComponents))
  }

  @Action({ commit: 'loadLocalStorageAddons' })
  public retrieveAddonsFromLocalStorage () {
    if (localStorage.length && localStorage.getItem(localStorageAddonKey) !== null) {
      const localStorageAddons: IAddon[] = JSON.parse(localStorage.getItem(localStorageAddonKey)!)
      return localStorageAddons
    }
  }

  @Action({ commit: 'enableAddon' })
  public enableAddonInStore (addonToEnable: string) {
    return addonToEnable
  }

  @Action({ commit: 'disableAddon' })
  public disableAddonInStore (addonToDisable: string) {
    return addonToDisable
  }

  @Mutation
  public loadLocalStorageAddons (localStorageAddonsComponents: IAddon[]) {
    if (localStorageAddonsComponents !== this.getEnabledAddonComponents) {
      this.registeredAddonComponents = localStorageAddonsComponents
    }
  }

  @Mutation
  public enableAddon (requestedAddon: IAddon) : void {
    // only addons that are registered will be enabled
    requestedAddon.enabled = true
  }

  @Mutation
  public disableAddon (requestedAddon: IAddon) : void {
    const addonToDisable: IAddon | undefined = find(this.registeredAddonComponents, (registeredAddon: IAddon) => {
      return requestedAddon.model.title === registeredAddon.model.title
    })

    if (addonToDisable) {
      addonToDisable.enabled = false
    }
  }
}
