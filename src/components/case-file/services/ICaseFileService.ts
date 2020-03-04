import IService from '@/services/interfaces/IService'

export default interface ICaseFileService extends IService {
  getCaseFileData() : object
}
