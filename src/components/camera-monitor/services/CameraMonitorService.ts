import 'reflect-metadata'
import IMenuItem from '@/types/IMenuItem'
import MenuItemService from '@/services/implementations/MenuItemService'
import { Vue, Component } from 'vue-property-decorator'
import { injectable } from 'inversify-props'
import ICameraMonitorService from './ICameraMonitorService'

@injectable()
export default class CameraMonitorService extends MenuItemService implements ICameraMonitorService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Camera Monitor',
      icon: 'mdi-cctv',
      path: '/camera-monitor'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }
}
