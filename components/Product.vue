<template>
  <div class="row">
    <div class="ctr">
      <div class="single">
        <div class="single__thumb">
          <img :src="api_url + product.hero.url" :alt="product.slug" :title="product.title">
        </div>
        <div class="single__content">
          <h1>{{ product.title }}</h1>
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
              <nuxt-link :to="'/categories/'+ product.category.id +'/' + product.category.slug">
                {{ product.category.name }} /&nbsp;
              </nuxt-link>
            </li>
            <!--<li>
              <nuxt-link to="/products/">
                Products /&nbsp;
              </nuxt-link>
            </li>-->
            <li>{{ product.title }}</li>
          </ul>
          <p>{{ product.description }}</p>
          <!-- if onsale = false -->
          <div v-if="!product.onsale" class="row">
            <span class="single__price">RRP £{{ product.price }}</span>
          </div>
          <!-- -->
          <!-- if onsale = true -->
          <div v-if="product.onsale" class="row onsale">
            <span class="single__price">RRP £{{ product.price }}</span>
          </div>
          <div v-if="product.onsale" class="row">
            <span class="single__sale-price">OUR PRICE: £{{ product.saleprice }}</span>
          </div>
          <!-- -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productQuery from '~/apollo/queries/product/product'
export default {
  data () {
    return {
      product: {},
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: productQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style scoped>
.single {
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  gap: 4rem;
  grid-auto-flow: row;
  grid-template-areas:
    "single__thumb single__content";
  padding: 4rem 0;
}

.single__thumb {
  grid-area: single__thumb;
}

.single__content {
  grid-area: single__content;
}

.single > div {
  padding: 0 0.5em 0.5em 0;
}

.single__content h1 {
  display: block;
  color: var(--black);
  font-size: 1.7rem;
  font-family:Georgia, 'Times New Roman', Times, serif;
  text-align: left;
  margin: 0 0 1rem 0;
}
.single__content p {
  margin: 0 0 1rem 0;
}
.single__price,
.single__sale-price {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
.onsale > .single__price {
  text-decoration: line-through;
}
.single__sale-price {
  color: var(--primary);
}
@media only screen and (min-width: 1024px) {
  .single__content p {
    padding: 0 33% 0 0;
    line-height: 1.5rem;
  }
}
</style>
