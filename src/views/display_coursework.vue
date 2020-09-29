<template>
  <div>
    <div id="coursework">
      <div class>
        <h4>
          Your Coursework Assessment For
          <b>{{thisCourse.code}}: {{thisCourse.title}}</b>
        </h4>
        <br />
        <table class="table">
          <tr>
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
          <tr>
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
            <td
              v-for="(practical, i) in thisPractical"
              :key="i"
            >{{practicalScore[0].scored_marks/practical.total_marks*practical.weight}}</td>
            <td>
              <b>{{cw}}</b>
            </td>
            <td>{{this.rem}}</td>
          </tr>
        </table>
      </div>
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
span {
  font-size: 18px;
  color: rgb(13, 125, 204);
}
tr,
td,
th {
  border: 1px solid #333;
  padding: 5px;
  font-size: 18px;
}
</style>



<script>
import router from "../router/index";

export default {
  data() {
    return {
      thisCourse: {},
      cw: null,
      rem: "",
      thisTest: [],
      testScore: [],
      thisQuiz: [],
      quizScore: [],
      thisAssignment: [],
      assignmentScore: [],
      thisPractical: [],
      practicalScore: [],
    };
  },

  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));

    const { course } = router.currentRoute.params;
    this.thisCourse = course;

    this.thisCourse.tests.forEach((test) => {
      this.thisTest.push(test);

      test.scores.forEach((score) => {
        if (score.reg_number == this.thisUser.reg_number) {
          this.testScore.push(score);
        }
      });
    });
    console.log(this.practicalScore);

    this.thisCourse.practicals.forEach((practical) => {
      this.thisPractical.push(practical);

      practical.scores.forEach((score) => {
        if (score.reg_number == this.thisUser.reg_number) {
          this.practicalScore.push(score);
        }
      });
    });
    console.log(this.quizScore);
    this.thisCourse.quizzes.forEach((quiz) => {
      this.thisQuiz.push(quiz);

      quiz.scores.forEach((score) => {
        if (score.reg_number == this.thisUser.reg_number) {
          this.quizScore.push(score);
        }
      });
    });
    console.log(this.assignmentScore);

    this.thisCourse.assignments.forEach((assignment) => {
      this.thisAssignment.push(assignment);

      assignment.scores.forEach((score) => {
        if (score.reg_number == this.thisUser.reg_number) {
          this.assignmentScore.push(score);
        }
      });
    });

    console.log(this.thisAssignment[0].total_marks);
    console.log("hjkk");

    this.cws();
  },
  methods: {
    cws() {
      // this.cw=2
      this.cw =
        (this.testScore[0].scored_marks / this.thisTest[0].total_marks) *
          this.thisTest[0].weight +
        (this.quizScore[0].scored_marks / this.thisQuiz[0].total_marks) *
          this.thisQuiz[0].weight +
        (this.testScore[0].scored_marks / this.thisAssignment[0].total_marks) *
          this.thisAssignment[0].weight;

      // +(this.practicalScore[0].scored_marks /
      // this.thisPractical[0].total_marks) *
      // this.thisPractical[0].weight

      if (this.cw >= 16) {
       return this.rem = "Passed";
      } else return this.rem = "Carry over";
    },
  },
};
</script>