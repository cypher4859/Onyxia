import IPersonOfInterest from './IPersonOfInterest'

export default interface ICaseFileInfoModel extends IPersonOfInterest {
  _deleted: boolean
  _user: string
  id: string
  obsId: string
}
