export default interface IVuexCaseFileService {
  cacheAuthData (user: any, authState: string) : void
  getCachedAuthState () : string
  getCachedUserData () : object
  getCachedUsername () : string
}
