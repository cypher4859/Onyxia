import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

export default interface IVuexCaseFileService {
  getMultipleCaseFiles: (filter: object) => ICaseFileInfoModel[]
  getSingleCaseFile: (id: string) => ICaseFileInfoModel
  saveCaseFiles (newCaseFiles: any) : void
  updateCaseFile () : void
}
