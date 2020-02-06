import IMenuItem from '@/types/IMenuItem'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private navMenuItems: IMenuItem[] = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'Case File', icon: 'mdi-ballot' }
  ]

  get menuItems () {
    console.log(this.navMenuItems)
    return this.navMenuItems
  }
}
