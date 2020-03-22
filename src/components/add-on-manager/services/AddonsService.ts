import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IAddonsService from './IAddonsService'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { injectable } from 'inversify-props'
import { getModule } from 'vuex-module-decorators'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'

const addonStore = getModule(AddonStore)

@injectable()
export default class AddonsService extends MenuItemService implements IAddonsService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Add Ons',
      icon: 'mdi-view-grid-plus',
      path: '/add-ons'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  public setEnabledAddonComponents (enabledComponents: string[]) {
    addonStore.setOnOffRegisteredAddonComponents(enabledComponents)
  }

  public getEnabledAddonModels () : IMenuItem[] {
    return this.getEnabledAddonsProperty('model')
  }

  public getEnabledAddonNames () : IMenuItem[] {
    return this.getEnabledAddonsProperty('name')
  }

  public getEnabledAddonsProperty (property: IAddonProperty) : any {
    const enabledAddons = this.getEnabledAddons()
    return enabledAddons.map((addon) => {
      if (this.hasKey(addon, property)) {
        return addon[property]
      }
    })
  }

  public getEnabledAddons () : IAddon[] {
    return addonStore.getRegisteredAddonComponents.filter((addon) => addon.enabled === true)
  }

  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  public hasKey<O> (obj: O, key: keyof any): key is keyof O {
    return key in obj
  }
}
