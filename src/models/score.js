import { Model } from '@vuex-orm/core'

export default class Score extends Model {
    static entity = 'scores'

    static fields() {
        return {
            
            id: this.attr(null),
            scored_marks: this.attr(null),
            user_id: this.attr(null),
            scorable_id: this.attr(null),
            scorable_type: this.attr(''),
      
        }
    }
}