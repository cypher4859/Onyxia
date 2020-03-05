import IService from '../../../services/interfaces/IService'
import IMenuItem from '@/types/IMenuItem'

export default interface IAddonsService extends IService {
    getEnabledAddons(): IMenuItem[]
    enableAddon(addOnModel: IMenuItem): void
}
