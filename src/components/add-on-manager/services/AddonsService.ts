import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import TYPES from '@/InjectableTypes/types'
import IAddonsService from './IAddonsService'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'
import IAddon from '@/components/add-on-manager/types/IAddonStore'
import { injectable, inject } from 'inversify-props'
import { getModule } from 'vuex-module-decorators'

const addonStore = getModule(AddonStore)

@injectable()
export default class AddonsService extends MenuItemService implements IAddonsService {
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

  public getRegisteredAddons () {
    return addonStore.getRegisteredAddonComponents
  }
}
