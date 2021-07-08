import 'reflect-metadata'
import IMenuItem from '@/types/IMenuItem'
import { injectable, inject } from 'inversify-props'
import TYPES from '@/InjectableTypes/types'
import IVuexUserManagementService from '../interfaces/IVuexUserManagementService'
import IUserManagementService from '../interfaces/IUserManagementService'

interface userData {
  username: string
}

@injectable()
export default class UserManagementService implements IUserManagementService {
  @inject(TYPES.IVuexUserManagementService)
  private vuexUserManagementService!: IVuexUserManagementService

  public defaultModel () : IMenuItem {
    // THIS ISN'T IMPLEMENTED BECAUES WE WON'T USE IT
    return {} as IMenuItem
  }

  loadUser (user: any, authState: string) : void {
    console.log(user, authState)
    this.vuexUserManagementService.cacheAuthData(user, authState)
  }

  getUser () : string {
    return (this.vuexUserManagementService.getCachedUserData() as any as userData).username
  }
}
