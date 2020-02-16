import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import { injectable } from 'inversify-props'
import IMenuItemService from '@/services/interfaces/IMenuItemService'

@Component
export default class MenuItemService extends Vue implements IMenuItemService {
  private model: IMenuItem = {
    title: '',
    icon: ''
  }

  setMenuItemProperties (title: string, icon: string) : void {
    this.model.title = title
    this.model.icon = icon
  }

  getModel () : IMenuItem {
    return this.model
  }
}
