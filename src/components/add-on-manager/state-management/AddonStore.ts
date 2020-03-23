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
      name: 'Camera Monitor',
      model: this.cameraMonitorService.defaultModel(),
      enabled: false
    },
    {
      name: 'Case File',
      model: this.caseFileService.defaultModel(),
      enabled: false
    },
    {
      name: 'Network Monitor',
      model: this.networkMonitorService.defaultModel(),
      enabled: false
    }
  ]

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }

  @Mutation
  public changeEnabledStateOfRegisteredAddonComponents (componentsToBeEnabled: string[]) : void {
    const registeredAddonComponents = this.registeredAddonComponents
    componentsToBeEnabled.forEach((componentToEnable: string) => {
      const componentsThatShouldBeEnabled = registeredAddonComponents.filter((addon: IAddon) => addon.name === componentToEnable)
      if (componentsThatShouldBeEnabled.length > 1) {
        console.error('ERROR! The store contains +1 addons by the same name; we are trying to enable more than one addon...')
      } else {
        componentsThatShouldBeEnabled[0].enabled = true
      }
    })

    registeredAddonComponents.forEach((addonComponent: IAddon) => {
      if (componentsToBeEnabled.indexOf(addonComponent.name) === -1) {
        addonComponent.enabled = false
      }
    })
  }
}
