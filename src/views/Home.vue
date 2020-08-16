<template>
  <div>
    <div id="home">
      <div class="main-content">
        <h3>
          <b>Welcome </b>
          <hr noshade />
        </h3>

        <p class="homeDescription">
          You have successfully login to the Coursework Assessment and Postponement System
          <br />
          <br />
          <br />You can access ARIS functionalities by following
          appropriate links on the menu side. Following is
          further information about the links :
        </p>
        <h4>Coursework</h4>
        <ul>
          This functionality helps you to track the progress
          of coursework assessment. A students can select a
          course among the list of courses to view the course
          work and comment for any problem found, that needs
          some clarification
        </ul>
        <h4>Postponement</h4>
        <ul>This functionality helps you to process postponement activ</ul>
      </div>
    </div>
    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>
  </div>
</template>


<style>
#home {
  padding: 10px;
  display: flex;
}
.main-content {
  flex: 0 0 60%;
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
const api = "http://127.0.0.1:8000/api/users";
import axios from "axios";
import User from "@/models/user.js";
export default {
  computed: {
    allUsers() {
      return User.all()
    }
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(api).then((response) => {
      console.log(response.data);
      User.insert({
        data: response.data.users,
      });
      this.users = response.data.users
    });
  },
  
};
</script>
