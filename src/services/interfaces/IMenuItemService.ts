import IMenuItem from '@/types/IMenuItem'

export default interface IMenuItemService {
  setMenuItemProperties (title: string, icon: string) : void
  getModel () : IMenuItem
}
