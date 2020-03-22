import 'reflect-metadata'

interface IRegistryTypes {
  [name: string]: symbol;
}

const TYPES : IRegistryTypes = {
  IMenuItemService: Symbol('IMenuItemService'),
  INetworkMonitorService: Symbol('INetworkMonitorService'),
  IAddonsService: Symbol('IAddonsService'),
  IHomeDashboardService: Symbol('IHomeDashboardService'),
  ICaseFileService: Symbol('ICaseFileService'),
  ICameraMonitorService: Symbol('ICameraMonitorService')
}

export default TYPES
