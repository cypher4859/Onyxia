import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IHomeDashboardService from './IHomeDashboardService'
import { injectable } from 'inversify-props'

@injectable()
export default class HomeDashboardService extends MenuItemService implements IHomeDashboardService {
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
