<template>
  <div>
    <Header />
    <div class="main-section">
      <Sidebar />
      <Main />
    </div>
  </div>
</template>

<style scoped>
.main-section {
  display: flex;
  height: 90vh;
}
</style>

<script>
import Sidebar from "@/components/sections/sidebar.vue";
import Header from "@/components/sections/header.vue";
import Main from "@/components/sections/main.vue";

export default {
  components: {
    Header,
    Sidebar,
    Main,
  },
};
</script>

