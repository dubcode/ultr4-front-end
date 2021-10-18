<template>
  <header class="header row">
    <div class="ctr">
      <nuxt-link to="/">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 128 100.4"
          style="enable-background:new 0 0 128 100.4;"
          xml:space="preserve"
        >
          <g>
            <polygon
              points="106.7,28.9 99.6,36 113.8,50.2 99.6,64.4 106.7,71.5 128,50.2"
            />
            <polygon
              points="14.2,50.2 28.4,36 21.3,28.9 0,50.2 21.3,71.5 28.4,64.4"
            />
            <path
              d="M100.3,50.2L85.7,35.6l13.9-13.9l-7.1-7.1L78.6,28.5l-7.1-7.1L85.4,7.5L77.9,0L64,13.9L50.1,0.1l-7.5,7.5 l13.9,13.9l-7.1,7.1l-13.8-14l-7.1,7.1l13.9,13.9L27.7,50.2l14.6,14.6L28.4,78.6l7.1,7.1l13.9-13.9l7.1,7.1L42.6,92.8l7.5,7.5 L64,86.5l13.9,13.9l7.5-7.5L71.5,79l7.1-7.1l13.9,13.9l7.1-7.1L85.7,64.8L100.3,50.2z M64,71.5L42.7,50.2L64,28.9l21.3,21.3 L64,71.5z"
            />
          </g>
        </svg>
      </nuxt-link>
      <div class="user__status">
        <!-- If you are logged in -->
        <ul v-if="username">
          <li><a href="#" class="uk-link-reset"><img src="https://png2.cleanpng.com/sh/a7adacc7226d2dc438dafb37913a8ab8/L0KzQYm3V8E2N5tqipH0aYP2gLBuTfVudZZ5ReZxZT3vdbj2Tf1wfppqRehyZHXyd7L0hb1xeppze9d8cz34frryigR1gV58Rdd2bXX3Pb3shB8udZD7gdc2NXK3coG9UMRibGJrfqI3Mkm0RoS7VMYyPWQ2TqY8M0m5R4GCUb5xdpg=/kisspng-emmet-the-lego-movie-videogame-princess-unikitty-w-emmet-lego-movie-5b4b0604ad1ff0.2916344615316433967091.png" class="uk-border-circle" height="40" width="40" alt="">{{ username }}</a></li>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>
        <!-- If you are not logged in -->
        <ul v-else>
          <li><a href="/users/register">Signup</a></li>
          <li><a href="/users/signin">Signin</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    // Set your username thanks to your getter
    username () {
      return this.$store.getters['auth/username']
    }
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>
<style scoped>
.header {
    background: var(--black);
    margin: 0 0 2rem 0;
    padding: 1rem 0;
}
svg {
    height: 50px;
    width: auto;
}
svg path,
svg polygon {
    fill:var(--light);
}
@media only screen and (min-width: 1200px) {

}

</style>
