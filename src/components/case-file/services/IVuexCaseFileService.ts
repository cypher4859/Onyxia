import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

export default interface IVuexCaseFileService {
  getMultipleCaseFiles: (filter: object) => ICaseFileInfoModel[]
  getSingleCaseFile: (id: string) => ICaseFileInfoModel | null
  saveCaseFiles (newCaseFiles: ICaseFileInfoModel[]) : ICaseFileInfoModel[]
  updateCaseFile (caseFile: ICaseFileInfoModel) : void
}
