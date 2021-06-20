import 'reflect-metadata'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import store from '@/store'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { getICaseFileInfoModel } from '@/graphql/queries'
import IVuexCaseFileService from '../services/IVuexCaseFileService'
@Module({ dynamic: true, store, name: 'CaseFileStore' })
export default class CaseFileStore extends VuexModule {
  private caseFiles: ICaseFileInfoModel[] = []

  get getMultipleCaseFiles () : (filter: object) => ICaseFileInfoModel[] {
    return (filter: object) : ICaseFileInfoModel[] => {
      return this.caseFiles.filter((caseFile) => filter)
    }
  }

  get getSingleCaseFile () : (id: string) => ICaseFileInfoModel | null {
    return (id: string) : ICaseFileInfoModel | null => {
      const foundCaseFiles = this.caseFiles.filter((caseFile) => { return caseFile.id === id })
      if (foundCaseFiles.length) {
        return foundCaseFiles[0]
      } else {
        return null
      }
    }
  }

  @Action({ commit: 'storeCaseFile' })
  public saveCaseFiles (newCaseFiles: ICaseFileInfoModel[]) : ICaseFileInfoModel[] {
    return newCaseFiles
  }

  @Mutation
  public storeCaseFile (newCaseFiles: ICaseFileInfoModel[]) {
    this.caseFiles = [...this.caseFiles, ...newCaseFiles]
  }

  @Action({ commit: 'updateCaseFileInStore' })
  public updateCaseFile (caseFile: ICaseFileInfoModel) : ICaseFileInfoModel {
    return caseFile
  }

  @Mutation
  public updateCaseFileInStore (updatedCaseFile: ICaseFileInfoModel) {
    const index = this.caseFiles.findIndex((caseFile) => {
      return caseFile.id === updatedCaseFile.id
    })
    if (index > -1) {
      this.caseFiles[index] = updatedCaseFile
    }
  }

  @Action({ commit: 'removeCaseFileFromStore' })
  public removeCaseFile (caseFile: ICaseFileInfoModel) {
    return caseFile
  }

  @Mutation
  public removeCaseFileFromStore (caseFileToRemove: ICaseFileInfoModel) {
    this.caseFiles = this.caseFiles.filter((caseFile) => {
      return caseFile.id !== caseFileToRemove.id
    })
  }
}
