<template>
  <div class="container">
    <div class="columns is-8">
      <div class="column">Element : {{ element }}</div>
      <div class="column">
        Symbol : <strong class="sum">{{ symbol }}</strong>
      </div>
    </div>
    <div class="columns is-8">
      <div class="column">
        <ElectronProperties :configuration="configuration" />
      </div>
      <div class="column phase">
        <p>Phase :</p>
        <img
          v-if="phase === 'Gas'"
          src="../../static/icons/Gas.png"
          alt="Gas"
          class="icon-phase"
        />
        <img
          v-if="phase === 'Liquid'"
          src="../../static/icons/Liquid.png"
          alt="Liquid"
          class="icon-phase"
        />
        <img
          v-if="phase === 'Solid'"
          src="../../static/icons/Solid.png"
          alt="Solid"
          class="icon-phase"
        />
      </div>
    </div>
    <div class="content is-small">
      <h1 class="sum">Summary</h1>
      <p class="is-white">
        <span class="element">{{ summary.split(' ')[0] }} - </span
        >{{ summary.split(' ').slice(1).join(' ') }}
      </p>
    </div>
  </div>
</template>

<script>
import ElectronProperties from '../electron/ElectronProperties'

export default {
  name: 'AtomInformations',
  components: { ElectronProperties },
  props: {
    element: {
      type: String,
      default: 'Hidro',
    },
    configuration: {
      type: String,
      default: '1s1',
    },
    phase: {
      type: String,
      default: 'Gas',
    },
    symbol: {
      type: String,
      default: 'H',
    },
    summary: {
      type: String,
      default:
        'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',
    },
  },
}
</script>

<style scoped>
sup {
  margin-left: -5px;
}
.element {
  color: white;
  font-weight: bold;
}
.content {
  padding: 1.5rem;
  color: rgba(235, 235, 235, 0.911);
  background: blueviolet;
  margin-left: 5px;
  border-radius: 10px;
}
.sum {
  color: rgba(235, 235, 235, 0.911);
  padding-bottom: 5px;
}

.content .sum {
  border-bottom: 1px solid rgba(235, 235, 235, 0.568);
}
.column {
  margin: 5px;
  color: rgba(235, 235, 235, 0.911);
  padding-left: 30px;
}
.phase {
  display: flex;
  flex-direction: row;
}
.icon-phase {
  width: 26px;
  height: 26px;
  margin-left: 10px;
}
</style>
