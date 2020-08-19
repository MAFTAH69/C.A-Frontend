<template>
  <div id="header">
    <div class="header">
      <img src="@/assets/udsm.png" alt class="img" />
      <h1>
        COURSEWORK ASSESSMENT AND
        <br />POSTPONEMENT SYSTEM
      </h1>
    </div>
    <div class="mini-header">
      <div>
        <i>Academic Year:</i>
        <b>{{first_header_variable}}</b>
      </div>

      <b style="font-size:13px">{{thisUser.surname}} {{thisUser.first_name}} {{thisUser.middle_name}} {{thisUser.reg_number}}</b>
    </div>
  </div>
</template>


<style>
.img {
  float: left;
  width: 60px;
}
.header::after {
  content: "";
  clear: both;
  display: table;
}
.header {
  background: rgb(193, 225, 230);
  padding: 8px;
}
h1 {
  color: rgb(253, 252, 252);
  font-size: large;
  font-family: "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana,
    sans-serif;
  margin: 0;
}
.mini-header {
  display: flex;
  background: rgb(174, 179, 180);
  color: white;
  padding: 10px 0 10px 10px;
  padding-right: 50px;
  justify-content: space-between;
}
</style>


<script>
// import UserService from "@/services/storage.service.js";
// const CURRENT_USER = 'current_user'

export default {
  data() {
    return {
      thisUser: "",
      first_header_variable: "2019/2020",
    };
  },
  mounted() {
    console.log("hellow");
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));
    console.log(this.thisUser.surname);
  },
};
</script>