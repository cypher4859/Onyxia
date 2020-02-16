import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemMixin from '@/mixins/menu-item-mixin'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'

export default class extends MenuItemMixin implements IService {
  defaultModel () : IMenuItem {
    this.setMenuItemProperties('Home', 'mdi-view-dashboard')
    return this.getModel()
  }
}
