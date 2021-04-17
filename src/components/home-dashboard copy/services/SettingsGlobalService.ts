import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ISettingsGlobalService from './ISettingsGlobalService'
import { inject, injectable } from 'inversify-props'
import IAddonsService from '@/components/add-on-manager/services/IAddonsService'
import TYPES from '@/InjectableTypes/types'
import IAddon from '@/components/add-on-manager/types/IAddon'

@injectable()
export default class SettingsGlobalService extends MenuItemService implements ISettingsGlobalService {
  @inject(TYPES.IAddonsService)
  public addonManagerService!: IAddonsService

  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Settings',
      icon: 'mdi-cog-box',
      path: '/settings'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  initializeSettings () {
    // get local addons from store
    this.addonManagerService.retrieveAddonComponentsFromLocalStorage()
    const selectedEnabledAddons = this.addonManagerService.getEnabledAddonsFromStore()
    this.addonManagerService.syncEnableDisableAddons(selectedEnabledAddons.map((addon: IAddon) => addon.model.title))
  }
}
