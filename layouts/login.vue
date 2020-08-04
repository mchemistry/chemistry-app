<template>
  <div class="bg-login">
    <client-only>
      <div class="bg-left">
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
    <nuxt />
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
.atom-information {
  position: absolute;
  bottom: 10px;
  width: 49.5%;
}
.bg-login {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
}
.bg-left {
  background-color: #9b59b6;
  width: 50%;
}
</style>
