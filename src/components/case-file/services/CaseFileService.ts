import 'reflect-metadata'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import ICaseFileService from './ICaseFileService'
import { injectable, inject } from 'inversify-props'
import { API } from 'aws-amplify'
import { getICaseFileInfoModel, listICaseFileInfoModels } from '@/graphql/queries'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import TYPES from '@/InjectableTypes/types'
import IVuexCaseFileService from './IVuexCaseFileService'

@injectable()
export default class extends MenuItemService implements ICaseFileService {
  @inject(TYPES.IVuexCaseFileService)
  private vuexCaseFileService!: IVuexCaseFileService

  public defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Case File',
      icon: 'mdi-ballot',
      path: '/case-file'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  public async getAllCaseFiles (filter: object = {}) : Promise<ICaseFileInfoModel[]> {
    Object.assign(filter, { _deleted: { eq: false }, _user: { eq: 'cypher' } })
    const caseFiles = this.vuexCaseFileService.getMultipleCaseFiles(filter)
    console.log('Case Files in Store before grabbing from API: ', caseFiles)
    if (caseFiles.length < 1) {
      console.log('No casefiles in store...')
      let caseFilesToReturn: ICaseFileInfoModel[] = []
      await this.loadCaseFilesIntoStore(filter)
        .then((result) => {
          caseFilesToReturn = result
        })
        .catch(e => {
          console.error(e)
          caseFilesToReturn = []
        })
      console.log('Returning the casefiles we have loaded...')
      return caseFilesToReturn
    } else {
      return caseFiles
    }
  }

  public async loadCaseFilesIntoStore (filter: object) {
    console.log('Loading casefiles in store...')
    return Promise.resolve(
      await this.apiGetCaseFiles(filter).then((result) => {
        this.vuexCaseFileService.saveCaseFiles(result)
        return result
      })
    )
  }

  public async getCaseFileDetails (id: string) {
    return API.graphql({
      query: getICaseFileInfoModel,
      variables: { id: id }
    })
  }

  public async apiGetCaseFiles (filter: object) : Promise<ICaseFileInfoModel[]> {
    const caseFiles = await API.graphql({
      query: listICaseFileInfoModels,
      variables: {
        filter: filter
      }
    })
    console.log('Grabbed casefiles from the API...')
    return (caseFiles as any).data.listICaseFileInfoModels.items as ICaseFileInfoModel[]
  }
}
