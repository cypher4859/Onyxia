import IMenuItem from '@/types/IMenuItem'

export default interface IMenuItemService {
  setMenuItemProperties (properties: IMenuItem) : void
  getModel () : IMenuItem
}
