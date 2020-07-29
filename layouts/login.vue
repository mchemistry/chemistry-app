<template>
  <div class="bg-login">
    <div class="bg-left">
      <div class="lable">
        <p class="lable-for-atom">Atom</p>
      </div>
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
.lable-for-atom {
  text-align: center;
  margin-top: 40px;
  color: white;
  font-size: 25px;
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
