import IService from '@/services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'

export default interface IAddonsService extends IService {
    syncEnableDisableAddons(componentsToEnable: string[]) : void
    saveAddonsToLocalStorage() : void
    retrieveAddonComponentsFromLocalStorage() : Promise<void>
    computeTheComponentsToDisable(componentsToEnable: string[], allRegisteredComponents: string[]) : string[]
    getRegisteredAddonsTitles : string[]
    getRegisteredAddonsModels() : IMenuItem[]
    getRegisteredAddonsProperty(property: IAddonProperty) : any
    getEnabledAddonsFromStore() : IAddon[]
    getEnabledAddonsModelsForRender() : IMenuItem[]
    getEnabledAddonsTitles() : string[]
    getRegisteredAddonsFromStore() : IAddon[]
}
