<template>
  <div class="is-primary is-full-height-screen">
    <nav-bar></nav-bar>
    <side-bar />
    <nuxt class="mt-5 fixed-mobile" />
    <b-footer />
  </div>
</template>
<script>
import NavBar from '../components/nav/NavBar'
import SideBar from '../components/nav/SideBar'
import Footer from '../components/footer'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'nav-bar': NavBar,
    'b-footer': Footer,
    'side-bar': SideBar,
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
@media only screen and (min-width: 1024px) {
  .fixed-mobile {
    margin-top: 0 !important;
  }
}
</style>
