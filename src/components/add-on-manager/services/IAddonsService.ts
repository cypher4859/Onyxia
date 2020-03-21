import IService from '@/services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '../types/IAddon'
import { IAddonProperty } from '@/components/add-on-manager/types/IAddonPropertyType'

export default interface IAddonsService extends IService {
    getRegisteredAddons() : IAddon[]
    getEnabledAddons() : IMenuItem[]
    getRegisteredAddonsProperty(property: IAddonProperty) : any
}
