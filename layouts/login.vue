<template>
  <div class="bg-login">
    <div class="bg-left">
      <Atom />
    </div>
    <nuxt />
  </div>
</template>
<script>
import Atom from '../components/Atom.vue'
export default {
  components: { Atom },
}
</script>
<style scoped>
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
