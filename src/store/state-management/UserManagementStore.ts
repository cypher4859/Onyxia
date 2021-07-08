import 'reflect-metadata'
import store from '@/store'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ dynamic: true, store, name: 'UserManagementStore' })
export default class UserManagementStore extends VuexModule {
  private currentUser: any = ''
  private currentAuthState: string = ''

  get currentUserData () : any {
    return this.currentUser
  }

  get currentUserAuthState () : string {
    return this.currentAuthState
  }

  @Action({ commit: 'loadAuthState' })
  public loadAuthStateToStore (newAuthState: string) : string {
    return newAuthState
  }

  @Action({ commit: 'loadAuthData' })
  public loadAuthDataToStore (newAuthData: any) {
    return newAuthData
  }

  @Mutation
  public loadAuthState (newAuthState: string) {
    this.currentAuthState = newAuthState
  }

  @Mutation
  public loadAuthData (newAuthData: any) {
    this.currentUser = newAuthData
  }
}
