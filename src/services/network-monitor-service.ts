import { Vue, Component } from 'vue-property-decorator'
import MenuItemMixin from '@/mixins/menu-item-mixin'
import IMenuItem from '@/types/IMenuItem'

@Component
export default class extends MenuItemMixin {
  defaultModel () : IMenuItem {
    this.setMenuItemProperties('Network Monitor', 'mdi-lan')
    return this.getModel()
  }
}
