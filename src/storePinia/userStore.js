import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('userStore', {
  // 1. Core global reactive state
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),

  // 2. Asynchronous action handlers
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      
      try {
        // Axios handles HTTP errors (4xx/5xx) and JSON parsing automatically
        const baseURL = import.meta.env.VITE_API_URL || 'https://dummyjson.com'
        const response = await axios.get(`${baseURL}/products`)
        
        // Save the direct parsed data array to state
        this.products = response.data.products
      } catch (err) {
        // Captures network dropouts, timeouts, and bad server responses natively
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
})
