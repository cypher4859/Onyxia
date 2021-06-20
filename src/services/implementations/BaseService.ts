import { injectable } from 'inversify-props'
import { omit } from 'lodash'
import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'

@injectable()
export default class BaseService extends Vue {
  removeAmplifyProperties (objects: object[]) : object[] {
    return objects.map((obj) => {
      return omit(obj, ['createdAt', 'updatedAt'])
    })
  }
}
