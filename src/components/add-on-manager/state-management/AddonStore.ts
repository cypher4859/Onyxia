import 'reflect-metadata'
import store from '@/store'
import TYPES from '@/InjectableTypes/types'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import IAddon from '@/components/add-on-manager/types/IAddon'
import IAddonStore from '@/components/add-on-manager/types/IAddonStore'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import { inject } from 'inversify-props'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'
import CameraMonitorService from '@/components/camera-monitor/services/CameraMonitorService'
import CaseFileService from '@/components/case-file/services/CaseFileService'
import NetworkMonitorService from '@/components/network-monitor/services/NetworkMonitorService'
import { cloneDeep, remove, findIndex } from 'lodash'

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

  // public getAddonComponent (requestedAddonTitle: string) : IAddon | undefined {
  //   this.getRegisteredAddonComponents.forEach((addon: IAddon) => {
  //     if (addon.model.title === requestedAddonTitle) {
  //       return addon
  //     }
  //   })
  //   return undefined
  // }

  get getRegisteredAddonComponentsTitles () : string[] {
    return this.getRegisteredAddonComponents.map((addon) => addon.model.title)
  }

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }

  get getEnabledAddonComponents () : IAddon[] {
    return this.enabledAddonComponents
  }

  get getEnabledAddonComponentsTitles () : string[] {
    return this.getEnabledAddonComponents.map((addon) => addon.model.title)
  }

  @Action
  public storeTheseAddons () {
    localStorage.setItem(localStorageAddonKey, JSON.stringify(this.enabledAddonComponents))
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
  public loadLocalStorageAddons (localStorageAddons: IAddon[]) {
    if (localStorageAddons !== this.enabledAddonComponents) {
      this.enabledAddonComponents = cloneDeep(localStorageAddons)
    }
  }

  @Mutation
  public enableAddon (requestedAddon: IAddon) : void {
    requestedAddon.enabled = true
    this.enabledAddonComponents.push(requestedAddon)
  }

  @Mutation
  public disableAddon (requestedAddon: IAddon) : void {
    const addonIndexToDisable: number = findIndex(this.registeredAddonComponents, (registeredAddon: IAddon) => {
      return requestedAddon.model.title === registeredAddon.model.title
    })

    this.registeredAddonComponents[addonIndexToDisable].enabled = false

    remove(this.enabledAddonComponents, (enabledAddon: IAddon) => {
      // Are there instances in which the Addons will be different in any way??
      // Such as, they're the same in all ways except difference in enabled property
      return requestedAddon.model.title === enabledAddon.model.title
    })
  }
}
