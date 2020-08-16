import { Model } from '@vuex-orm/core'

export default class Postponement extends Model {
    static entity = 'postponements'

    static fields() {
        return {
            
            id: this.attr(null),
            attachement: this.attr(''),
            user_id: this.attr(null),
            postponable_id: this.attr(null),
            postponable_type: this.attr(''),
      
        }
    }
}