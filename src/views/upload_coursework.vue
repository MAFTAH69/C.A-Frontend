<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <div>
          <h3>
            <b>{{thisCourse.code}}: {{thisCourse.title}}</b>
          </h3>
        </div>
        <hr />

        <br />

        <h4>Upload Coursework According to the Mode of Assessment you Wish to Use</h4>

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
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <input
                      v-model="form.course_id"
                      type="text"
                      class="input-decoration"
                      required
                      hidden
                    />
                    <br />
                    <label>Title:</label>
                    <input
                      type="text"
                      v-model="form.title"
                      placeholder="Eg; Test 01"
                      class="input-decoration"
                      required
                      autocomplete="title"
                      autofocus
                    />
                    <br />
                    <label>Total Marks:</label>
                    <input
                      v-model="form.total_marks"
                      type="number"
                      class="input-decoration"
                      required
                      autocomplete="total"
                    />
                    <br />
                    <label>Test Weight:</label>
                    <input
                      type="number"
                      v-model="form.weight"
                      class="input-decoration"
                      required
                      autocomplete="weight"
                    />
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-primary submit-button"
                      value="Add"
                      @click="addTest"
                    />
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

        <!-- ADD QUIZ MODAL -->
        <div class="modal fade" id="quizModal" role="dialog">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Add Quiz
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <input
                      v-model="form.course_id"
                      type="text"
                      class="input-decoration"
                      required
                      hidden
                    />
                    <br />
                    <label>Title:</label>
                    <input
                      type="text"
                      v-model="form.title"
                      placeholder="Eg; Quiz 01"
                      class="input-decoration"
                      required
                      autocomplete="title"
                      autofocus
                    />
                    <br />
                    <label>Total Marks:</label>
                    <input
                      v-model="form.total_marks"
                      type="number"
                      class="input-decoration"
                      required
                      autocomplete="total"
                    />
                    <br />
                    <label>Quiz Weight:</label>
                    <input
                      type="number"
                      v-model="form.weight"
                      class="input-decoration"
                      required
                      autocomplete="weight"
                    />
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-primary submit-button"
                      value="Add"
                      @click="addQuiz"
                    />
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

        <!-- ADD ASSIGNMENT MODAL -->
        <div class="modal fade" id="assignmentModal" role="dialog">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Add Assignment
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <input
                      v-model="form.course_id"
                      type="text"
                      class="input-decoration"
                      required
                      hidden
                    />
                    <br />
                    <label>Title:</label>
                    <input
                      type="text"
                      v-model="form.title"
                      placeholder="Eg; Assignment 01"
                      class="input-decoration"
                      required
                      autocomplete="title"
                      autofocus
                    />
                    <br />
                    <label>Total Marks:</label>
                    <input
                      v-model="form.total_marks"
                      type="number"
                      class="input-decoration"
                      required
                      autocomplete="total"
                    />
                    <br />
                    <label>Assignment Weight:</label>
                    <input
                      type="number"
                      v-model="form.weight"
                      class="input-decoration"
                      required
                      autocomplete="weight"
                    />
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-primary submit-button"
                      value="Add"
                      @click="addAssignment"
                    />
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

        <!-- ADD PRACTICAL MODAL -->
        <div class="modal fade" id="practicalModal" role="dialog">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Add Practical
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <input
                      v-model="form.course_id"
                      type="text"
                      class="input-decoration"
                      required
                      hidden
                    />
                    <br />
                    <label>Title:</label>
                    <input
                      type="text"
                      v-model="form.title"
                      placeholder="Eg; Practical 01"
                      class="input-decoration"
                      required
                      autocomplete="title"
                      autofocus
                    />
                    <br />
                    <label>Total Marks:</label>
                    <input
                      v-model="form.total_marks"
                      type="number"
                      class="input-decoration"
                      required
                      autocomplete="total"
                    />
                    <br />
                    <label>Practical Weight:</label>
                    <input
                      type="number"
                      v-model="form.weight"
                      class="input-decoration"
                      required
                      autocomplete="weight"
                    />
                  </div>
                  <div class="modal-footer">
                    <input
                      type="submit"
                      class="btn btn-primary submit-button"
                      value="Add"
                      @click="addPractical"
                    />
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
            <tr>
              <td>
                <div v-for="(test, i) in thisCourse.tests" :key="i">
                  <button
                    @click.prevent="addToModal(test.id)"
                    class="btn btn-primary btn-sm btn-outline"
                    data-toggle="modal"
                    data-target="#testScoresModal"
                    style="margin-top:10px; margin-bottom:10px; text-align:center"
                  >
                    <b>{{test.title}}</b>
                  </button>
                </div>
              </td>
              <td>
                <div v-for="(quiz, i) in thisCourse.quizzes" :key="i">
                  <button
                    @click.prevent="addToModal(quiz.id)"
                    class="btn btn-primary btn-sm btn-outline"
                    data-toggle="modal"
                    data-target="#quizScoresModal"
                    style="margin-top:10px; margin-bottom:10px; text-align:center"
                  >
                    <b>{{quiz.title}}</b>
                  </button>
                </div>
              </td>
              <td>
                <div v-for="(assignment, i) in thisCourse.assignments" :key="i">
                  <button
                    @click.prevent="addToModal(assignment.id)"
                    class="btn btn-primary btn-sm btn-outline"
                    data-toggle="modal"
                    data-target="#assignmentScoresModal"
                    style="margin-top:10px; margin-bottom:10px; text-align:center"
                  >
                    <b>{{assignment.title}}</b>
                  </button>
                </div>
              </td>
              <td>
                <div v-for="(practical, i) in thisCourse.practicals" :key="i">
                  <button
                    @click="addToModal(practical.id)"
                    class="btn btn-primary btn-sm btn-outline"
                    data-toggle="modal"
                    data-target="#practicalScoresModal"
                    style="margin-top:10px; margin-bottom:10px; text-align:center"
                  >
                    <b>{{practical.title}}</b>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- MODALS -->

        <!-- ADD SCORES MODAL -->

        <div class="modal fade" id="testScoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <h4>Insert .xls or .xlsx file to upload scores</h4>
                  </div>
                  <div class="file-input">
                    <input
                      required
                      type="file"
                      class="form-control"
                      :class="{ ' is-invalid' : error.message }"
                      id="input-file-import"
                      name="file_import"
                      ref="import_file"
                      @change="onFileChange"
                    />
                  </div>
                  <div v-if="error.message" class="invalid-feedback"></div>

                  <div class="modal-footer">
                    <button
                      @click.prevent="uploadTestScores()"
                      type="submit"
                      class="btn btn-primary submit-button"
                    >Upload</button>
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
        <div class="modal fade" id="quizScoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <h4>Insert .xls or .xlsx file to upload scores</h4>
                  </div>
                  <div class="file-input">
                    <input
                      required
                      type="file"
                      class="form-control"
                      :class="{ ' is-invalid' : error.message }"
                      id="input-file-import"
                      name="file_import"
                      ref="import_file"
                      @change="onFileChange"
                    />
                  </div>
                  <div v-if="error.message" class="invalid-feedback"></div>

                  <div class="modal-footer">
                    <button
                      @click.prevent="uploadQuizScores()"
                      type="submit"
                      class="btn btn-primary submit-button"
                    >Upload</button>
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
        <div class="modal fade" id="assignmentScoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <h4>Insert .xls or .xlsx file to upload scores</h4>
                  </div>
                  <div class="file-input">
                    <input
                      required
                      type="file"
                      class="form-control"
                      :class="{ ' is-invalid' : error.message }"
                      id="input-file-import"
                      name="file_import"
                      ref="import_file"
                      @change="onFileChange"
                    />
                  </div>
                  <div v-if="error.message" class="invalid-feedback"></div>

                  <div class="modal-footer">
                    <button
                      @click.prevent="uploadAssignmentScores()"
                      type="submit"
                      class="btn btn-primary submit-button"
                    >Upload</button>
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
        <div class="modal fade" id="practicalScoresModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>
                  <i class="fas fa-plus"></i> Upload Scores
                </h4>
              </div>
              <form>
                <div class="form-group">
                  <div class="modal-body">
                    <h4>Insert .xls or .xlsx file to upload scores</h4>
                  </div>
                  <div class="file-input">
                    <input
                      required
                      type="file"
                      class="form-control"
                      :class="{ ' is-invalid' : error.message }"
                      id="input-file-import"
                      name="file_import"
                      ref="import_file"
                      @change="onFileChange"
                    />
                  </div>
                  <div v-if="error.message" class="invalid-feedback"></div>

                  <div class="modal-footer">
                    <button
                      @click.prevent="uploadPracticalScores()"
                      type="submit"
                      class="btn btn-primary submit-button"
                    >Upload</button>
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
        <button @click="meth()" type="button" class="btn btn-primary clear-button">Publish Coursework</button>
      </div>
    </div>
    <div class="container">
      <hr style="height:5 px; width:100%; " />
      <table class="table table-striped" id="co" style="visibility:hidden">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Registration Number</th>
            <th v-for="(test, i) in thisTest" :key="i">
              {{test.title}}/
              <span>{{test.weight}}</span>
            </th>
            <th v-for="(quiz, i) in thisQuiz" :key="i">
              {{quiz.title}}/
              <span>{{quiz.weight}}</span>
            </th>
            <th v-for="(assignment, i) in thisAssignment" :key="i">
              {{assignment.title}}/
              <span>{{assignment.weight}}</span>
            </th>
            <th v-for="(practical, i) in thisPractical" :key="i">
              {{practical.title}}/
              <span>{{practical.weight}}</span>
            </th>
            <th>
              Coursework/
              <span>40</span>
            </th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2017-04-07374</td>
            <td
              v-for="(test, i) in thisTest"
              :key="i"
            >{{testScore[0].scored_marks/test.total_marks*test.weight}}</td>
            <td
              v-for="(quiz, i) in thisQuiz"
              :key="i"
            >{{quizScore[0].scored_marks/quiz.total_marks*quiz.weight}}</td>
            <td
              v-for="(assignment, i) in thisAssignment"
              :key="i"
            >{{assignmentScore[0].scored_marks/assignment.total_marks*assignment.weight}}</td>
            <!-- <td
              v-for="(practical, i) in thisPractical"
              :key="i"
            >{{practicalScore[0].scored_marks/practical.total_marks*practical.weight}}</td>
            <td>-->
            <td>
              <b>{{cw1}}</b>
            </td>
            <td>{{this.rem1}}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2017-04-07379</td>
            <td
              v-for="(test, i) in thisTest"
              :key="i"
            >{{testScore[1].scored_marks/test.total_marks*test.weight}}</td>
            <td
              v-for="(quiz, i) in thisQuiz"
              :key="i"
            >{{quizScore[1].scored_marks/quiz.total_marks*quiz.weight}}</td>
            <td
              v-for="(assignment, i) in thisAssignment"
              :key="i"
            >{{assignmentScore[1].scored_marks/assignment.total_marks*assignment.weight}}</td>
            <!-- <td
              v-for="(practical, i) in thisPractical"
              :key="i"
            >{{practicalScore[0].scored_marks/practical.total_marks*practical.weight}}</td>
            <td>-->
            <td>
              <b>{{cw2}}</b>
            </td>
            <td>{{this.rem2}}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2017-04-07355</td>
            <td
              v-for="(test, i) in thisTest"
              :key="i"
            >{{testScore[2].scored_marks/test.total_marks*test.weight}}</td>
            <td
              v-for="(quiz, i) in thisQuiz"
              :key="i"
            >{{quizScore[2].scored_marks/quiz.total_marks*quiz.weight}}</td>
            <td
              v-for="(assignment, i) in thisAssignment"
              :key="i"
            >{{assignmentScore[2].scored_marks/assignment.total_marks*assignment.weight}}</td>
            <!-- <td
              v-for="(practical, i) in thisPractical"
              :key="i"
            >{{practicalScore[0].scored_marks/practical.total_marks*practical.weight}}</td>
            <td>-->
            <td>
              <b>{{cw3}}</b>
            </td>
            <td>{{this.rem3}}</td>
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
import { ApiService } from "@/services/api.service.js";
import axios from "axios";
import router from "../router/index";

export default {
  data() {
    return {
      error: {},
      thisCourse: {},
      cw1: null,
      rem1: "",
      cw2: null,
      rem2: "",
      cw3: null,
      rem3: "",
      thisTest: [],
      testScore: [],
      thisQuiz: [],
      quizScore: [],
      thisAssignment: [],
      assignmentScore: [],
      thisPractical: [],
      practicalScore: [],
      import_file: "",
      scorableId: null,
      form: {
        title: "",
        weight: null,
        total_marks: null,
      },
    };
  },
   mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));

    const { course } = router.currentRoute.params;
    this.thisCourse = course;

    this.thisCourse.tests.forEach((test) => {
      this.thisTest.push(test);

      test.scores.forEach((score) => {
        this.testScore.push(score);
      });
    });
    console.log(this.practicalScore);

    this.thisCourse.practicals.forEach((practical) => {
      this.thisPractical.push(practical);

      practical.scores.forEach((score) => {
        this.practicalScore.push(score);
      });
    });
    console.log(this.quizScore);
    this.thisCourse.quizzes.forEach((quiz) => {
      this.thisQuiz.push(quiz);

      quiz.scores.forEach((score) => {
        this.quizScore.push(score);
      });
    });
    console.log(this.assignmentScore);

    this.thisCourse.assignments.forEach((assignment) => {
      this.thisAssignment.push(assignment);

      assignment.scores.forEach((score) => {
        this.assignmentScore.push(score);
      });
    });

    console.log(this.thisAssignment[0].total_marks);
    console.log("hjkk");

    this.cwa();
    this.cwb();
    this.cwc();
  },
  methods: {
    meth(){
      const el=document.getElementById('co')
      el.style.visibility='visible'

      console.log(el)
    },
    onFileChange(e) {
      this.import_file = e.target.files[0];
      console.log(this.import_file);
    },
    addToModal(selectedId) {
      this.scorableId = selectedId;
      console.log(selectedId);
    },
    uploadTestScores() {
      const fd1 = new FormData();
      console.log(this.scorableId);
      fd1.append("import_file", this.import_file);
      ApiService.post(`testScore/${this.scorableId}`, fd1)
        .then((response) => {
          console.log(response.data);
          alert("Test Scores uploaded successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    uploadQuizScores() {
      const fd2 = new FormData();
      console.log(this.scorableId);
      fd2.append("import_file", this.import_file);
      axios
        .post(`quizScore/${this.scorableId}`, fd2)
        .then((response) => {
          console.log(response.data);
          alert("Quiz Scores uploaded successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    uploadAssignmentScores() {
      const fd3 = new FormData();
      console.log(this.scorableId);
      fd3.append("import_file", this.import_file);
      ApiService.post(`assignmentScore/${this.scorableId}`, fd3)
        .then((response) => {
          console.log(response.data);
          alert("Assignment Scores uploaded successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    uploadPracticalScores() {
      const fd4 = new FormData();
      console.log(this.scorableId);
      fd4.append("import_file", this.import_file);
      ApiService.post(`practicalScore/${this.scorableId}`, fd4)
        .then((response) => {
          console.log(response.data);
          alert("Practical Scores uploaded successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    addTest() {
      const fd = new FormData();
      fd.append("title", this.form.title);
      fd.append("total_marks", this.form.total_marks);
      fd.append("weight", this.form.weight);
      console.log(this.testId);
      ApiService.post(`test/${this.thisCourse.id}`, fd)
        .then((response) => {
          console.log(response.data);
          alert("Test added successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addQuiz() {
      const fd = new FormData();
      fd.append("title", this.form.title);
      fd.append("total_marks", this.form.total_marks);
      fd.append("weight", this.form.weight);
      ApiService.post(`quiz/${this.thisCourse.id}`, fd)
        .then((response) => {
          console.log(response.data);
          alert("Quiz added successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addAssignment() {
      const fd = new FormData();
      fd.append("title", this.form.title);
      fd.append("total_marks", this.form.total_marks);
      fd.append("weight", this.form.weight);
      ApiService.post(`assignment/${this.thisCourse.id}`, fd)
        .then((response) => {
          console.log(response.data);
          alert("Assignment added successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addPractical() {
      const fd = new FormData();
      fd.append("title", this.form.title);
      fd.append("total_marks", this.form.total_marks);
      fd.append("weight", this.form.weight);
      ApiService.post(`practical/${this.thisCourse.id}`, fd)
        .then((response) => {
          console.log(response.data);
          alert("Practical added successfully");
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    cwa() {
      // this.cw=2
      this.cw1 =
        (this.testScore[0].scored_marks / this.thisTest[0].total_marks) *
          this.thisTest[0].weight +
        (this.quizScore[0].scored_marks / this.thisQuiz[0].total_marks) *
          this.thisQuiz[0].weight +
        (this.testScore[0].scored_marks / this.thisAssignment[0].total_marks) *
          this.thisAssignment[0].weight;

      // +(this.practicalScore[0].scored_marks /
      // this.thisPractical[0].total_marks) *
      // this.thisPractical[0].weight

      if (this.cw1 >= 16) {
        return (this.rem1 = "Passed");
      } else return (this.rem1 = "Carry over");
    },
    cwb() {
      this.cw2 =
        (this.testScore[1].scored_marks / this.thisTest[0].total_marks) *
          this.thisTest[0].weight +
        (this.quizScore[1].scored_marks / this.thisQuiz[0].total_marks) *
          this.thisQuiz[0].weight +
        (this.testScore[1].scored_marks / this.thisAssignment[0].total_marks) *
          this.thisAssignment[0].weight;

      // +(this.practicalScore[0].scored_marks /
      // this.thisPractical[0].total_marks) *
      // this.thisPractical[0].weight

      if (this.cw2 >= 16) {
        return (this.rem2 = "Passed");
      } else return (this.rem2 = "Carry over");
    },
    cwc() {
      this.cw3 =
        (this.testScore[2].scored_marks / this.thisTest[0].total_marks) *
          this.thisTest[0].weight +
        (this.quizScore[2].scored_marks / this.thisQuiz[0].total_marks) *
          this.thisQuiz[0].weight +
        (this.testScore[2].scored_marks / this.thisAssignment[0].total_marks) *
          this.thisAssignment[0].weight;

      // +(this.practicalScore[0].scored_marks /
      // this.thisPractical[0].total_marks) *
      // this.thisPractical[0].weight

      if (this.cw3 >= 16) {
        return (this.rem3 = "Passed");
      } else return (this.rem3 = "Carry over");
    },
  },
 
};
</script>
