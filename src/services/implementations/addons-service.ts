import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemMixin from '@/mixins/menu-item-mixin'
import IMenuItem from '@/types/IMenuItem'

@Component
export default class extends MenuItemMixin {
  defaultModel () : IMenuItem {
    this.setMenuItemProperties('Add Ons', 'mdi-view-grid-plus')
    return this.getModel()
  }
}
