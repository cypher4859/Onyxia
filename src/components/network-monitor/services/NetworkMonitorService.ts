import 'reflect-metadata'
import IMenuItem from '@/types/IMenuItem'
import MenuItemService from '@/services/implementations/MenuItemService'
import INetworkMonitorService from './INetworkMonitorService'
import { injectable } from 'inversify-props'
import { Vue, Component } from 'vue-property-decorator'

@injectable()
export default class NetworkMonitorService extends MenuItemService implements INetworkMonitorService {
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
