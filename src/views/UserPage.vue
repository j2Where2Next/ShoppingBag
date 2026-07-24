<template>
  <div class="page-wrapper">
    <h2>DummyJSON Product Explorer</h2>
    
    <button @click="userStore.fetchUsers()" class="fetch-btn" :disabled="loading">
      {{ loading ? 'Syncing...' : 'Refresh Inventory' }}
    </button>

    <!-- 1. The Dynamic Loading Spinner Component Block -->
    <div v-if="loading" class="spinner-container">
      <div class="loading-spinner"></div>
      <p class="status-text">Communicating with the API...</p>
    </div>

    <p v-if="error" style="color: red;" class="status-text">Error: {{ error }}</p>

    <!-- 2. The Data Loop Display (hidden during loading transitions) -->
    <ul v-if="!loading && products && products.length > 0" class="product-list">
      <li v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.thumbnail" alt="Product thumbnail" class="product-thumb" />
        <div class="product-info">
          <strong>{{ product.title }}</strong> 
          <p class="product-desc">{{ product.description }}</p>
          <span class="product-price">${{ product.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../storePinia/userStore'

const userStore = useUserStore()
const { products, loading, error } = storeToRefs(userStore)

onMounted(() => {
  userStore.fetchUsers()
})
</script>

<style scoped>
.page-wrapper {
  padding: 10px;
}
.fetch-btn {
  background-color: #35495e;
  color: #41b883;
  border: 2px solid #41b883;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}
.fetch-btn:hover:not(:disabled) {
  background-color: #41b883;
  color: white;
}
.fetch-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* --- Spinner Component Styles --- */
.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3; /* Light grey base circle */
  border-top: 4px solid #41b883; /* Vue Green moving segment */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Smooth rotating loop */
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.status-text {
  margin-top: 15px;
  font-style: italic;
  color: #666;
}
.product-list {
  margin-top: 15px;
  padding-left: 0;
  list-style-type: none;
}
.product-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #fdfdfd;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 10px;
}
.product-thumb {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
  background: #f0f0f0;
}
.product-info {
  display: flex;
  flex-direction: column;
}
.product-desc {
  margin: 4px 0;
  font-size: 13px;
  color: #555;
}
.product-price {
  font-weight: bold;
  color: #2c3e50;
}
</style>
