import IService from './IService'

export default interface ICaseFileService extends IService {
  getCaseFileData() : object
}
