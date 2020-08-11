<template>
  <div class="home-page">
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>
<script>
import NavBar from '../components/nav/NavBar'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'nav-bar': NavBar,
  },
}
</script>
<style scoped>
.home-page {
  height: 100vh;
  background-color: #3d0055;
}
</style>
