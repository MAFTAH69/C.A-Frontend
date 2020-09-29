<template>
  <div>
    <div id="postponement">
      <div class="main-content">
        <!-- For User Student -->
        <div class="first-btn">
          <button class="btn btn-sm btn-primary" @click="openMyPostponement()">My Postponement</button>
        </div>
        <h4>Select Type of Postponement You Want To Issue:</h4>

        <!-- FORM -->
        <form>
          <div>
            <select required class="dropdown-select" v-model="form.postponable_type">
              <option value="Exam Postponement">Exam Postponement</option>
              <option value="Semester Postponement">Semester Postponement</option>
              <option value="Year Postponement">Year Postponement</option>
            </select>
          </div>
          <br />
          <h5>Check Sample Postponement Letter For:</h5>
          <div class="sample-letters">
            <div class="attachements bg-light">
              <form action="./ASSIGNMENT 02.pdf" target="_blank">
                <button class="btn btn-primary at" type="submit">Attachement 1</button>
              </form>
              <form action="./ASSIGNMENT 02.pdf" target="_blank">
                <button class="btn btn-primary at" type="submit">Attachement 2</button>
              </form>
              <form action="./ASSIGNMENT 02.pdf" target="_blank">
                <button class="btn btn-primary at" type="submit">Attachement 3</button>
              </form>
            </div>
          </div>

          <br />
          <label for="inserted-file">
            <h4>
              Attach Your Letter and Other Necessary Documents:
              <b
                class="empty"
              >.......................................................................</b>
            </h4>
          </label>
          <input type="text" id="user_id" v-model="form.user_id" required hidden />
          <div class="file-input">
            <input type="file" id="inserted-file" v-on:change="attach()" required multiple />
          </div>
          <br />
          <div class="submit-div">
            <input
              type="submit"
              @click="postpone()"
              value="Submit"
              class="btn btn-default btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>
  </div>
</template>


<style  scoped>
#postponement {
  padding: 10px;
  display: flex;
}
.first-btn {
  text-align: end;
}
.footer {
  text-align: center;
  color: gray;
}
hr {
  width: 95%;
}
.post-type-button {
  color: rgb(176, 176, 231);
  padding: 5px;
  margin-right: 5px;
}
.file-input {
  padding: 10px;
  background: rgb(210, 210, 231);
  border-radius: 5px;
}
.submit-div {
  text-align: right;
}
.dropdown-select {
  padding: 5px;
  color: rgb(42, 7, 197);
  font-weight: bold;
  background: rgb(225, 241, 241);
  border-radius: 5px;
}
.attachements {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.sample-letters {
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgb(210, 210, 231);
}

.empty {
  color: transparent;
}

.nav-link {
  color: rgb(22, 22, 76);
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  background-color: #f9f9f9;
  margin-right: 10px;
  /* border-right: 1px solid #333; */
}

.nav-link:last-child {
  border: none;
}
</style>

<script>
import { ApiService } from "@/services/api.service.js";

export default {
  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));
  },
  methods: {
    openMyPostponement() {
      this.$router.push({ path: "my_postponement" });
    },

    attach() {
      this.form.attachement = document.querySelector("#inserted-file").files[0];
    },
    
    postpone() {
      console.log(this.form.attachement);
      const fd = new FormData();
      fd.append("user_id", this.form.user_id);
      fd.append("attachement", this.form.attachement);
      fd.append("postponable_type", this.form.postponable_type);
      ApiService.post(`postponement/${this.thisUser.id}`, fd)
        .then((response) => {
          console.log(response.data);
          alert("Postponement submitted successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  data() {
    return {
      form: {
        user_id: "",
        attachement: "",
        postponable_type: "",
      },
      error: false,
    };
  },
};
</script>
