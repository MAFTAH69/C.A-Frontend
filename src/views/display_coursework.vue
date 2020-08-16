<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <h4>Your Coursework Assessment For IS 352: Computer Networks:</h4>
        <br />
        <table class="table">
          <tr>
            <th>Test 1</th>
            <th>Test 2</th>
            <th>Quiz</th>
            <th>Assignments</th>
            <th>Course work</th>
          </tr>
          <tr>
            <td>08</td>
            <td>07</td>
            <td>03</td>
            <td>06</td>
            <td>24</td>
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
/* .main-content { */
/* flex: 0 0 60%; */
/* } */
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
}
</style>


// <script>
// import Vue from "vue";
// export default Vue.extend({

  
// });
// </script>

<script>
export default {
  
}
</script>