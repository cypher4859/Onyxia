import IService from '@/services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'

export default interface IAddonsService extends IService {
    getEnabledAddonModels() : IMenuItem[]
    getEnabledAddonsProperty(property: IAddonProperty) : any
    getEnabledAddons() : IAddon[]
    getEnabledAddonNames() : IMenuItem[]
    setEnabledAddonComponents(enabledComponents: string[]) : void
}
