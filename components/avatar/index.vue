<template>
  <div>
    <img
      :src="srcImg"
      alt="avatar"
      class="is-rounded"
      :style="{ width: size + 'px !important', height: size + 'px !important' }"
    />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    srcImg: {
      type: String,
      default:
        'https://decider.com/wp-content/uploads/2020/03/sonic-the-hedgehog.jpg?quality=90&strip=all&w=646&h=431&crop=1',
    },
    size: {
      type: Number,
      default: 0,
    },
  },
}
</script>
