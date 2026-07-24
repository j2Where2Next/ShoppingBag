<template>
  <div class="page-wrapper">
    <h2>DummyJSON Product Explorer</h2>
    
    <!-- You can keep the button as a manual manual reload if you like -->
    <button @click="userStore.fetchUsers()" class="fetch-btn">
      Refresh Inventory
    </button>

    <p v-if="userStore.loading" class="status-text">Fetching data from DummyJSON...</p>
    <p v-if="userStore.error" style="color: red;" class="status-text">
      Error: {{ userStore.error }}
    </p>

    <ul v-if="userStore.products && userStore.products?.length > 0" class="product-list">
      <li v-for="product in userStore.products" :key="product.id" class="product-card">
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
import { onMounted } from 'vue' // 1. Import the lifecycle hook
import { useUserStore } from '../storePinia/userStore'

const userStore = useUserStore()

// 2. Automatically pull data from Pinia immediately when page loads or refreshes
onMounted(() => {
  userStore.fetchUsers()
})
</script>
