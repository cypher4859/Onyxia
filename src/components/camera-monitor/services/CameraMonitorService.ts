import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'
import MenuItemService from '@/services/implementations/MenuItemService'

@injectable()
export default class CameraMonitorService extends MenuItemService implements IService {
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
