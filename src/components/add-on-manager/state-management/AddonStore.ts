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

  public addonIsNotCurrentlyEnabled (addon: IAddon) : boolean {
    return this.enabledAddonComponents.indexOf(addon) === -1
  }

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }

  get getEnabledAddonComponents () : IAddon[] {
    // return this.getRegisteredAddonComponents.filter((addon) => addon.enabled === true)
    return this.enabledAddonComponents
  }

  get getRegisteredAddonComponentsTitles () : string[] {
    return this.getRegisteredAddonComponents.map((addon) => addon.model.title)
  }

  @Mutation
  public enableTheseAddons (addonsToEnable: string[]) : void {
    if (addonsToEnable.length) {
      this.registeredAddonComponents.forEach((component) => {
        if (this.enabledAddonComponents.indexOf(component) === -1 && addonsToEnable.indexOf(component.model.title) > -1) {
          component.enabled = true
          this.enabledAddonComponents.push(component)
        }
      })
    }
  }

  @Mutation
  public disableTheseAddons (addonsToDisable: string[]) : void {
    if (addonsToDisable.length) {
      this.registeredAddonComponents.forEach((component) => {
        if (addonsToDisable.indexOf(component.model.title) > -1) {
          component.enabled = false
          const indexOfComponentToDisable = this.enabledAddonComponents.indexOf(component)
          if (indexOfComponentToDisable > -1) {
            this.enabledAddonComponents.splice(indexOfComponentToDisable, 1)
          }
        }
      })
    }
  }
}
