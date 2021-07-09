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
import { isEqual, omit, uniqueId } from 'lodash'
import { createICaseFileInfoModel, deleteICaseFileInfoModel, updateICaseFileInfoModel } from '@/graphql/mutations'
import IBaseService from '@/services/interfaces/IBaseService'
import IUserManagementService from '@/services/interfaces/IUserManagementService'

@injectable()
export default class extends MenuItemService implements ICaseFileService {
  @inject(TYPES.IVuexCaseFileService)
  private vuexCaseFileService!: IVuexCaseFileService

  @inject(TYPES.IUserManagementService)
  private userManagementService!: IUserManagementService

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
    Object.assign(filter, { _deleted: { eq: false }, _user: { eq: this.userManagementService.getUser() } })
    const caseFiles = this.vuexCaseFileService.getMultipleCaseFiles(filter)
    if (caseFiles.length < 1) {
      let caseFilesToReturn: ICaseFileInfoModel[] = []
      await this.loadCaseFilesIntoStore(filter)
        .then((result) => {
          caseFilesToReturn = result
        })
        .catch(e => {
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

  public getCaseFileDetails (id: string) : ICaseFileInfoModel | null {
    return this.vuexCaseFileService.getSingleCaseFile(id)
    // return API.graphql({
    //   query: getICaseFileInfoModel,
    //   variables: { id: id }
    // })
  }

  public async apiGetCaseFiles (filter: object) : Promise<ICaseFileInfoModel[]> {
    const caseFiles = await API.graphql({
      query: listICaseFileInfoModels,
      variables: {
        filter: filter
      }
    })
    const rawCaseFiles = (caseFiles as any).data.listICaseFileInfoModels.items as ICaseFileInfoModel[]
    return this.removeAmplifyProperties(rawCaseFiles) as ICaseFileInfoModel[]
  }

  public createNew () : ICaseFileInfoModel {
    return this.getDefaultCaseFileModel()
  }

  public async saveAll (caseFiles: ICaseFileInfoModel[]) : Promise<ICaseFileInfoModel[]> {
    let results: any[] = []
    for (const caseFile of caseFiles) {
      await this.save(caseFile)
    }
    return results
  }

  public async save (workingCopy: ICaseFileInfoModel) : Promise<ICaseFileInfoModel> {
    const savedCaseFile: ICaseFileInfoModel | null = this.getCaseFileDetails(workingCopy.id)
    if (workingCopy && savedCaseFile && !isEqual(workingCopy, savedCaseFile)) {
      // case file is being updated
      const result = await API.graphql({
        query: updateICaseFileInfoModel,
        variables: { input: workingCopy }
      })
      const updatedCaseFile = (result as any).data.updateICaseFileInfoModel as ICaseFileInfoModel
      const cleanedUpdatedCaseFile = this.removeAmplifyProperties([updatedCaseFile])[0] as ICaseFileInfoModel
      this.vuexCaseFileService.updateCaseFile(cleanedUpdatedCaseFile)
      return cleanedUpdatedCaseFile
    } else if (workingCopy && !savedCaseFile) {
      // brand new case file
      const result = await API.graphql({
        query: createICaseFileInfoModel,
        variables: { input: omit(workingCopy, ['id']) }
      })
      const cleanedUpResult = (result as any).data.createICaseFileInfoModel as ICaseFileInfoModel
      this.vuexCaseFileService.saveCaseFiles([cleanedUpResult])
      return cleanedUpResult
    } else {
      return {} as ICaseFileInfoModel
    }
    // If it's a brand new case file than save
    // Confirm that it's saved on API side then
    // save on the store
  }

  public async destroyCaseFiles (caseFiles: ICaseFileInfoModel[]) : Promise<void> {
    const results: any = []
    for (const caseFile of caseFiles) {
      let res = await API.graphql({
        query: deleteICaseFileInfoModel,
        variables: { input: { id: caseFile.id } }
      })
      let resultCaseFile = (res as any).data.deleteICaseFileInfoModel as ICaseFileInfoModel
      this.vuexCaseFileService.removeCaseFile(resultCaseFile)
      results.push(resultCaseFile)
    }
  }

  public clearCaseFilesFromCache () {
    this.vuexCaseFileService.clearCache()
  }

  private getDefaultCaseFileModel () : ICaseFileInfoModel {
    return {
      _deleted: false,
      _user: this.userManagementService.getUser(),
      id: '',
      obsId: uniqueId(),
      fullName: '',
      first: '',
      middle: '',
      last: '',
      suffix: '',
      additional: '',
      month: '',
      day: '',
      year: '',
      date: '',
      age: '',
      socialSecurityNumber: '',
      driversLicenseNumber: '',
      passportIdentifier: '',
      phones: [],
      emails: [],
      messagingApplications: [],
      streetAddress: '',
      city: '',
      zip: '',
      state: '',
      country: '',
      personalReferences: [],
      businessReferences: [],
      romanticReferences: [],
      familialReferences: [],
      outlierAssociates: [],
      height: '',
      weight: '',
      eyeColor: '',
      hairColor: '',
      tattoos: [],
      piercings: [],
      physicalDeformities: [],
      profile: ''
    }
  }
}
