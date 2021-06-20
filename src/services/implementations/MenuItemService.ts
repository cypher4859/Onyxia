import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import { injectable } from 'inversify-props'
import IMenuItemService from '@/services/interfaces/IMenuItemService'
import BaseService from './BaseService'

@Component
export default class MenuItemService extends BaseService implements IMenuItemService {
  private model: IMenuItem = {
    title: '',
    icon: '',
    path: ''
  }

  setMenuItemProperties (properties: IMenuItem) : void {
    this.model.title = properties.title
    this.model.icon = properties.icon
    this.model.path = properties.path
  }

  getModel () : IMenuItem {
    return this.model
  }
}
