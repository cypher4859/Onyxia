import IService from '@/services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonDataTypes'

export default interface IAddonsService extends IService {
    enableAddons(enabledComponents: string[]) : void
    getEnabledAddons() : IAddon[]
    getEnabledAddonsModels() : IMenuItem[]
    getRegisteredAddonsModels() : IMenuItem[]
    getRegisteredAddonsProperty(property: IAddonProperty) : any
    getRegisteredAddons() : IAddon[]

}
