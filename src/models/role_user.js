import { Model } from '@vuex-orm/core'


export default class RoleUser extends Model {
  static entity = 'role_users'

  static primaryKey = ['role_id', 'user_id']

  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      role_id: this.attr(null),
    

    }
  }
}