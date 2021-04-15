import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ISettingsGlobalService from './ISettingsGlobalService'
import { injectable } from 'inversify-props'

@injectable()
export default class SettingsGlobalService extends MenuItemService implements ISettingsGlobalService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Settings',
      icon: 'mdi-cog-box',
      path: '/settings'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }
}
