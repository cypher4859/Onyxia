import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'

@injectable()
export default class HomeDashboardService extends MenuItemService implements IService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Home',
      icon: 'mdi-view-dashboard',
      path: '/'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }
}
