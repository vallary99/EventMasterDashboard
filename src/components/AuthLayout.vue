<template>
  <div class="auth-container">
    <div class="main-content">
      <!-- Main content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.auth-container {
  display: flex;
  height: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
