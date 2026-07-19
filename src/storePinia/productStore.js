import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  
  actions: {
    async loadProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // Direct assignment replaces the Vuex mutation!
        this.products = response.data 
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }
  }
})