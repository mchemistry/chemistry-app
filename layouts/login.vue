<template>
  <div class="bg-login">
    <div class="bg-left">
      <Atom
        :electron="subElement.number"
        :element="subElement.symbol"
        :shells="subElement.shells"
      />
      <AtomInformations
        :element="subElement.name"
        :configuration="subElement.electron_configuration_semantic"
        :phase="subElement.phase"
        :symbol="subElement.symbol"
        :summary="subElement.summary"
        class="atom-infor"
      />
    </div>
    <nuxt />
  </div>
</template>
<script>
import Atom from '../components/atom/Atom.vue'
import AtomInformations from '../components/atom/AtomInformations'
import data from '../static/data/element-data.json'
export default {
  components: {
    Atom,
    AtomInformations,
  },
  data() {
    return {
      elements: data.elements,
      subElement: {},
    }
  },
  created() {
    this.randomElements()
  },
  methods: {
    randomElements() {
      setInterval(() => {
        this.subElement = this.elements[
          Math.floor(Math.random() * this.elements.length)
        ]
      }, 15000)
    },
  },
}
</script>
<style scoped>
.atom-infor {
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
