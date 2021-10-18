<template>
  <div class="row">
    <!-- grid -->
    <div class="row">
      <div class="ctr">
        <h1>{{ category.name }}</h1>
        <!-- crumbs-->
        <ul class="breadcrumbs">
          <li>
            <nuxt-link to="/">
              Home /&nbsp;
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/categories/">
              Categories /&nbsp;
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/categories/'+ category.id +'/' + category.slug">
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
        <!-- crumbs-->

        <!-- products -->
        <ul class="row products">
          <li
            v-for="product in category.products"
            :key="product.id"
            class="product"
          >
            <nuxt-link :to="'/products/' + product.id +'/' + product.slug">
              <img :src="api_url + product.thumbnail.url" alt="product.slug" title="product.title">
              <div class="product__info">
                <span class="product__title">{{ product.title }}</span>
                <!-- if onsale = false -->
                <div v-if="!product.onsale" class="row">
                  <span class="product__price">RRP £{{ product.price }}</span>
                </div>
                <!-- -->
                <!-- if onsale = true -->
                <div v-if="product.onsale" class="row onsale">
                  <span class="product__price">RRP £{{ product.price }}</span>
                </div>
                <div v-if="product.onsale" class="row">
                  <span class="product__sale-price">OUR PRICE: £{{ product.saleprice }}</span>
                </div>
                <!-- -->
              </div>
            </nuxt-link>
          </li>
        </ul>
        <!-- products -->
      </div>
    </div>
    <!-- grid -->
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/category'
export default {
  data () {
    return {
      category: {},
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
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
}
</script>
<style scoped>
.info {
  font-size: 200%;
}
</style>
