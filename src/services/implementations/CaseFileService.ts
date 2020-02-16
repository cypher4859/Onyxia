import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'

@injectable()
export default class extends MenuItemService implements IService {
  defaultModel () : IMenuItem {
    this.setMenuItemProperties('Case File', 'mdi-ballot')
    return this.getModel()
  }
}
