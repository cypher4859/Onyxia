import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ICaseFileService from './ICaseFileService'
import caseFileExampleData from '../testCaseFileData'
import { injectable } from 'inversify-props'

@injectable()
export default class extends MenuItemService implements ICaseFileService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Case File',
      icon: 'mdi-ballot',
      path: '/case-file'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  getCaseFileData () : object {
    return caseFileExampleData
  }
}
