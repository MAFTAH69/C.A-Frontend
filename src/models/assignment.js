import { Model } from '@vuex-orm/core'

export default class Assignment extends Model {
    static entity = 'assignments'

    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(''),
            total_marks: this.attr(null),
            course_id: this.attr(null),

        }
    }
}