<template>
  <div class="row">
    <!-- filters -->
    <div class="row">
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
    </div>
    <!-- filters -->
    <div class="ctr">
      <div class="row">
        <ul class="cats">
          <li
            v-for="category in searchCategories"
            :key="category.id"
            class="cat"
          >
            <nuxt-link :to="'/categories/' + category.id +'/' + category.slug">
              <div class="row cat__thumb">
                <img :src="api_url + category.thumbnail.url" :alt="category.slug" :title="category.name">
              </div>
              <span class="cat__title">{{ category.name }} Lamps</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import apolloQuery from '~/apollo/queries/category/categories'
export default {
  // reactive data
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      categories: [],
      searchInput: ''
    }
  },
  // apollo query
  apollo: {
    categories: {
      prefetch: true,
      query: apolloQuery
    }
  },
  // computed properties / maths functions
  computed: {
    // search results
    searchCategories () {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    }
  },
  // methods / non maths functions
  methods: {
    // sort by name
    sortNames () {
      this.categories = _.orderBy(this.categories, ['name'], ['asc'])
    },
    // sort by id
    sortId () {
      this.categories = _.orderBy(this.categories, ['id'], ['asc'])
    }
  }
}
</script>
<!-- Styles in CategoriesSimple.vue -->
