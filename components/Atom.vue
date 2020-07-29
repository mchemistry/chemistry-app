/* eslint-disable vue/require-v-for-key */
<template>
  <div class="container">
    <div class="proton">
      <p class="element">{{ element }}</p>
    </div>
    <div
      v-for="(item, index) in getMtAndMl(radius, convertElectron(electron))"
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
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    electron: {
      type: Number,
      default: 50,
    },
    element: {
      type: String,
      default: 'Na',
    },
  },
  data() {
    return {
      exceptions: {
        1: [24, [2, 8, 13, 1, 0, 0, 0]],
        2: [29, [2, 8, 18, 1, 0, 0, 0]],
        3: [41, [2, 8, 18, 12, 1, 0, 0]],
        4: [42, [2, 8, 18, 13, 1, 0, 0]],
        5: [44, [2, 8, 18, 15, 1, 0, 0]],
        6: [45, [2, 8, 18, 16, 1, 0, 0]],
        7: [46, [2, 8, 18, 18, 0, 0, 0]],
        8: [47, [2, 8, 18, 18, 1, 0, 0]],
        9: [78, [2, 8, 18, 32, 17, 1, 0]],
        10: [79, [2, 8, 18, 32, 18, 1, 0]],
        11: [57, [2, 8, 18, 18, 9, 2, 0]],
        12: [58, [2, 8, 18, 19, 9, 2, 0]],
        13: [64, [2, 8, 18, 25, 9, 2, 0]],
        14: [89, [2, 8, 18, 32, 18, 9, 2]],
        15: [90, [2, 8, 18, 32, 18, 10, 2]],
        16: [91, [2, 8, 18, 32, 20, 9, 2]],
        17: [92, [2, 8, 18, 32, 21, 9, 2]],
        18: [93, [2, 8, 18, 32, 22, 9, 2]],
        19: [96, [2, 8, 18, 32, 25, 9, 2]],
        20: [103, [2, 8, 18, 32, 32, 8, 3]],
      },
      radius: [25, 50, 75, 100, 125, 150, 175],
    }
  },
  methods: {
    checkException(e) {
      const getException = Object.values(this.exceptions)
      for (let i = 0; i < 20; i++) {
        // eslint-disable-next-line no-console
        if (getException[i][0] === e) {
          return getException[i][1]
        }
      }
    },
    checkQuadrant(deg) {
      const miniDeg = deg % 90
      if (deg === 360) deg = 0
      if (deg >= 0 && deg < 90) return [1, miniDeg]
      if (deg >= 90 && deg < 180) return [2, miniDeg]
      if (deg >= 180 && deg < 270) return [3, miniDeg]
      if (deg >= 270 && deg < 360) return [4, miniDeg]
    },
    convertDegToRadian(deg) {
      return (deg * Math.PI) / 180
    },
    getDistance(radius, deg) {
      const check = this.checkQuadrant(deg)
      let marginTop = 0
      let marginLeft = 0
      if (check[0] === 1) {
        marginTop = -radius * Math.cos(this.convertDegToRadian(check[1]))
        marginLeft = radius * Math.sin(this.convertDegToRadian(check[1]))
      }
      if (check[0] === 2) {
        marginTop = radius * Math.sin(this.convertDegToRadian(check[1]))
        marginLeft = radius * Math.cos(this.convertDegToRadian(check[1]))
      }
      if (check[0] === 3) {
        marginTop = radius * Math.cos(this.convertDegToRadian(check[1]))
        marginLeft = -radius * Math.sin(this.convertDegToRadian(check[1]))
      }
      if (check[0] === 4) {
        marginTop = -radius * Math.sin(this.convertDegToRadian(check[1]))
        marginLeft = -radius * Math.cos(this.convertDegToRadian(check[1]))
      }
      return [marginTop, marginLeft]
    },
    getMtAndMl(arrayRadius, arrayElectron) {
      const mtAndMl = []
      let deg = 0
      let arr = []
      let divDeg = 0
      const index = arrayElectron.indexOf(0)
      let convertArray = 0
      let subRadius = 0
      if (index === -1) {
        convertArray = arrayElectron
        subRadius = arrayRadius
      } else {
        convertArray = arrayElectron.slice(0, index)
        subRadius = arrayRadius.slice(0, index)
      }
      for (let i = 0; i < convertArray.length; i++) {
        divDeg = 360 / convertArray[i]
        deg = 0
        arr = []
        for (let j = 0; j < convertArray[i]; j++) {
          deg += divDeg
          arr.push(this.getDistance(subRadius[i], deg))
        }
        mtAndMl.push(arr)
      }
      return mtAndMl
    },
    convertElectron(e) {
      const check = this.checkException(e)
      if (check !== undefined) {
        return check
      }
      const classElectron = new Array(7).fill(0)
      for (let i = 1; i <= e; i++) {
        if (i >= 1 && i <= 2) {
          classElectron[0]++
        }
        if (i >= 3 && i <= 10) {
          classElectron[1]++
        }
        if ((i >= 11 && i <= 18) || (i >= 21 && i <= 30)) {
          classElectron[2]++
        }
        if (
          (i >= 19 && i <= 20) ||
          (i >= 31 && i <= 36) ||
          (i >= 39 && i <= 48) ||
          (i >= 57 && i <= 70)
        ) {
          classElectron[3]++
        }
        if (
          (i >= 37 && i <= 38) ||
          (i >= 49 && i <= 54) ||
          (i >= 71 && i <= 80) ||
          (i >= 89 && i <= 102)
        ) {
          classElectron[4]++
        }
        if (
          (i >= 55 && i <= 56) ||
          (i >= 81 && i <= 86) ||
          (i >= 103 && i <= 112)
        ) {
          classElectron[5]++
        }
        if ((i >= 87 && i <= 88) || (i >= 113 && i <= 118)) {
          classElectron[6]++
        }
      }
      return classElectron
    },
  },
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 40%;
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
  width: 30px;
  height: 30px;
  background-color: blueviolet;
  border: none;
  animation: blink 1.5s infinite;
}

.element {
  color: white;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin-top: 13px;
  margin-left: 12.5px;
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
    border: 1px solid rgb(207, 207, 207);
  }
  100% {
    border: 1px solid rgb(150, 149, 149);
  }
}
</style>
