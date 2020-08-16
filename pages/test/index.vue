<template>
  <div>
    <adu class="adu" :height="25" :inside-progress="false" />
  </div>
</template>

<script>
import Progress from '../../components/progress'
export default {
  layout: 'default',
  components: {
    adu: Progress,
  },
}
</script>

<style scoped>
.adu {
  margin-top: 100px;
  margin-left: 100px;
}
</style>
