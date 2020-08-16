import { Model } from '@vuex-orm/core'

export default class Coursework extends Model {
    static entity = 'courseworks'

    static fields() {
        return {
            id: this.attr(null),
            cw: this.attr(null),
            user_id: this.attr(null),
            course_id: this.attr(null),

        }
    }
}