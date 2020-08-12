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
  data() {
    return {
      ops: {
        rail: {
          opacity: '1',
          background: '#fff',
          border: 'none',
          specifyBorderRadius: '0px',
          size: '15px',
          gutterOfSide: '0px',
          keepShow: false,
        },
        bar: {
          background: '#3d0055a6',
          keepShow: true,
          size: '7px',
          minSize: 0.2,
          specifyBorderRadius: '5px',
        },
        scrollButton: {
          enable: false,
          background: '#cecece',
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800,
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
        },
      },
    }
  },
}
</script>
<style scoped>
.home-page {
  min-height: 100vh;
  background-color: #6b048c;
  max-height: auto;
}
</style>
