import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

export default interface IVuexCaseFileService {
  getMultipleCaseFiles: (filter: object) => ICaseFileInfoModel[]
  getSingleCaseFile: (filter: object) => ICaseFileInfoModel[]
  saveCaseFiles (newCaseFiles: any) : void
  updateCaseFile () : void
}
