import IService from '@/services/interfaces/IService'

export default interface IUserManagementService extends IService {
  loadUser (user: any, authState: string): void
  getUser (): string
}
