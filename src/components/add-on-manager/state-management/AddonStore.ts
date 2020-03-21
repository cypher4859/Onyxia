
import store from '@/store'
import IAddonStore from '@/components/add-on-manager/types/IAddonStore'
import IAddon from '@/components/add-on-manager/types/IAddon'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ dynamic: true, store, name: 'AddonStore' })
export default class AddonStore extends VuexModule implements IAddonStore {
  // list of all implemented components
  public registeredAddonComponents : IAddon[] = [
    {
      name: 'Camera Monitor' // The first part of the name of the render component in the specific addon
    },
    {
      name: 'Case File'
    },
    {
      name: 'Network Monitor'
    }
  ]

  get getRegisteredAddonComponents () : IAddon[] {
    return this.registeredAddonComponents
  }
}
