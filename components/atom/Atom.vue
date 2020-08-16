/* eslint-disable vue/require-v-for-key */
<template>
  <div class="container">
    <div class="proton">
      <p class="has-text-centered white font-500" style="margin-top: 8px;">
        {{ subElement.symbol }}
      </p>
    </div>
    <div
      v-for="(item, index) in data"
      :key="index"
      :style="{
        'margin-left': -radius[index] + 'px',
        'margin-top': -radius[index] + 'px',
        width: radius[index] * 2 + 'px',
        height: radius[index] * 2 + 'px',
        'animation-duration': 2 + index * 4 + 's',
      }"
      class="animation"
    >
      <span
        v-for="(item2, index2) in item"
        :key="index2"
        :style="{
          'margin-top': item2[0] + 'px',
          'margin-left': item2[1] + 'px',
        }"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Atom',
  // eslint-disable-next-line vue/require-prop-types
  props: ['subElement', 'data', 'radius'],
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translateX(-50%) translateY(-50%);
}
.container div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid rgba(187, 187, 187, 0.418);
  border-radius: 50%;
}

.proton {
  width: 40px;
  height: 40px;
  background-color: #ef8a00;
  border: none;
  animation: blink 1.5s infinite;
}

.element {
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin: 18px 18px 0 0;
}
.container div span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(209, 191, 191);
  border: 0.02px solid #ff7070;
}

.animation {
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: spinner;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  0% {
    border: 1px solid rgb(255, 255, 255);
  }
  100% {
    border: 1px solid rgb(150, 149, 149);
  }
}
</style>
