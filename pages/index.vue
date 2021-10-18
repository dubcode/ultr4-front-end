<template>
  <div>
    <Products />
    <CategoriesSimple />
  </div>
</template>

<script>
export default {
  layout: 'default',
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
  // methods - end
}
</script>
