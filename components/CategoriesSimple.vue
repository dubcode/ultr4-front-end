<template>
  <div class="row cats-wrapper">
    <div class="ctr">
      <h2 class="title">
        Tiffany Collections
      </h2>
      <div class="cat__intro">
        <p>Tiffany Lamps are the epitome of Art Nouveau elegance, and will add style, class and colour to any interior. All of these Tiffany Lamps can be used with energy saving LED lamps bulbs and you can also buy the perfect bulbs for your lamp when you add to cart. </p>
      </div>
      <div class="row">
        <!-- cats -->
        <ul class="cats">
          <li
            v-for="cat in categories"
            :key="cat.id"
            class="cat"
          >
            <nuxt-link :to="'/categories/' + cat.id +'/' + cat.slug">
              <div class="row cat__thumb">
                <img :src="api_url + cat.thumbnail.url" :alt="cat.slug" :title="cat.name">
              </div>
              <span class="cat__title">{{ cat.name }} Lamps</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import apolloQuery from '~/apollo/queries/category/categories'
export default {
  // reactive data
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      categories: []
    }
  },
  // apollo query
  apollo: {
    categories: {
      prefetch: true,
      query: apolloQuery
    }
  }
}
</script>
<style>
.cat__intro {
  display: block;
  color: var(--black);
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0 0 4rem 0;
  text-align: center;
  width: 100%;
}
.cats-wrapper {
  background: #f8f8f8;
  padding: 4rem 0;
}
.cats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px 0px;
  width: 100%;
}

.cats li {
  padding: 0 0.5em 0.5em 0;
  opacity: 0;
  transition: opacity 0.2s;
  list-style-type: none;
}

.cats li a {
  color: #222;
  display: block;
  float: left;
  text-decoration: none;
  width: 100%;
}

.cat__thumb {
  background: #fff;
  padding: 2rem;
  margin: 0 0 2rem 0;
  mix-blend-mode: multiply;
}
.cat__title {
  display: block;
  color: var(--black);
  font-size: 1.7rem;
  margin: 0;
  text-align: center;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.--active .cats li {
  opacity: 1;
}
.--active .cats li:nth-child(1) {
  transition-delay: 0.05s;
}
.--active .cats li:nth-child(2) {
  transition-delay: 0.1s;
}
.--active .cats li:nth-child(3) {
  transition-delay: 0.15s;
}
.--active .cats li:nth-child(4) {
  transition-delay: 0.2s;
}
.--active .cats li:nth-child(5) {
  transition-delay: 0.25s;
}
.--active .cats li:nth-child(6) {
  transition-delay: 0.3s;
}
.--active .cats li:nth-child(7) {
  transition-delay: 0.35s;
}
.--active .cats li:nth-child(8) {
  transition-delay: 0.4s;
}
.--active .cats li:nth-child(9) {
  transition-delay: 0.45s;
}
.--active .cats li:nth-child(10) {
  transition-delay: 0.5s;
}
.--active .cats li:nth-child(11) {
  transition-delay: 0.55s;
}
.--active .cats li:nth-child(12) {
  transition-delay: 0.6s;
}

@media only screen and (min-width: 768px) {
  .cats {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
  .cat__intro {
    padding: 0 15%;
  }
}

@media only screen and (min-width: 1200px) {
  .cats {
    gap: 4rem;
  }
}

@media only screen and (min-width: 1400px) {
  .cats {
    gap: 8rem;
  }
}

</style>
