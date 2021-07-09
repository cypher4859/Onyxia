import 'reflect-metadata'
import UserManagementStore from '@/store/state-management/UserManagementStore'
import store from '@/store'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import IVuexUserManagementService from '@/services/interfaces/IVuexUserManagementService'
import { injectable } from 'inversify-props'

const userManagementStore = getModule(UserManagementStore)

@injectable()
export default class VuexUserManagementService implements IVuexUserManagementService {
  cacheAuthData (user: any, authState: string) : void {
    userManagementStore.loadAuthDataToStore(user)
    userManagementStore.loadAuthStateToStore(authState)
  }

  getCachedAuthState () : string {
    return userManagementStore.currentUserAuthState
  }

  getCachedUserData () : object {
    return userManagementStore.currentUserData
  }

  getCachedUsername () : string {
    return userManagementStore.getCurrentUsername
  }

  clearCache () {
    return userManagementStore.clearStore()
  }
}
