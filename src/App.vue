<template>
  <div class="container">
    <div class="sidebar">
      <!-- Sidebar content -->
      <SideBar
        v-if="
          $route.path !== '/' &&
          $route.path !== '/register' &&
          $route.path !== '/reset-password' &&
          $route.path !== '/forgot-password'
        "
      />
    </div>
    <div class="main-content">
      <!-- Main content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
// import { useRoute } from "vue-router";

export default {
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
  margin: 0;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.sidebar {
  flex: 0 0;
}
</style>
