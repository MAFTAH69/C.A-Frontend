import { Model } from '@vuex-orm/core'
import CourseUser from '@/models/course_user.js'
import Course from '@/models/course.js'
import Role from '@/models/role.js'
import RoleUser from '@/models/role_user.js'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.attr(null),
      surname: this.attr(''),
      first_name: this.attr(''),
      middle_name: this.attr(''),
      reg_number: this.attr(null),
      department: this.attr(''),
      program: this.attr(''),

      courses: this.belongsToMany(Course, CourseUser, 'user_id', 'course_id'),
      roles: this.belongsToMany(Role, RoleUser, 'role_id', 'user_id')

    }
  }
}