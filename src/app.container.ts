import { container } from 'inversify-props'
import IHomeDashboardService from '@/services/interfaces/IHomeDashboardService'
import IAddonsService from './services/interfaces/IAddonsService'
import ICaseFileService from './services/interfaces/ICaseFileService'
import INetworkMonitorService from './services/interfaces/INetworkMonitorService'
import AddonsService from '@/services/implementations/AddonsService'
import CaseFileService from './services/implementations/CaseFileService'
import HomeDashboardService from './services/implementations/HomeDashboardService'
import NetworkMonitorService from './services/implementations/NetworkMonitorService'
import TYPES from '@/InjectableTypes/types'

export default function registerContainerServices () {
  // container.bind<IAddonsService>('IAddonsService').to(AddonsService)
  // container.bind<ICaseFileService>('ICaseFileService').to(CaseFileService)
  // container.bind<IHomeDashboardService>('IHomeDashboardService').to(HomeDashboardService)
  container.bind<INetworkMonitorService>(TYPES.INetworkMonitorService).to(NetworkMonitorService)
}
