<template>
  <div>
    <form @submit.stop.prevent="handleSubmit">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">
          Register
        </legend>
        <div class="uk-margin">
          <label class="uk-form-label">Username</label>
          <input
            v-model="username"
            class="uk-input"
            type="text"
            placeholder="pbocuse"
          >
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Email</label>
          <input v-model="email" class="uk-input" type="email" placeholder="flashvenom@gmail.com">
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Password</label>
          <input v-model="password" class="uk-input" type="password">
        </div>

        <div class="uk-margin">
          <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">
            Submit
          </button>
        </div>

        <div class="uk-margin">
          <p>
            Already have an account?
            <router-link :to="{ name: 'users-signin'}">
              Login
            </router-link>
          </p>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
// Import mapMutations in order to call mutations from your store
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    // Method that will register your users
    async handleSubmit () {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        // Call your setUser mutation from your auth.js store file
        this.setUser(response.user)
        this.$router.go(-1)
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>
