import IIdentityName from './IIdentityName'
import IIdentitySecrets from './IIdentitySecrets'
import IIdentityDateBirth from './IIdentityDateBirth'
import IIdentityContactInfo from './IIdentityContactInfo'
import IIdentityPhysicalCharacteristics from './IIdentityPhysicalCharacteristics'

export default interface IIdentity extends IIdentityName, IIdentityDateBirth, IIdentitySecrets, IIdentityContactInfo, IIdentityPhysicalCharacteristics {
}
