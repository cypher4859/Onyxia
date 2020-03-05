import 'reflect-metadata'
import { container } from 'inversify-props'
import IHomeDashboardService from '@/components/home-dashboard/services/IHomeDashboardService'
import IAddonsService from '@/components/add-on-manager/services/IAddonsService'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import INetworkMonitorService from '@/components/network-monitor/services/INetworkMonitorService'
import ICameraMonitorService from '@/components/camera-monitor/services/ICameraMonitorService'
import AddonsService from '@/components/add-on-manager/services/AddonsService'
import CaseFileService from '@/components/case-file/services/CaseFileService'
import HomeDashboardService from '@/components/home-dashboard/services/HomeDashboardService'
import NetworkMonitorService from '@/components/network-monitor/services/NetworkMonitorService'
import TYPES from '@/InjectableTypes/types'
import IMenuItemService from '@/services/interfaces/IMenuItemService'
import MenuItemService from '@/services/implementations/MenuItemService'
import CameraMonitorService from '@/components/camera-monitor/services/CameraMonitorService'

export default function registerContainerServices () {
  container.options.skipBaseClassChecks = true
  container.bind<IMenuItemService>('IMenuItemService').to(MenuItemService)
  container.bind<IAddonsService>(TYPES.IAddonsService).to(AddonsService)
  container.bind<ICaseFileService>(TYPES.ICaseFileService).to(CaseFileService)
  container.bind<IHomeDashboardService>(TYPES.IHomeDashboardService).to(HomeDashboardService)
  container.bind<INetworkMonitorService>(TYPES.INetworkMonitorService).to(NetworkMonitorService)
  container.bind<ICameraMonitorService>(TYPES.ICameraMonitorService).to(CameraMonitorService)
}
