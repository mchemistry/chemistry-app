<template>
  <div class="bg-login">
    <div class="bg-left">
      <Atom :electron="subElement.number" :element="subElement.symbol" />
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
import Atom from '../components/Atom.vue'
import AtomInformations from '../components/AtomInformations'
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
    // eslint-disable-next-line no-console
    console.log(this.subElement)
  },
  methods: {
    randomElements() {
      setInterval(() => {
        this.subElement = this.elements[
          Math.floor(Math.random() * this.elements.length)
        ]
      }, 20000)
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
}
.bg-left {
  background-color: #9b59b6;
  width: 50%;
}
</style>
