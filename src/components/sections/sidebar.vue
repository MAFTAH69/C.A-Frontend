<template>
  <div id="sidebar">
    <div class="outerBox">
      <div class="sidebar-section">
        <a class="nav-link" href="home">Home</a>
      </div>
    </div>
    <div class="outerBox">
      <div class="sidebar-links">
        <input @click="goToCoursework()" class="nav-link" type="submit" value="Coursework" />
      </div>
      <div class="sidebar-links">
        <input @click="goToPostponement()" class="nav-link" type="submit" value="Postponement" />
      </div>
      <div class="sidebar-links">
        <input @click="goToLogout" class="nav-link" type="submit" value="Logout" />
      </div>
    </div>
  </div>
</template>

<style>
#sidebar {
  flex: 0 1 280px;
  background-color: #e9e3e3;
}
.sidebar-section {
  padding: 5px;
  font-weight: bold;
  border: 1px solid #cccccc;
  background-color: #c0c6c7;
}
.sidebar-links {
  padding: 5px;
  border: 1px solid #cccccc;
  background-color: #c0c6c7;
}

.nav-link {
  font-family: verdana, helvetica, sans-serif;
  font-size: 13px;
  color: #cc0000;
  text-decoration: none;
  background-color: #c0c6c7;
}
.outerBox {
  padding: 10px;
}
</style>


<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
    goToCoursework() {
      this.$router.push({ path: "coursework" });
    },
    goToPostponement() {
      this.$router.push({ path: "postponement" });
    },
    goToLogout() {
      this.logout();
    },
  },
};
</script>