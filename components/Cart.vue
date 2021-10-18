<template>
  <div class="row">
    <div v-if="price > 0">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (unit)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in selectedProducts" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}€</td>
            <td>{{ product.quantity }}</td>
            <td>
              <div class="row">
                <span @click="addToCart(product)">+</span>
              </div>
              <div class="row">
                <span @click="removeFromCart(product)">-</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button name="button">
        Proceed to checkout ({{ price }}£)
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    id () {
      return this.$route.params.id
    },
    selectedProducts () {
      return this.$store.getters['cart/items']
    },
    price () {
      return this.$store.getters['cart/price']
    },
    numberOfItems () {
      return this.$store.getters['cart/numberOfItems']
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>
