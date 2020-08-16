<template>
  <div class="bg-login">
    <img class="logo" src="../assets/images/logo-clabs.svg" alt="logo-clabs" />
    <client-only>
      <div class="bg-left is-hidden-touch">
        <Atom :sub-element="subElement" :data="arrMargin" :radius="radius" />
        <AtomInformations
          :element="subElement.name"
          :configuration="subElement.electron_configuration_semantic"
          :phase="subElement.phase"
          :symbol="subElement.symbol"
          :summary="subElement.summary"
          class="atom-information"
        />
      </div>
    </client-only>
    <div class="bg-right">
      <nuxt />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import Atom from '../components/atom/Atom.vue'
import AtomInformations from '../components/atom/AtomInformations'

const { mapGetters, mapActions } = createNamespacedHelpers('atom')

export default {
  transition: 'page',
  name: 'Login',
  components: {
    Atom,
    AtomInformations,
  },
  computed: {
    ...mapGetters(['subElement', 'radius', 'arrMargin']),
  },
  created() {
    this.interval = setInterval(this.randomElement, 10000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    ...mapActions(['setSubElement']),
    randomElement() {
      this.setSubElement()
    },
  },
}
</script>
<style scoped>
.logo {
  width: 120px;
  height: 150px;
  position: absolute;
  top: 10px;
  left: 10px;
}
.atom-information {
  position: absolute;
  bottom: 10px;
  width: 49.5%;
}
.bg-login {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
}
.bg-left {
  background-color: #6b048c;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.bg-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: whitesmoke;
}
@media screen and (max-width: 1023px) {
  .bg-right {
    background-color: #8616ac;
  }
}
</style>
