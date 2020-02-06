import IMenuItem from '@/types/IMenuItem'
import Vue from 'vue'

export default class extends Vue {
  private navMenuItems: IMenuItem[] = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'Case File', icon: 'mdi-ballot' }
  ]

  get menuItems () {
    return this.navMenuItems
  }
}
