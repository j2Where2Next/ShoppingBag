import { defineStore } from 'pinia'

export const useBagStore = defineStore('bag', {
  state: () => ({
    productsInBag: []
  }),
  
  actions: {
    loadBag() {
      const savedBag = localStorage.getItem("productsInBag")
      if (savedBag) {
        this.productsInBag = JSON.parse(savedBag)
      }
    },
    
    addToBag(product) {
      this.productsInBag.push(product)
      localStorage.setItem("productsInBag", JSON.stringify(this.productsInBag))
    },
    
    removeFromBag(productId) {
      if (confirm('Are you sure you want to remove the item from bag?')) {
        this.productsInBag = this.productsInBag.filter(item => productId !== item.id)
        localStorage.setItem("productsInBag", JSON.stringify(this.productsInBag))
      }
    }
  }
})