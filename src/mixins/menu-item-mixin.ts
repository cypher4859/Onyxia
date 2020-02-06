import { Vue, Component } from 'vue-property-decorator'
import IMenuItem from '@/types/IMenuItem'

@Component
export default class extends Vue {
  private model: IMenuItem = {
    title: '',
    icon: ''
  }

  protected setMenuItemProperties (title: string, icon: string) : void {
    this.model.title = title
    this.model.icon = icon
  }

  protected getModel () : IMenuItem {
    return this.model
  }
}
