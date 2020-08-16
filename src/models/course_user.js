import { Model } from '@vuex-orm/core'

export default class CourseUser extends Model {
    static entity = 'course_users'
  
    static primaryKey = ['course_id', 'user_id']
  
    static fields () {
      return {
        id: this.attr(null),
        course_id: this.attr(null),
        user_id: this.attr(null),
      }
    }
  }