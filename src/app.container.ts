import 'reflect-metadata'
import { container } from 'inversify-props'
import IHomeDashboardService from '@/services/interfaces/IHomeDashboardService'
import IAddonsService from '@/services/interfaces/IAddonsService'
import ICaseFileService from '@/components/case-file/services/ICaseFileService'
import INetworkMonitorService from '@/services/interfaces/INetworkMonitorService'
import ICameraMonitorService from '@/services/interfaces/ICameraMonitorService'
import AddonsService from '@/services/implementations/AddonsService'
import CaseFileService from '@/components/case-file/services/CaseFileService'
import HomeDashboardService from '@/services/implementations/HomeDashboardService'
import NetworkMonitorService from '@/services/implementations/NetworkMonitorService'
import TYPES from '@/InjectableTypes/types'
import IMenuItemService from '@/services/interfaces/IMenuItemService'
import MenuItemService from '@/services/implementations/MenuItemService'
import CameraMonitorService from '@/services/implementations/CameraMonitorService'

export default function registerContainerServices () {
  container.options.skipBaseClassChecks = true
  container.bind<IMenuItemService>('IMenuItemService').to(MenuItemService)
  container.bind<IAddonsService>(TYPES.IAddonsService).to(AddonsService)
  container.bind<ICaseFileService>(TYPES.ICaseFileService).to(CaseFileService)
  container.bind<IHomeDashboardService>(TYPES.IHomeDashboardService).to(HomeDashboardService)
  container.bind<INetworkMonitorService>(TYPES.INetworkMonitorService).to(NetworkMonitorService)
  container.bind<ICameraMonitorService>(TYPES.ICameraMonitorService).to(CameraMonitorService)
}
