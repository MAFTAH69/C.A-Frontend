<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <h3>
          <b>Select Course</b>
        </h3>

        <div v-for="(course, index) in userCourses.courses" :key="index">
          {{ course.title }}
        </div>

        <button class="btn btn-outline btn-lg" @click="viewCoursework()">{{}}</button>
        <br />
        <br />
        <button
          class="btn btn-outline btn-lg"
          @click="viewCoursework()"
        >IS 322: Introduction to Object Oriented Programming</button>
        <br />
        <br />
        <button
          class="btn btn-outline btn-lg"
          @click="viewCoursework()"
        >IS 252: Managemebt of Software Project</button>
        <br />
        <br />
        <button class="btn btn-outline btn-lg" @click="viewCoursework()">IS 318: Database Management</button>
        <br />
        <br />
        <button
          class="btn btn-outline btn-lg"
          @click="viewCoursework()"
        >CS 385: Artificial Intelligence</button>
        <br />
        <br />
      </div>
    </div>
    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>
  </div>
</template>


<style  scoped>
#coursework {
  padding: 10px;
  display: flex;
}

.footer {
  text-align: center;
  color: gray;
}
hr {
  width: 95%;
}
.course-button {
  border-radius: 5px;
  padding: 5px;
}
</style>

<script>
import { ApiService } from '@/services/api.service.js'
import User from '@/models/user.js'
import Course from '@/models/course.js'
export default {
  methods: {
    viewCoursework() {
      this.$router.push({ path: "upload_coursework" });
    },
  },
  data() {
    return {
      first_header_variable: "",
      thisUser: "",
      userId: null
    };
  },
  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));

    this.userId = this.thisUser.id;

    try {
      ApiService.get('courses').then(res => { 
        Course.insert({ data: res.data.courses })
       });
    } catch (error) {
      console.log(error)
    }

  },
  computed: {
    userCourses() {
      console.log(User.query().where('id', 3).with('courses').get())
      return User.query().with('courses').where('id', 1).get()[0]
    }
  }
};
</script>