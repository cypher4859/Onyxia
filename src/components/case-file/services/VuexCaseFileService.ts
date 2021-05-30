import 'reflect-metadata'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'
import store from '@/store'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { getICaseFileInfoModel } from '@/graphql/queries'
import IVuexCaseFileService from './IVuexCaseFileService'

export default class VuexCaseFileService implements IVuexCaseFileService {
  private caseFiles: ICaseFileInfoModel[] = []

  get getMultipleCaseFiles () : (filter: object) => ICaseFileInfoModel[] {
    return (filter: object) : ICaseFileInfoModel[] => {
      return []
    }
  }

  get getSingleCaseFile () : (filter: object) => ICaseFileInfoModel[] {
    return (filter: object) : ICaseFileInfoModel[] => {
      return []
    }
  }

  public saveCaseFiles (newCaseFiles: ICaseFileInfoModel[]) : ICaseFileInfoModel[] {
    return newCaseFiles
  }

  public updateCaseFile () {}
}
