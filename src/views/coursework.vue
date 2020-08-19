<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <h3>
          <b>Select Course</b>
        </h3>

        <div v-for="(course, index) in thisUser.courses" :key="index">
          <button class="btn btn-outline btn-lg" @click="viewCoursework(course)">{{ course.title }}</button>
          <br />
          <br />
        </div>
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

export default {
  data() {
      return {
        first_header_variable: "",
        thisUser: "",
        userId: null,
        userRole: "",
        // test: "",
      };
    },
  methods: {
    
    viewCoursework(specificCourse) {
      console.log(specificCourse)
      if (this.userRole.name == "Student") {
        this.$router.push({ name: "DisplayCoursework",params: {course: specificCourse}});
      } else {
        this.$router.push({ name: "UploadCoursework" ,params: {course: specificCourse}});
      }
    },
  },

  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));

    // this.userId = this.thisUser.id;

    this.thisUser.courses.forEach((course) => {
      console.log(course.title);
    });

    this.thisUser.roles.forEach((role) => {
      this.userRole=role;
      // console.log();
    });
  },
  computed: {
 
  },
};
</script>