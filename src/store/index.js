import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'

import User from '@/models/user.js'
import Course from '@/models/course.js'
// import Comments from '@/models/comments.js'
import Role from '@/models/role.js'
import RoleUser from '@/models/role_user.js'
// import Coursework from '@/models/coursework.js'
// import Quiz from '@/models/quiz.js'
// import Test from '@/models/test.js'
// import Score from '@/models/score.js'
// import Assignment from '@/models/assignment.js'
// import Practical from '@/models/practical.js'
import CourseUser from '@/models/course_user.js'
import Postponement from '@/models/postponement.js'

import VuexORM from '@vuex-orm/core'

Vue.use(Vuex)

const database = new VuexORM.Database()

// Register Models.
database.register(User)
database.register(Role)
database.register(Course)
database.register(CourseUser)
database.register(RoleUser)
// database.register(Coursework)
// database.register(Quiz)
// database.register(Test)
// database.register(Score)
// database.register(Assignment)
// database.register(Practical)
database.register(Postponement)


export default new Vuex.Store({

  plugins: [VuexORM.install(database)],

  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
})
