<template>
  <div class="row">
    <Product />
    <CategoriesSimple />
    <Cart />
    <button class="uk-button uk-button-primary" @click="addToCart(dish)">
      Add to cart
    </button>
    <!--<Products />-->
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {

  mounted () {
    // set body class .active on load
    setTimeout(() => this.activeClass('addClass', '--active'), 500)
  },

  // remove body class .active on destroyed
  destroyed () {
    this.activeClass('removeClass', '--active')
  },

  // methods - start
  methods: {
    // mutations
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    }),
    // set active class
    activeClass (addRemoveClass, className) {
      const el = document.body
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }

  }
  // methods - end
}
</script>
