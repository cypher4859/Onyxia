import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IAddonsService from './IAddonsService'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'
import { injectable } from 'inversify-props'
import { getModule } from 'vuex-module-decorators'

type AddonProperty = 'name' | 'model'
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

  public getEnabledAddons () : IMenuItem[] {
    return this.getRegisteredAddonsProperty('model')
  }

  public getRegisteredAddonsProperty (property: AddonProperty) : any {
    const registeredAddons = this.getRegisteredAddons()
    const filteredRegisteredAddons = registeredAddons.map((addon) => {
      if (this.hasKey(addon, property)) {
        return addon[property]
      }
    })
    return filteredRegisteredAddons
  }

  public getRegisteredAddons () {
    return addonStore.getRegisteredAddonComponents
  }

  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  public hasKey<O> (obj: O, key: keyof any): key is keyof O {
    return key in obj
  }
}
