import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  
  actions: {
    async loadProducts() {
      try {
        const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://fakestoreapi.com'
        const response = await axios.get(`${baseURL}/products`)
        // Direct assignment replaces the Vuex mutation!
        this.products = response.data 
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }
  }
})
