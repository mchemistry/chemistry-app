<template>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-narrow">
      <card
        event-title="Este"
        :new-event="true"
        :img-event="require('~/assets/chemistry-element/Este.png')"
      ></card>
    </div>
    <div class="column is-narrow">
      <card
        event-title="Lipid"
        :img-event="require('~/assets/chemistry-element/Lipid.png')"
      ></card>
    </div>
    <div class="column is-narrow">
      <card
        event-title="Benzen - Phenol"
        :new-event="true"
        :img-event="require('~/assets/chemistry-element/Benzene.png')"
      ></card>
    </div>
    <div class="column is-narrow">
      <card :img-event="require('~/assets/chemistry-element/Este.png')"></card>
    </div>
  </div>
</template>

<script>
import Card from '../../../components/card'
export default {
  components: {
    card: Card,
  },
}
</script>
