import { Model } from '@vuex-orm/core'
import User from '@/models/user.js'


export default class Postponement extends Model {
    static entity = 'postponements'

    static fields() {
        return {
            
            id: this.attr(null),
            attachement: this.attr(''),
            user_id: this.attr(null),
            postponable_type: this.attr(''),
      
            user: this.belongsTo(User, 'user_id',)

        }
    }
}

