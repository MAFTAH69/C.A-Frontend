import { Model } from '@vuex-orm/core'
import User from '@/models/user.js'
// import RoleUser from '@/models/role_user.js'

export default class Role extends Model {
    static entity = 'roles'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      description: this.attr(''),
    

      users:this.hasMany(User, 'user_id')

    }
  }
}