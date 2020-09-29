<template>
  <div>
    <div id="home">
      <div class="main-content">
        <h4>
          <b>Welcome {{thisUser.first_name}} {{thisUser.middle_name}} {{thisUser.surname}}</b>
          <hr noshade />
        </h4>

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
// import axios from "axios";
export default {
  computed: {},
  data() {
    return {
      thisUser: "",
    };
  },
  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));
  },
};
</script>
