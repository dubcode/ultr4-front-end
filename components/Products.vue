<template>
  <div class="row">
    <!-- filters -->
    <div class="filters">
      <div class="ctr">
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search by Name"
        >
        <button @click="sortNames">
          Sort by Names
        </button>
        <button @click="sortId">
          Sort by ID
        </button>
      </div>
    </div>
    <!-- filters -->

    <div class="row">
      <h1 class="title">
        Luxurious Lighting
      </h1>
    </div>

    <!-- grid -->
    <div class="row">
      <div class="ctr">
        <ul class="row products">
          <li
            v-for="product in searchProducts"
            :key="product.id"
            class="product"
          >
            <div class="row">
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
                <span class="product__category">Category: {{ product.category.name }}</span>
                <div class="row buttons">
                  <!--
                  <button class="button__add">
                    Add to Basket
                  </button>
                  -->
                  <nuxt-link :to="'/products/' + product.id +'/' + product.slug">
                    <button class="button__view">
                      View Product
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- grid -->
  </div>
</template>

<script>
import _ from 'lodash'
import apolloQuery from '~/apollo/queries/product/products'
export default {
  // reactive data
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      products: [],
      searchInput: ''
    }
  },
  // apollo query
  apollo: {
    products: {
      prefetch: true,
      query: apolloQuery
    }
  },
  // computed properties / maths functions
  computed: {
    // search results
    searchProducts () {
      return this.products.filter((product) => {
        return product.title.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    }
  },
  // methods / non maths functions
  methods: {
    // sort by title
    sortNames () {
      this.products = _.orderBy(this.products, ['title'], ['asc'])
    },
    // sort by id
    sortId () {
      this.products = _.orderBy(this.products, ['id'], ['asc'])
    }
  }
}
</script>
<style>
.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0 0 0.5em 0;
  width: 100%;
}

.products li {
  border: 1px solid var(--black);
  list-style-type: none;
  margin: 0;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.products li img {
  margin: 0 0 1rem 0;
}

.products li a {
  color: var(--black);
  text-decoration: none;
}

.--active .products li {
  opacity: 1;
}
.--active .products li:nth-child(1) {
  transition-delay: 0.05s;
}
.--active .products li:nth-child(2) {
  transition-delay: 0.1s;
}
.--active .products li:nth-child(3) {
  transition-delay: 0.15s;
}
.--active .products li:nth-child(4) {
  transition-delay: 0.2s;
}
.--active .products li:nth-child(5) {
  transition-delay: 0.25s;
}
.--active .products li:nth-child(6) {
  transition-delay: 0.3s;
}
.--active .products li:nth-child(7) {
  transition-delay: 0.35s;
}
.--active .products li:nth-child(8) {
  transition-delay: 0.4s;
}
.--active .products li:nth-child(9) {
  transition-delay: 0.45s;
}
.--active .products li:nth-child(10) {
  transition-delay: 0.5s;
}
.--active .products li:nth-child(11) {
  transition-delay: 0.55s;
}
.--active .products li:nth-child(12) {
  transition-delay: 0.6s;
}
.--active .products li:nth-child(13) {
  transition-delay: 0.65s;
}
.--active .products li:nth-child(14) {
  transition-delay: 0.7s;
}
.--active .products li:nth-child(15) {
  transition-delay: 0.75s;
}
.--active .products li:nth-child(16) {
  transition-delay: 0.8s;
}
.--active .products li:nth-child(17) {
  transition-delay: 0.85s;
}
.--active .products li:nth-child(18) {
  transition-delay: 0.9s;
}
.--active .products li:nth-child(19) {
  transition-delay: 0.95s;
}
.--active .products li:nth-child(20) {
  transition-delay: 1s;
}
.--active .products li:nth-child(21) {
  transition-delay: 1.05s;
}
.--active .products li:nth-child(22) {
  transition-delay: 1.1s;
}
.--active .products li:nth-child(23) {
  transition-delay: 1.15s;
}
.--active .products li:nth-child(24) {
  transition-delay: 1.2s;
}
.--active .products li:nth-child(25) {
  transition-delay: 1.25s;
}
.--active .products li:nth-child(26) {
  transition-delay: 1.3s;
}
.--active .products li:nth-child(27) {
  transition-delay: 1.35s;
}
.--active .products li:nth-child(28) {
  transition-delay: 1.4s;
}
.--active .products li:nth-child(29) {
  transition-delay: 1.45s;
}
.--active .products li:nth-child(30) {
  transition-delay: 1.5s;
}
.--active .products li:nth-child(31) {
  transition-delay: 1.55s;
}
.--active .products li:nth-child(32) {
  transition-delay: 1.6s;
}
.--active .products li:nth-child(33) {
  transition-delay: 1.65s;
}
.--active .products li:nth-child(34) {
  transition-delay: 1.7s;
}
.--active .products li:nth-child(35) {
  transition-delay: 1.75s;
}
.--active .products li:nth-child(36) {
  transition-delay: 1.8s;
}
.--active .products li:nth-child(37) {
  transition-delay: 1.85s;
}
.--active .products li:nth-child(38) {
  transition-delay: 1.9s;
}
.--active .products li:nth-child(39) {
  transition-delay: 1.95s;
}
.--active .products li:nth-child(40) {
  transition-delay: 2s;
}

.product__info {
  font-size: 70%;
}

.product__title {
  display: block;
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.product__price,
.product__sale-price {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
.onsale > .product__price {
  text-decoration: line-through;
}
.product__sale-price {
  color: var(--primary);
}

.filters {
  margin: 0 0 2rem 0;
  padding: 1rem 0;
}
.filters input,
.filters button {
  height: 36px;
  padding: 0 1rem;
  outline: 0;
  border: 1px solid var(--black);
  color: var(--grey);
  background: rgba(255,255,255,0.1);
  font-size: 0.8rem;
  text-transform: uppercase;
}
button:hover {
  cursor: pointer;
}
.filters input::placeholder {
  color: var(--grey);
  opacity: 1;
}

.filters input:-ms-input-placeholder {
  color: var(--grey);
}

.filters input::-ms-input-placeholder {
  color: var(--grey);
}

.buttons {
  padding: 1rem 0 0 0;
}
.buttons button {
  background: var(--black);
  border: 1px solid var(--black);
  color: var(--light);
  outline: 0;
  padding: 1rem;
}
@media only screen and (min-width: 768px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 1024px) {
  .products {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 1200px) {
  .products {
    gap: 2rem;
  }
}

</style>
