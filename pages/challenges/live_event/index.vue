<template>
  <div>
    <div v-if="!loading" class="columns is-mobile is-multiline is-centered">
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
        <card
          :img-event="require('~/assets/chemistry-element/Este.png')"
        ></card>
      </div>
    </div>
    <div v-if="loading" class="columns is-mobile is-multiline is-centered">
      <div v-for="(item, index) in items" :key="index" class="column is-narrow">
        <card-skeleton></card-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../../components/card'
import CardSkeleton from '../../../components/skeleton/CardSkeleton'
export default {
  components: {
    card: Card,
    'card-skeleton': CardSkeleton,
  },
  data() {
    return {
      items: 4,
      loading: false,
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.loading = false
    }, 5000)
    this.loading = true
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>
