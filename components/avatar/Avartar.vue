<template>
  <div>
    <img
      :src="srcImg"
      alt="avatar"
      class="avatar"
      :style="{ width: size + 'px', height: size + 'px' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    srcImg: {
      type: String,
      default:
        'https://pmcvariety.files.wordpress.com/2018/09/cavill-2.jpg?w=600',
    },
    size: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="css" scoped>
.avatar {
  border-radius: 50%;
}
</style>
