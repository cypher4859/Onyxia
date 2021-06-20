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
      _deleted: false,
      _user: 'cypher',
      obsId: '111',
      id: '0',
      fullName: 'James R. Watts',
      first: 'James',
      middle: 'Ryan',
      last: 'Watts',
      suffix: 'Mr.',
      additional: 'Gordon',
      month: '12',
      day: '17',
      year: '1991',
      date: '12/17/1991',
      age: '29',
      socialSecurityNumber: '235-40-9856',
      driversLicenseNumber: 'F001353',
      passportIdentifier: '',
      phones: ['208-765-1234'],
      emails: [],
      messagingApplications: [],
      streetAddress: '1765 Mya Valley',
      city: 'Houston',
      zip: '77043',
      state: 'TX',
      country: 'US',
      personalReferences: [],
      businessReferences: [],
      romanticReferences: [],
      familialReferences: [],
      outlierAssociates: [],
      height: '7ft 2in',
      weight: '187 lbs',
      eyeColor: 'blue',
      hairColor: 'brown',
      tattoos: [],
      piercings: [],
      physicalDeformities: [],
      profile: 'Redneck'
    }
  }
}
