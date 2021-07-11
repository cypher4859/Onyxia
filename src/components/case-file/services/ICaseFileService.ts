import IService from '@/services/interfaces/IService'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

export default interface ICaseFileService extends IService {
  getCaseFileDetails(id: string) : ICaseFileInfoModel | null
  getAllCaseFiles(filter?: object) : Promise<ICaseFileInfoModel[]>
  createNew() : ICaseFileInfoModel
  save (caseFile: ICaseFileInfoModel) : Promise<ICaseFileInfoModel>
  saveAll (caseFiles: ICaseFileInfoModel[]) : Promise<ICaseFileInfoModel[]>
  destroyCaseFiles (caseFiles: ICaseFileInfoModel[]) : Promise<void>
  clearCaseFilesFromCache () : void
}
