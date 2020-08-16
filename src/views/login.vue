<template>
  <div>
    <div id="main">
      <div class="main-content">
        <h3>
          <b>Welcome</b>
        </h3>
        <p class="homeDescription">
          The system manages information related to Coursework Assessments of Students and
          Postponement
          perspectives in the University of Dar es Salaam.
        </p>
        <h4>What does this system do?</h4>
        <ul>
          <li>
            Students
            <ul>
              <li>Request Year/Semester/Exam Postponement</li>
              <li>View Continous Assessment and Course Work</li>
              <li>Track his/her C.A progress</li>
            </ul>
          </li>
          <br />
          <li>
            Teaching Staff
            <ul>
              <li>View list of Students per Course</li>
              <li>Publish Continous Assessment and Course Work</li>
              <li>Track Students Progress</li>
            </ul>
          </li>
          <br />
          <li>
            Other
            <ul>
              <li>Work on Postponement Letters</li>
              <li>Reject or Accept Postponements</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="main-form">
        <div class="form-container">
          <h3>Login</h3>
          <div v-if="error" class="alert alert-danger">
            <span style="font-size: 12px; color: red;">Your credentials are incorrect!</span>
          </div>
          <form>
            <p>Please enter your details in the form below.</p>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" v-model="form.username" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" v-model="form.password" />
            </div>
            <div class="form-group login-buttons">
              <label>&nbsp;</label>
              <input @click.prevent="submitFunction" type="submit" value=" Login " />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>
  </div>
</template>

<style scoped>
#main {
  padding: 10px;
  display: flex;
}

.main-content {
  flex: 0 0 50%;
}

.main-form {
  max-width: 310px;
  margin-top: 5%;
}

.form-container {
  background-color: rgb(202, 198, 198);
}

form {
  padding: 0px 15px 1px 15px;
}

.form-container h3 {
  margin: 0;
  padding: 5px;
  text-align: center;
  background-color: rgb(102, 101, 99);
  color: #fff;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  margin-right: 20px;
}

@media only screen and (max-width: 768px) {
  #main {
    padding: 10px;
    align-items: center;
    flex-direction: column;
  }
}

.homeDescription {
  font-size: 15.5px;
}
li {
  font-size: 14px;
}
.footer {
  text-align: center;
  color: gray;
}
hr {
  width: 95%;
}
</style>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["loggenIn", "authenticating", "authenticationError"]),
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    ...mapActions(["login"]),

    submitFunction() {
      const username = this.form.username;
      const password = this.form.password;
      if (username.length == 0 || password.length == 0) {
        this.error = true;
        return;
      }
      this.login(this.form);
    },
  },
};
</script>
