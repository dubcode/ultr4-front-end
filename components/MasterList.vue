<template>
  <div class="row">
    <div class="ctr">
      <div class="grid__wrapper">
        <!-- filters -->
        <div class="row filters">
          <input
            v-model="searchInput"
            type="text"
            placeholder="Search by Name"
          >
          <button @click="sortNames">
            Sort by Names
          </button>
          <button @click="sortSymbols">
            Sort by Initials
          </button>
          <button @click="sortId">
            Sort by ID
          </button>
        </div>
        <!-- grid -->
        <div class="row grid">
          <div
            v-for="post in searchPosts.slice(firstPage, firstPage + lastPages)"
            :key="post.id"
            class="grid__item"
          >
            <nuxt-link :to="'/posts/'+ post.id +'/' + post.slug">
              <span>{{ post.id }}</span>
              <h1>{{ post.symbol }}</h1>
              <h3>{{ post.name }}</h3>
            </nuxt-link>
          </div>
        </div>
        <!-- pagination -->
        <ul class="row pagination">
          <li
            :class="{'disabled': (currentPage === 1)}"
            @click.prevent="setPage(currentPage-1)"
          >
            <span>
              Prev
            </span>
          </li>
          <!--
          <li
            :key="n"
            :for="n in lastPage"
            :class="{'active': (currentPage === (n))}"
            @click.prevent="setPage(n)"
          >
            <span>
              {{ n }}
            </span>
          </li>
          -->
          <li
            :class="{'disabled': (currentPage === lastPage)}"
            @click.prevent="setPage(currentPage+1)"
          >
            <span>
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {

  // reactive data
  data () {
    return {
      posts: [],
      lastPages: 40,
      currentPage: 1,
      searchInput: ''
    }
  },

  // computed properties / maths functions
  computed: {

    // search results
    searchPosts () {
      return this.posts.filter((post) => {
        return post.slug.toLowerCase().includes(this.searchInput.toLowerCase())
      })
    },

    // pagination first page / prev
    firstPage () {
      return (this.currentPage - 1) * this.lastPages
    },

    // pagination last page / next
    lastPage () {
      return Math.ceil(this.posts.length / this.lastPages)
    }

  },

  // get initial posts
  created () {
    this.getPosts()
  },

  // methods / non maths functions
  methods: {

    // set pagination numbers
    setPage (idx) {
      if (idx <= 0 || idx > this.lastPage) {
        return
      }
      this.currentPage = idx
    },

    // sort by name
    sortNames () {
      this.posts = _.orderBy(this.posts, ['slug'], ['asc'])
    },

    // sort by symbol
    sortSymbols () {
      this.posts = _.orderBy(this.posts, ['symbol'], ['asc'])
    },

    // sort by id
    sortId () {
      this.posts = _.orderBy(this.posts, ['id'], ['asc'])
    },

    // get inital posts
    getPosts () {
      axios
        .get(process.env.baseUrl)
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          // console.log(response)
        })
      return this.posts
    }
  }

}
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  margin: 0 0 0.5em 0;
  width: 100%;
}

.grid > div {
  padding: 0 0.5em 0.5em 0;
  opacity: 0;
  transition: opacity 0.2s;
}

.grid > div a {
  border: 1px solid #222;
  color: #222;
  display: block;
  float: left;
  text-decoration: none;
  padding: 0.25em;
  width: 100%;
}

.grid > div:hover a {
  background: #222;
  color: #fff;
  transition: all ease 0.3s;
}

.--active .grid > div {
  opacity: 1;
}
.--active .grid > div:nth-child(1) {
  transition-delay: 0.05s;
}
.--active .grid > div:nth-child(2) {
  transition-delay: 0.1s;
}
.--active .grid > div:nth-child(3) {
  transition-delay: 0.15s;
}
.--active .grid > div:nth-child(4) {
  transition-delay: 0.2s;
}
.--active .grid > div:nth-child(5) {
  transition-delay: 0.25s;
}
.--active .grid > div:nth-child(6) {
  transition-delay: 0.3s;
}
.--active .grid > div:nth-child(7) {
  transition-delay: 0.35s;
}
.--active .grid > div:nth-child(8) {
  transition-delay: 0.4s;
}
.--active .grid > div:nth-child(9) {
  transition-delay: 0.45s;
}
.--active .grid > div:nth-child(10) {
  transition-delay: 0.5s;
}
.--active .grid > div:nth-child(11) {
  transition-delay: 0.55s;
}
.--active .grid > div:nth-child(12) {
  transition-delay: 0.6s;
}
.--active .grid > div:nth-child(13) {
  transition-delay: 0.65s;
}
.--active .grid > div:nth-child(14) {
  transition-delay: 0.7s;
}
.--active .grid > div:nth-child(15) {
  transition-delay: 0.75s;
}
.--active .grid > div:nth-child(16) {
  transition-delay: 0.8s;
}
.--active .grid > div:nth-child(17) {
  transition-delay: 0.85s;
}
.--active .grid > div:nth-child(18) {
  transition-delay: 0.9s;
}
.--active .grid > div:nth-child(19) {
  transition-delay: 0.95s;
}
.--active .grid > div:nth-child(20) {
  transition-delay: 1s;
}
.--active .grid > div:nth-child(21) {
  transition-delay: 1.05s;
}
.--active .grid > div:nth-child(22) {
  transition-delay: 1.1s;
}
.--active .grid > div:nth-child(23) {
  transition-delay: 1.15s;
}
.--active .grid > div:nth-child(24) {
  transition-delay: 1.2s;
}
.--active .grid > div:nth-child(25) {
  transition-delay: 1.25s;
}
.--active .grid > div:nth-child(26) {
  transition-delay: 1.3s;
}
.--active .grid > div:nth-child(27) {
  transition-delay: 1.35s;
}
.--active .grid > div:nth-child(28) {
  transition-delay: 1.4s;
}
.--active .grid > div:nth-child(29) {
  transition-delay: 1.45s;
}
.--active .grid > div:nth-child(30) {
  transition-delay: 1.5s;
}
.--active .grid > div:nth-child(31) {
  transition-delay: 1.55s;
}
.--active .grid > div:nth-child(32) {
  transition-delay: 1.6s;
}
.--active .grid > div:nth-child(33) {
  transition-delay: 1.65s;
}
.--active .grid > div:nth-child(34) {
  transition-delay: 1.7s;
}
.--active .grid > div:nth-child(35) {
  transition-delay: 1.75s;
}
.--active .grid > div:nth-child(36) {
  transition-delay: 1.8s;
}
.--active .grid > div:nth-child(37) {
  transition-delay: 1.85s;
}
.--active .grid > div:nth-child(38) {
  transition-delay: 1.9s;
}
.--active .grid > div:nth-child(39) {
  transition-delay: 1.95s;
}
.--active .grid > div:nth-child(40) {
  transition-delay: 2s;
}

.filters {
  padding: 1rem 0;
}
.filters input,
.filters button {
  height: 36px;
  padding: 0 0.5rem;
  outline: 0;
  border: 1px solid #222;
  color: #222;
  background: transparent;
  font-size: 0.8rem;
  text-transform: uppercase;
}
.pagination span:hover {
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 1400px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
