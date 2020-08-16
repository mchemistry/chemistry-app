<template>
  <div
    class="progressx"
    :class="{ 'is-rounded': rounded }"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <span
      class="progress-bar"
      :style="[
        rounded
          ? {
              'border-top-left-radius': 9999 + 'px',
              'border-bottom-left-radius': 9999 + 'px',
            }
          : '',
        ,
        { width: percent + '%' },
      ]"
    ></span>
    <p
      v-if="showValue"
      class="value inside-progress"
      :style="[
        insideProgress ? { top: -(height / 2) - 6 + 'px' } : '',
        height >= 14 ? { 'font-size': 12 + 'px !important' } : '',
        height >= 24
          ? {
              'font-size': 16 + 'px !important',
            }
          : '',
        !insideProgress ? { color: '#ec4444 !important' } : '',
      ]"
    >
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    value: {
      type: String,
      default: '75/100',
    },
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 16,
    },
    percent: {
      type: Number,
      default: 75,
    },
    insideProgress: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    showValue: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.value {
  display: block;
  color: #ec4444;
  margin-top: 2px;
  position: relative;
  font-size: 12px;
  text-align: center;
}
.progressx {
  width: 100%;
  max-width: 260px;
  background: #e1e4e8;
}
.progress-bar {
  display: block;
  height: 100%;
  background: linear-gradient(
    90deg,
    #ffd33d,
    #ea4aaa 17%,
    #b34bff 34%,
    #01feff 51%,
    #ffd33d 68%,
    #ea4aaa 85%,
    #b34bff
  );
  background-size: 300% 100%;
  animation: progress-animation 2s linear infinite;
}
.inside-progress {
  margin: 0 auto;
  top: 0;
  font-size: 10px !important;
  color: white;
}
@keyframes progress-animation {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
