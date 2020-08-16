import { Model } from '@vuex-orm/core'
import User from '@/models/user.js'
import CourseUser from '@/models/course_user.js'

export default class Course extends Model {
  static entity = 'courses'

  static fields () {
    return {
      id: this.attr(null),
      code: this.attr(''),
      title: this.attr(''),
      credits: this.attr(null),
      semester: this.attr(null),
      year: this.attr(null),

      users:this.belongsToMany(User, CourseUser, 'user_id', 'course_id')

    }
  }
}