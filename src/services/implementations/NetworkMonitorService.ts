import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'
import MenuItemService from '@/services/implementations/MenuItemService'

@injectable()
export default class NetworkMonitorService extends MenuItemService implements IService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Network Monitor',
      icon: 'mdi-lan',
      path: '/net-monitor'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }
}
