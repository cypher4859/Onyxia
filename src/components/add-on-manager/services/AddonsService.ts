import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import { injectable, inject } from 'inversify-props'
import TYPES from '@/InjectableTypes/types'

@injectable()
export default class AddonsService extends MenuItemService implements IService {
  @inject(TYPES.INetworkMonitorService)
  private networkMonitorService!: INetworkMonitorService

  @inject(TYPES.ICaseFileService)
  private caseFileService!: ICaseFileService

  @inject(TYPES.ICameraMonitorService)
  private cameraMonitorService!: ICameraMonitorService

  private enabledAddons : IMenuItem[] = [
    this.networkMonitorService.defaultModel(),
    this.caseFileService.defaultModel(),
    this.cameraMonitorService.defaultModel()
  ]

  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Add Ons',
      icon: 'mdi-view-grid-plus',
      path: '/add-ons'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  public getEnabledAddons () : IMenuItem[] {
    return this.enabledAddons
  }

  public enableAddon (addOnModel: IMenuItem) : void {
    // This will need to stick the addon into the store
    this.enabledAddons.push(addOnModel)
  }
}
