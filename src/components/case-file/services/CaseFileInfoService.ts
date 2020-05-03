import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ICaseFileInfoService from './ICaseFileInfoService'
import { injectable } from 'inversify-props'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

@injectable()
export default class implements ICaseFileInfoService {
  public getDefaultModel () : ICaseFileInfoModel {
    return {
      age: '',
      name: '',
      height: '',
      weight: '',
      lastLocation: '',
      phone: '',
      email: '',
      relationship: ''
    }
  }
}
