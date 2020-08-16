<template>
  <div class="is-primary is-full-height-screen">
    <nav-bar></nav-bar>
    <nuxt />
    <b-footer />
  </div>
</template>
<script>
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'nav-bar': NavBar,
    'b-footer': Footer,
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
