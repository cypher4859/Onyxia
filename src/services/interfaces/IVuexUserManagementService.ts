export default interface IVuexCaseFileService {
  cacheAuthData (user: any, authState: string) : void
  getCachedAuthData () : string
  getCachedUserData () : object
}
