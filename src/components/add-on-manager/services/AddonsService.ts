import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IAddonsService from './IAddonsService'
import AddonStore from '@/components/add-on-manager/state-management/AddonStore'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { injectable } from 'inversify-props'
import { getModule } from 'vuex-module-decorators'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'
import { forEach, find } from 'lodash'

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

  private isAddonRegistered (requestedAddonTitle: string) : boolean {
    return addonStore.getRegisteredAddonComponentsTitles.includes(requestedAddonTitle)
  }

  private isAddonInListOfEnabledAddons (requestedAddonTitle: string) : boolean {
    return addonStore.getEnabledAddonComponentsTitles.includes(requestedAddonTitle)
  }

  public syncEnableDisableAddons (componentsToEnable: string[]) : void {
    const componentsToDisable = this.computeTheComponentsToDisable(componentsToEnable)

    if (componentsToEnable.length) {
      forEach(componentsToEnable, (addonTitle: string) => {
        if (this.isAddonRegistered(addonTitle) && !this.isAddonInListOfEnabledAddons(addonTitle)) {
          const addonComponent: IAddon | undefined = this.getAddonComponentFromTitle(addonTitle)
          if (addonComponent !== undefined) {
            addonStore.enableAddon(addonComponent)
          }
        }
      })
    }

    if (componentsToDisable.length) {
      forEach(componentsToDisable, (addonTitle: string) => {
        if (this.isAddonRegistered(addonTitle) && this.isAddonInListOfEnabledAddons(addonTitle)) {
          const addonComponent: IAddon | undefined = this.getAddonComponentFromTitle(addonTitle)
          if (addonComponent !== undefined) {
            addonStore.disableAddon(addonComponent)
          }
        }
      })
    }
  }

  public getAddonComponentFromTitle (requestedAddonTitle: string) : IAddon | undefined {
    const allRegisteredComponents: IAddon[] = addonStore.getRegisteredAddonComponents
    return find(allRegisteredComponents, (registeredComponent: IAddon) => {
      return registeredComponent.model.title === requestedAddonTitle
    })
  }

  public saveAddonsToLocalStorage () : void {
    addonStore.storeTheseAddons()
  }

  public async retrieveAddonComponentsFromLocalStorage () : Promise<void> {
    addonStore.retrieveAddonsFromLocalStorage()
  }

  public computeTheComponentsToDisable (listOfComponentsToEnable: string[]) : string[] {
    // get difference between the components that should be enabled and the registered
    const allRegisteredComponentsTitles = addonStore.getRegisteredAddonComponentsTitles
    return allRegisteredComponentsTitles.filter((componentTitle: string) => listOfComponentsToEnable.includes(componentTitle) === false)
  }

  public getRegisteredAddonsFromStore () : IAddon[] {
    return addonStore.getRegisteredAddonComponents
  }

  get getRegisteredAddonsTitles () : string[] {
    return this.getRegisteredAddonsModels().map((addonModel: IMenuItem) => addonModel.title)
  }

  public getRegisteredAddonsModels () : IMenuItem[] {
    return this.getRegisteredAddonsProperty('model')
  }

  public getRegisteredAddonsProperty (property: IAddonProperty) : any {
    const addons = this.getRegisteredAddonsFromStore()
    return addons.map((addon) => {
      if (this.hasKey(addon, property)) {
        return addon[property]
      }
    })
  }

  public getEnabledAddonsFromStore () : IAddon[] {
    return addonStore.getEnabledAddonComponents
  }

  public getEnabledAddonsModelsForRender () : IMenuItem[] {
    return addonStore.getEnabledAddonComponentsModels
  }

  public getEnabledAddonsTitles () : string[] {
    return this.getEnabledAddonsModelsForRender().map((addonModel: IMenuItem) => addonModel.title)
  }

  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  public hasKey<O> (obj: O, key: keyof any): key is keyof O {
    return key in obj
  }
}
