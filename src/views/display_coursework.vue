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
            <th v-for="(test, i) in thisCourse.tests" :key="i">
              {{test.title}}/
              <span>{{test.weight}}</span>
            </th>
            <th v-for="(quiz, i) in thisCourse.quizzes" :key="i">
              {{quiz.title}}/
              <span>{{quiz.weight}}</span>
            </th>
            <th v-for="(assignment, i) in thisCourse.assignments" :key="i">
              {{assignment.title}}/
              <span>{{assignment.weight}}</span>
            </th>
            <th v-for="(practical, i) in thisCourse.practicals" :key="i">
              {{practical.title}}/
              <span>{{practical.weight}}</span>
            </th>
            <th>
              Coursework/
              <span>40</span>
            </th>
            <th>Remark</th>
          </tr>
          <tr v-for="(test, index) in thisUser.tests" :key="index">
            <td >het {{test}}</td> 
             <td>07</td>
            <td>03</td>
            <td>06</td> 
           <td></td> 
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
      newCourse:{}
    };
  },

  mounted() {
    this.thisUser = JSON.parse(localStorage.getItem("auth_user"));

    const { course } = router.currentRoute.params;
    this.thisCourse = course;

    console.log(this.thisCourse.tests[0].scores);

    // this.thisCourse.test
    // if(this.newCourse.id==this.thisCourse.id)
    // console.log('ni kweli')
  },
};
</script>