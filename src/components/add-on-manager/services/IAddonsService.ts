import IService from '@/services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'
import IAddon from '../types/IAddon'

export default interface IAddonsService extends IService {
    getEnabledAddons(): IMenuItem[],
    enableAddon(addOnModel: IMenuItem): void,
    getRegisteredAddons(): IAddon[]

}
