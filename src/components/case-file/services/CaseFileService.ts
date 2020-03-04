import 'reflect-metadata'
import { Vue, Component, Model } from 'vue-property-decorator'
import MenuItemService from '@/services/implementations/MenuItemService'
import IMenuItem from '@/types/IMenuItem'
import IService from '@/services/interfaces/IService'
import { injectable } from 'inversify-props'

@injectable()
export default class extends MenuItemService implements IService {
  defaultModel () : IMenuItem {
    const properties : IMenuItem = {
      title: 'Case File',
      icon: 'mdi-ballot',
      path: '/case-file'
    }
    this.setMenuItemProperties(properties)
    return this.getModel()
  }

  getCaseFileData () : object {
    return {
      'id': 0,
      'identity': {
        'name': {
          'full-name': '',
          'first': '',
          'middle': '',
          'last': '',
          'suffix': '',
          'additional': ''
        },
        'date-of-birth': {
          'month': '',
          'day': '',
          'year': ''
        },
        'social-security-number': '',
        'age': ''
      },
      'location': {
        'address': {
          'street-address': '',
          'city': '',
          'zip': '',
          'state': '',
          'country': ''
        }
      },
      'references': {
        'phone-contact': '',
        'current-workplace': '',
        'previous-workplaces': [],
        'family': []
      }
    }
  }
}
