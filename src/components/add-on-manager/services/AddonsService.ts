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

  public syncEnableDisableAddons (componentsToEnable: string[]) : void {
    const allRegisteredComponentsTitles = addonStore.getRegisteredAddonComponentsTitles
    const componentsToDisable = this.getTheComponentsToDisable(componentsToEnable, allRegisteredComponentsTitles)

    addonStore.enableTheseAddons(componentsToEnable)
    addonStore.disableTheseAddons(componentsToDisable)
  }

  public getTheComponentsToDisable (componentsToEnable: string[], allRegisteredComponents: string[]) : string[] {
    // get difference between the components that should be enabled and the registered
    return allRegisteredComponents.filter((component: string) => componentsToEnable.indexOf(component) === -1)
  }

  public getRegisteredAddonsTitles () : string[] {
    return this.getRegisteredAddonsModels().map((addonModel: IMenuItem) => addonModel.title)
  }

  public getRegisteredAddonsModels () : IMenuItem[] {
    return this.getRegisteredAddonsProperty('model')
  }

  public getRegisteredAddonsProperty (property: IAddonProperty) : any {
    const addons = this.getRegisteredAddons()
    return addons.map((addon) => {
      if (this.hasKey(addon, property)) {
        return addon[property]
      }
    })
  }

  public getEnabledAddons () : IAddon[] {
    return addonStore.getEnabledAddonComponents
  }

  public getEnabledAddonsModelsForRender () : IMenuItem[] {
    return this.getEnabledAddons().map((addon: IAddon) => addon.model)
  }

  public getEnabledAddonsTitles () : string[] {
    return this.getEnabledAddonsModelsForRender().map((addonModel: IMenuItem) => addonModel.title)
  }

  public getRegisteredAddons () : IAddon[] {
    return addonStore.getRegisteredAddonComponents
  }

  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  public hasKey<O> (obj: O, key: keyof any): key is keyof O {
    return key in obj
  }
}
