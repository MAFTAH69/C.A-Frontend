<template>
  <div>
    <div id="coursework">
      <div class="main-content">
        <h3>
          <b>Select Course</b>
        </h3>

        <button class=" btn btn-outline btn-lg " @click="viewCoursework()">IS 352: Computer Networks</button><br><br>
        <button class="btn btn-outline btn-lg " @click="viewCoursework()">IS 322: Introduction to Object Oriented Programming</button><br><br>
        <button class="btn btn-outline btn-lg " @click="viewCoursework()">IS 252: Managemebt of Software Project</button><br><br>
        <button class="btn btn-outline btn-lg " @click="viewCoursework()">IS 318: Database Management</button><br><br>
        <button class="btn btn-outline btn-lg " @click="viewCoursework()">CS 385: Artificial Intelligence</button><br><br>
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
.course-button{
    border-radius: 5px;
    padding: 5px;
}
</style>

<script>
export default {
   methods:{
        viewCoursework(){
            this.$router.push({path:'upload_coursework'})
        }
    }
}
</script>