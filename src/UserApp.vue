<script setup>
// Ensure the import sits on the absolute first line of your script block
import UserPage from './views/UserPage.vue'
</script>

<template>
  <div id="user-application-root">
    <h1>Welcome to the User Dashboard</h1>
    
    <!-- Render the component -->
    <UserPage />
  </div>
</template>

<style scoped>
#user-application-root {
  font-family: sans-serif;
  padding: 20px;
}
</style>
