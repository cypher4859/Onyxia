import 'reflect-metadata'
import store from '@/store'
import TYPES from '@/InjectableTypes/types'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import IAddon from '@/components/add-on-manager/types/IAddon'
import IAddonStore from '@/components/add-on-manager/types/IAddonStore'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import { inject } from 'inversify-props'
import { Module, VuexModule } from 'vuex-module-decorators'
import CameraMonitorService from '@/components/camera-monitor/services/CameraMonitorService'
import CaseFileService from '@/components/case-file/services/CaseFileService'
import NetworkMonitorService from '@/components/network-monitor/services/NetworkMonitorService'

@Module({ dynamic: true, store, name: 'AddonStore' })
export default class AddonStore extends VuexModule implements IAddonStore {
  // @inject(TYPES.ICameraMonitorService)
  private cameraMonitorService: ICameraMonitorService = new CameraMonitorService()

  // @inject(TYPES.ICaseFileService)
  private caseFileService: ICaseFileService = new CaseFileService()

  // @inject(TYPES.INetworkMonitorService)
  private networkMonitorService: INetworkMonitorService = new NetworkMonitorService()

  // list of all implemented components
  public registeredAddonComponents : IAddon[] = [
    {
      name: 'Camera Monitor',
      model: this.cameraMonitorService.defaultModel()
    },
    {
      name: 'Case File',
      model: this.caseFileService.defaultModel()
    },
    {
      name: 'Network Monitor',
      model: this.networkMonitorService.defaultModel()
    }
  ]

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }
}
