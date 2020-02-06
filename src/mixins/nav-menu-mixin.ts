import IMenuItem from '@/types/IMenuItem'
import { Component, Vue, Inject } from 'vue-property-decorator'
import NetworkMonitorService from '@/services/implementations/network-monitor-service'
import CaseFileService from '@/services/implementations/case-file-service'
import AddonsService from '@/services/implementations/addons-service'
import HomeDashboardService from '@/services/implementations/home-dashboard-service'

@Component
export default class extends Vue {
  /* Is there a way to use mixins to dynamically add in the icons
    without knowing what icons, title, or otherwise?
    Thinking towards basically pulling the menu item object from
    the desired mixin and appending it to the navMenuItems.
    It could be menu item model that gets inserted into the aray of items
  */

  // @Inject()
  private networkMonitorService: NetworkMonitorService = new NetworkMonitorService()

  // @Inject()
  private caseFileService: CaseFileService = new CaseFileService()

  // @Inject()
  private addonService: AddonsService = new AddonsService()

  // @Inject()
  private homeDashboardService: HomeDashboardService = new HomeDashboardService()

  private navMenuItems: IMenuItem[] = [
    this.homeDashboardService.defaultModel(),
    this.addonService.defaultModel(),
    this.networkMonitorService.defaultModel(),
    this.caseFileService.defaultModel()
  ]

  get menuItems () {
    return this.navMenuItems
  }
}
