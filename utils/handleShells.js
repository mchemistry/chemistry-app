export default {
  checkQuadrant(deg) {
    const miniDeg = deg % 90
    if (deg > 360) return [1, miniDeg] // 1 vai truong hop goc lon hon 360 Ex: 360.0000001
    if (deg === 360) return [1, miniDeg]
    if (deg >= 1 && deg < 90) return [1, miniDeg]
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
  getMtAndMl(arrRadius, shells) {
    const mtAndMl = []
    let deg = 0
    let arr = []
    let divDeg = 0
    const index = shells.indexOf(0)
    let convertArray = 0
    let subRadius = 0
    if (index === -1) {
      convertArray = shells
      subRadius = arrRadius
    } else {
      convertArray = shells.slice(0, index)
      subRadius = arrRadius.slice(0, index)
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
  convertElectron(electron) {
    const check = this.checkException(electron)
    if (check !== undefined) {
      return check
    }
    const classElectron = new Array(7).fill(0)
    for (let i = 1; i <= electron; i++) {
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
}
