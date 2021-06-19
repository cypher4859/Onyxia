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
import { isEqual, omit } from 'lodash'
import { createICaseFileInfoModel, updateICaseFileInfoModel } from '@/graphql/mutations'

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
    if (caseFiles.length < 1) {
      let caseFilesToReturn: ICaseFileInfoModel[] = []
      await this.loadCaseFilesIntoStore(filter)
        .then((result) => {
          caseFilesToReturn = result
        })
        .catch(e => {
          console.error(e)
          caseFilesToReturn = []
        })
      return caseFilesToReturn
    } else {
      return caseFiles
    }
  }

  public async loadCaseFilesIntoStore (filter: object) {
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
    const rawCaseFiles = (caseFiles as any).data.listICaseFileInfoModels.items as ICaseFileInfoModel[]
    const cleanedCaseFiles = rawCaseFiles.map((caseFile) => {
      return omit(caseFile!, ['createdAt', 'updatedAt'])
    })
    console.log('cleaned case files: ', cleanedCaseFiles)
    return cleanedCaseFiles as ICaseFileInfoModel[]
  }

  public async save (workingCopy: ICaseFileInfoModel, savedCaseFile: ICaseFileInfoModel) {
    console.log('Saving: ', workingCopy)
    console.log('Old Saved CaseFile: ', savedCaseFile)
    // Check for differences
    if (workingCopy && savedCaseFile && !isEqual(workingCopy, savedCaseFile)) {
      // case file is being updated
      // update
      console.log('Updating existing casefile with (old, new): ', savedCaseFile, workingCopy)
      await API.graphql({
        query: updateICaseFileInfoModel,
        variables: { input: workingCopy }
      })
    } else if (workingCopy && !savedCaseFile) {
      // brand new case file
      // save
      console.log('Saving new caseFile')
      // await API.graphql({
      //   query: createICaseFileInfoModel,
      //   variables: { input: caseFile }
      // })
    }
    // If it's a brand new case file than save
    // Confirm that it's saved on API side then
    // save on the store
  }

  public async deleteCaseFiles (caseFiles: ICaseFileInfoModel[]) {
    console.log('Deleting following casefiles: ', caseFiles)
    // Delete on API side
    // then Delete on Store side
  }
}
