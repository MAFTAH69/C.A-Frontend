import { Model } from '@vuex-orm/core'
import CourseUser from '@/models/course_user.js'
import Course from '@/models/course.js'
import Role from '@/models/role.js'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      reg_number: this.attr(null),
      role_id: this.attr(null),

      courses: this.belongsToMany(Course, CourseUser, 'user_id', 'course_id'),
      role: this.belongsTo(Role, 'role_id',)

    }
  }
}