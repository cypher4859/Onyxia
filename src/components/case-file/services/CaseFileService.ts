import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ICaseFileService from './ICaseFileService'
import caseFileExampleData from '../testCaseFileData'
import { injectable, inject } from 'inversify-props'
import { API } from 'aws-amplify'
import { getICaseFileInfoModel, listICaseFileInfoModels } from '@/graphql/queries'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

@injectable()
export default class extends MenuItemService implements ICaseFileService {
  public defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Case File',
      icon: 'mdi-ballot',
      path: '/case-file'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  public async getAllCaseFiles (filter: object) : Promise<ICaseFileInfoModel[]> {
    // filter on user
    const caseFiles = await API.graphql({
      query: listICaseFileInfoModels
    })
    return (caseFiles as any).data.listICaseFileInfoModels.items
    // return caseFileExampleData
  }

  public async getCaseFileDetails (id: string) {
    return API.graphql({
      query: getICaseFileInfoModel,
      variables: { id: id }
    })
  }
}
