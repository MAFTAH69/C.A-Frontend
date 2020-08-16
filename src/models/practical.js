import { Model } from '@vuex-orm/core'

export default class Practical extends Model {
    static entity = 'practicals'

    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(''),
            total_marks: this.attr(null),
            course_id: this.attr(null),

        }
    }
}