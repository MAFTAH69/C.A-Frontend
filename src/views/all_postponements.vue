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
                <th>Student Name</th>
                <th>Type</th>
                <th></th>
                <!-- <th></th> -->
              </tr>
            </thead>
            <tbody>
              <!-- @foreach ($postponements as $index => $postponement) -->
                 <tr>
                <td>{{ $index + 1 }}</td>
                <td>2017-04-07374</td>
                <td>Maftah Ally Waziri</td>
                <td>Approved</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>    <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ 48 }}</td>
                <td>{{ 4 }}</td>
                <td>Waiting</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>    <tr>
                 <td>{{ $index + 1 }}</td>
                <td>2017-04-07374</td>
                <td>Maftah Ally Waziri</td>
                <td>Approved</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>    <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ 48 }}</td>
                <td>{{ 4 }}</td>
                <td>Rejected</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>    <tr>
                 <td>{{ $index + 1 }}</td>
                <td>2017-04-07374</td>
                <td>Maftah Ally Waziri</td>
                <td>Approved</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>

              <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ 48 }}</td>
                <td>{{ 4 }}</td>
                <td>Waiting</td>

                <td>
                  <a @click="openIndividualPostponement()" class="btn btn-outline-primary">
                    <i
                      class="fas fa-info-circle"
                      
                    >View</i>
                  </a>
                </td>
              </tr>
              <!-- @endforeach -->
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
export default {
  methods: {
    openIndividualPostponement() {
      this.$router.push({ path: "my_postponement" });
    },
  },
};
</script>