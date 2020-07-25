<template>
  <div class="bg-login">
    <vue-particles
      color="#dedede"
      clickMode="push"
      :particleOpacity="0.85"
      :particlesNumber="110"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
    ></vue-particles>
    <nuxt />
  </div>
</template>

<style scoped>
.bg-login {
  background: linear-gradient(-135deg, #c850c0, #4158d0) !important;
  height: 100vh;
  overflow-y: auto !important;
}
</style>
