<template>
  <div>
    <!-- POSTPONEMENTS -->
    <section id="postponements">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h4>ALL POSTPONEMENTS</h4>
          </div>

          <hr style="height:0.5px; width:100%; background-color:black" />
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>Reg. Number</th>
                <!-- <th>Student Name</th> -->
                <th>Type</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- <template  v-for="(user, i) in users":key="i"> -->
              <tr v-for="(postponement, index) in postponements" :key="index" >
                <td>{{ index + 1 }}</td>
                <!-- <td>{{}}</td> -->
                <td>{{ postponement.user_id }}</td>
                <td>{{ postponement.postponable_type }}</td>
                <td>Waiting</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i class="fas fa-info-circle">View</i>
                  </a>
                </td>
              </tr>
              <!-- </template> -->
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>
  </div>
</template>

<style >
.container {
  padding-right: 30%;
}
#postponements {
  padding-top: 30px;
}
.footer {
  color: gray;
  text-align: center;
}
</style>

<script>
const api = "http://127.0.0.1:8000/api/postponements";
const userApi = "http://127.0.0.1:8000/api/users";

import axios from "axios";
import Postponement from "@/models/postponement.js";
import User from "@/models/user.js";

export default {
  methods: {
    openIndividualPostponement() {
      this.$router.push({ path: "my_postponement" });
    },
  },

  computed: {
    allPostponements() {
      return Postponement.all();
    },
    allUsers() {
      return User.all();
    },
  },
  data() {
    return {
      postponements: [],
      users: [],
      // userId:'
    };
  },
  mounted() {
    axios.get(api).then((response) => {
      console.log(response.data);
      Postponement.insert({
        data: response.data.postponements,
      });
      this.postponements = response.data.postponements;
    });

    axios.get(userApi).then((re) => {
      console.log(re.data);
      User.insert({
        data: re.data.users,
      });
      this.users = re.data.users;
      // this.users.forEach(user => {
      //   this.userId=user.id
      // });
      // console.log(this.user.id)
    });
  },
};
</script>