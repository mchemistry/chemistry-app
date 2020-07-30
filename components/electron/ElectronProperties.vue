<template>
  <div>
    <p
      :style="{ size: size }"
      :class="{ special: isSpecial }"
      v-html="convertConfiguation(configuration)"
    ></p>
  </div>
</template>

<script>
export default {
  name: 'ElectronProperties',
  props: {
    size: {
      type: String,
      default: '16px',
    },
    configuration: {
      type: String,
      default: '1s1',
    },
  },
  data() {
    return {
      isSpecial: false,
    }
  },
  methods: {
    convertConfiguation(config) {
      const check = config + ''
      const newConfig = check.split(' ')
      let newWord = ''
      let bind = ''
      let newString = `e <sup>-</sup> Configuration: `
      if (check.charAt(0) === '*') this.isSpecial = true
      else this.isSpecial = false
      for (let i = 0; i < newConfig.length; i++) {
        newWord = ''
        for (let j = 0; j < newConfig[i].length; j++) {
          newWord += newConfig[i].charAt(j)
          if (
            newConfig[i].charAt(j) === 's' ||
            newConfig[i].charAt(j) === 'p' ||
            newConfig[i].charAt(j) === 'd' ||
            newConfig[i].charAt(j) === 'f'
          ) {
            bind = newConfig[i].substring(j + 1, 4)
            newWord += `<sup>${bind}</sup>`
            j = newConfig[i].length
          }
        }
        newString += newWord
      }
      return newString
    },
  },
}
</script>

<style lang="css" scoped>
.special {
  color: white;
}
</style>
