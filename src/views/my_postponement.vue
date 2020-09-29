<template>
  <div id="my-postponement" class="container">
    <div class="card">
      <div class="card-header">
        <h4>MY POSTPONEMENT PROGRESS</h4>
      </div>
      <hr style="height:0.5px; width:100%; background-color:black" />
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Reg. Number</th>
            <th>Student Name</th>
            <th>Type</th>
            <th>Attachements</th>
          </tr>
        </thead>
        <tbody>
          <!-- <template v-if="this.thisUser.postponements!=null"> -->
          <tr v-for="(postponement, index) in thisUser.postponements" :key="index">
            <td>{{postponement.user_id}}</td>
            <td>Maftah Ally Waziri</td>
            <td>{{postponement.postponable_type}}</td>
            <a
              href="#"
              class="btn btn-primary btn-sm btn-outline"
              data-toggle="modal"
              data-target="#openAttachementsModal"
              style="margin-top:10px; margin-bottom:10px; text-align:center"
            >
              <i class="fas fa-file"></i> Open
            </a>
          </tr>
          <!-- </template> -->
        </tbody>
      </table>

      <div class="approve-section">
        <div class="row attachements" style="justify-items:center">
          <div class="col-md-3">
            <i style="color:gray">Step 01</i>
            <br />
            <br />
            <h4>
              <b>Principle</b>
            </h4>
            <br />

            <div class style="padding: 10px; ">
              <i class="fas fa-check fa-3x fa-success"></i>
            </div>
            <div class="feedback"></div>
          </div>
          <div class="col-md-4">
            <i style="color:gray">Step 02</i>
            <br />
            <br />
            <h4>
              <b>Director of Undergraduate</b>
            </h4>
            <br />

            <div class style="padding: 10px;">
              <i class="fas fa-ellipsis-h fa-3x fa-primary"></i>
            </div>
            <div class="feedback"></div>
          </div>
          <div class="col-md-3">
            <i style="color:gray">Step 03</i>
            <br />
            <br />
            <h4>
              <b>DVC Academic</b>
            </h4>
            <br />

            <div class style="padding: 10px;">
              <i class="fas fa-ellipsis-h fa-3x fa-primary"></i>
            </div>
            <div class="feedback"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <hr />
      <p>Copyright &copy; 2020 UDSM</p>
    </div>

    <!-- OPEN POSTPONEMENT MODAL -->
    <div class="modal fade" id="openAttachementsModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header bg-dark text-dark">
            <h5 class="modal-title">Postponement Attachements</h5>
            <button class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
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
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  color: gray;
  text-align: center;
}
.container {
  padding-right: 25%;
}
#my-postponement {
  padding-top: 30px;
}
.approve-section {
  text-align: center;
}
.col-md-4 {
  background-color: rgb(214, 242, 248);
  margin: 2px;
}
.col-md-3 {
  background-color: rgb(214, 242, 248);
  margin: 2px;
}
.approve-section {
  background-color: rgb(191, 220, 241);
  padding: 20px;
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
.at {
  margin-right: 10px;
}
.feedback {
  background-color: white;
  padding: 3px;
}
.fa-success {
  color: green;
}
.fa-danger {
  color: red;
}
.fa-primary {
  color: rgb(40, 171, 236);
}
</style>
<script>
export default {
  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));
  },
  methods: {},

  data() {
    return {
      error: false,
      thisUser: "",
    };
  },
};
</script>