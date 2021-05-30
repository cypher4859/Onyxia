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

  get getSingleCaseFile () : (id: string) => ICaseFileInfoModel {
    return (id: string) : ICaseFileInfoModel => {
      return this.caseFiles.filter((caseFile) => { return caseFile.id === id })[0]
    }
  }

  @Action({ commit: 'storeCaseFile' })
  public saveCaseFiles (newCaseFiles: ICaseFileInfoModel[]) : ICaseFileInfoModel[] {
    return newCaseFiles
  }

  @Mutation
  public storeCaseFile (newCaseFiles: ICaseFileInfoModel[]) {
    this.caseFiles = [...newCaseFiles]
  }
}
