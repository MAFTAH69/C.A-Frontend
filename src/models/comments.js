import { Model } from '@vuex-orm/core'

export default class Comment extends Model {
    static entity = 'comments'

    static fields() {
        return {
            id: this.attr(null),
            body: this.attr(''),
            user_id: this.attr(null),

        }
    }
}