<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <h3>Upload Coursework According to the Mode of Assessment you Wish to Use</h3>

        <div class="sample-letters">
          <div class="sample-section">
            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#testModal"
            >
              <i class="fas fa-plus"></i> Test
            </button>
            <button
              type="button"
              class="btn btn-info btn-lg btnnn"
              data-toggle="modal"
              data-target="#quizModal"
            >
              <i class="fas fa-plus"></i> Quiz
            </button>
            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#assignmentModal"
            >
              <i class="fas fa-plus"></i> Assignment
            </button>
            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#practicalModal"
            >
              <i class="fas fa-plus"></i> Practical
            </button>
          </div>
        </div>
        <br />
        <!-- ADD TEST MODAL -->
        <div class="modal fade" id="testModal" role="dialog">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Add Test
                </h4>
              </div>
              <form method="POST" action>
                <div class="form-group">
                  <div class="modal-body">
                    <input type="number" name="title" class="input-decoration" required hidden />
                    <br />
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Eg; Test 01"
                      class="input-decoration"
                      required
                      autocomplete="title"
                      autofocus
                    />
                    <br />
                    <label>Total Marks:</label>
                    <input
                      type="number"
                      name="total"
                      class="input-decoration"
                      required
                      autocomplete="total"
                    />
                    <br />
                    <label>Test Weight:</label>
                    <input
                      type="number"
                      name="weight"
                      class="input-decoration"
                      required
                      autocomplete="weight"
                    />
                  </div>

                  <div class="modal-footer">
                    <input type="submit" class="btn btn-primary submit-button" value="Add" />
                    <button
                      type="button"
                      class="btn btn-danger clear-button"
                      data-dismiss="modal"
                    >Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="card-header"></div>
        <hr style="height:0.5px; width:100%; " />
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Tests</th>
              <th>Quizzes</th>
              <th>Assignments</th>
              <th>Practicals</th>
            </tr>
          </thead>
          <tbody>
            <!-- @foreach ($postponements as $index => $postponement) -->
            <tr>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Test 02</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Quiz 02</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Assignment 02</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Practical 02</a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Test 01</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Quiz 01</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Assignment 02</a>
              </td>
              <td>
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-outline"
                  data-toggle="modal"
                  data-target="#scoresModal"
                  style="margin-top:10px; margin-bottom:10px; text-align:center"
                >Practical 02</a>
              </td>
            </tr>

            <!-- @endforeach -->
          </tbody>
        </table>
        <!-- ADD SCORES MODAL -->
        <div class="modal fade" id="scoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form action>
                <div class="modal-body">
                  <h4>Insert .xml file to upload scores</h4>
                </div>
                <div class="file-input">
                  <input
                    type="file"
                    class="form-control"
                    :class="{ ' is-invalid' : error.message }"
                    id="input-file-import"
                    name="file_import"
                    ref="import_file"
                    @change="onFileChange"
                  />
                  <div v-if="error.message" class="invalid-feedback"></div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-primary submit-button" value="Upload" />
                    <button
                      type="button"
                      class="btn btn-danger clear-button"
                      data-dismiss="modal"
                    >Clear</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- <div class="modal fade" id="scoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form action>
                <div class="form-group">
                  <div class="modal-body">
                    <h4>Insert .xml file to upload scores</h4>
                  </div>
                  <div class="file-input">
                    <input type="file" id="inserted-file" />
                  </div>
                  <div class="modal-footer">
                    <input type="submit" class="btn btn-primary submit-button" value="Upload" />
                    <button
                      type="button"
                      class="btn btn-danger clear-button"
                      data-dismiss="modal"
                    >Clear</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>-->
        <button
          type="button"
          class="btn btn-primary clear-button"
          data-dismiss="modal"
        >Publish Coursework</button>
      </div>
    </div>
    <div class="container">
      <hr style="height:5 px; width:100%; " />
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Registration Number</th>
            <th>Test 01</th>
            <th>Quiz</th>
            <th>Assignment</th>
            <th>Test 02</th>
            <th>Coursework/40</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>4</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
          <tr>
            <td>7</td>
            <td>2017-04-07374</td>
            <td>12</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>27</td>
          </tr>
        </tbody>
      </table>
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
.input-decoration {
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 3px;
}
.file-input {
  padding: 10px;
  background: rgb(210, 210, 231);
  border-radius: 5px;
  margin-right: 18px;
  margin-left: 17px;
}
.submit-button {
  color: blue;
}
.clear-button {
  color: red;
}
label {
  width: 150px;
}
.sample-letters {
  padding: 10px;
  background: rgb(210, 210, 231);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.btn {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  background-color: #f9f9f9;
  margin-right: 10px;
  margin-top: 5px;
  color: black;
}
.view-coursework {
  text-align: right;
}
.view-coursework-button {
  border-radius: 5px;
  padding: 8px;
  color: rgb(51, 17, 245);
  font-weight: bold;
}
.nav-link:last-child {
  border: none;
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

.table {
  width: 100%;
  border: 1px solid #333;
  border-collapse: collapse;
  text-align: center;
}

tr,
td,
th {
  border: 1px solid #333;
  text-align: center;
}
</style>


<script>
// import { ApiService } from "@/services/api.service.js";
import axios from "axios";

export default {
  data() {
    return {
      error: {},
      import_file: "",
    };
  },
  methods: {
    onFileChange(e) {
      this.import_file = e.target.files[0];
    },

    proceedAction() {
      let formData = new FormData();
      formData.append("import_file", this.import_file);

      axios
        .post("/scores/import", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Successfully uploaded");
          }
        })
        .catch((error) => {
          console.log("Upload not valid");
          this.uploading = false;
          this.error = error.response.data;
          console.log("check error: ", this.error);
        });
    },
  },
};
</script>
