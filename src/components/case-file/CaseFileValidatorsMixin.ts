import { Vue, Component } from 'vue-property-decorator'
import utilDefaults from './utilDefaultData'

@Component
export default class extends Vue {
  public maxLengthRules (customLength: number | null = null) : ((name: string) => string | true)[] {
    const rules = []
    const ruleLength = customLength !== null ? customLength : utilDefaults.maxStringLength
    rules.push((name: string) => (name || '').length <= ruleLength || `Exceeds the max allowed characters of ${ruleLength}`)
    return rules
  }

  public socialSecurityRules () : ((name: string) => string | true)[] {
    const rules = []
    rules.push((ssn: string) => (ssn || '').length < 20 || `That SSN doesn't seem valid. Exceeds max length`)
    return rules
  }
}
