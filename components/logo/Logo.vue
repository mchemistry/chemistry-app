<template>
  <div class="hexagon">
    <span>
      <p class="electron">{{ electron }}</p>
      <p class="chemical-element">{{ symbol }}</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    electron: {
      type: Number,
      default: 1,
    },
    symbol: {
      type: String,
      default: 'H',
    },
  },
}
</script>

<style scoped>
.hexagon {
  width: 80px;
  height: 46.19px;
  background: #8e44ad;
  box-shadow: 20px 20px 60px #793a93, -10px -10px 60px #a34ec7;
  border-left: solid 2px #fff;
  border-right: solid 2px #fff;
}

.hexagon::before,
.hexagon::after {
  content: '';
  position: absolute;
  z-index: 1;
  width: 56.57px;
  height: 56.57px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 9.7157px;
  box-shadow: 0 0 20px rgba(10, 9, 17, 0.3);
}

.hexagon::before {
  top: -28.2843px;
  border-top: solid 2.8284px #fff;
  border-right: solid 2.8284px #fff;
}

.hexagon::after {
  bottom: -28.2843px;
  border-bottom: solid 2.8284px #fff;
  border-left: solid 2.8284px #fff;
}

.hexagon span {
  display: block;
  position: absolute;
  top: 1.1547005383792515px;
  left: 0;
  width: 76px;
  height: 43.8786px;
  z-index: 2;
  background: inherit;
}
.chemical-element {
  text-align: center;
  color: white;
  font-size: 25px;
  position: relative;
  top: -20px;
  font-weight: bold;
}
.electron {
  position: relative;
  top: -3px;
  left: 2px;
  font-size: 12px;
  color: white;
}
.automic-mass {
  position: relative;
  top: -28px;
  left: 2px;
  font-size: 12px;
  color: white;
}
</style>
