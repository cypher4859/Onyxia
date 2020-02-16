import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'
import MenuItemService from '@/services/implementations/MenuItemService'

@injectable()
export default class extends MenuItemService implements IService {
  defaultModel () : IMenuItem {
    this.setMenuItemProperties('Network Monitor', 'mdi-lan')
    return this.getModel()
  }
}
