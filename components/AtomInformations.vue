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
        e <sup>-</sup> Configuration: {{ configuration }}
      </div>
      <div class="column">Phase : {{ phase }}</div>
    </div>
    <div class="content is-small">
      <h1 class="sum">Summary</h1>
      <p class="is-white">
        {{ summary }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtomInformations',
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
.content {
  padding: 1.5rem;
  color: rgba(235, 235, 235, 0.911);
  background: blueviolet;
  margin-left: 5px;
  border-radius: 10px;
}
.sum {
  color: rgba(235, 235, 235, 0.911);
}

.content .sum {
  border-bottom: 1px solid rgba(235, 235, 235, 0.568);
}
.column {
  margin: 5px;
  color: rgba(235, 235, 235, 0.911);
  padding-left: 30px;
}
</style>
