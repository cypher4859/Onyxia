import IService from '@/services/interfaces/IService'
import ICaseFileInfoModel from '../types/ICaseFileInfoModel'

export default interface ICaseFileService extends IService {
  getCaseFileDetails(id: string) : ICaseFileInfoModel
  getAllCaseFiles(filter?: object) : Promise<ICaseFileInfoModel[]>
  save (caseFile: ICaseFileInfoModel, savedCaseFile: ICaseFileInfoModel) : Promise<ICaseFileInfoModel>
  deleteCaseFiles (caseFiles: ICaseFileInfoModel[]) : void
}
