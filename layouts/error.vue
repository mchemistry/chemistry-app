<template>
  <div class="py-3 has-background-white" style="height: 100vh;">
    <h1 class="has-text-centered font-800 primary" style="font-size: 100px;">
      {{ error.statusCode }}
    </h1>
    <div class="container">
      <img
        class="m0-auto"
        style="width: 40%; display: block;"
        src="https://cdn.dribbble.com/users/1162077/screenshots/3779301/complexity.png"
        alt="image-404"
      />
    </div>
    <div>
      <p class="has-text-centered mt-1 primary">
        <strong class="primary">OPPS !</strong>
        Trang bạn tìm kiếm không tồn tại, bấm nút bên dưới để quay về trang chủ
        !
      </p>
    </div>
    <div class="mt-2 buttons">
      <b-button
        icon-left="arrow-left"
        class="m0-auto has-text-white btn-secondary"
        rounded
      >
        <nuxt-link to="/" class="has-text-white">Quay về trang chủ</nuxt-link>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Error'
    },
  },
  head() {
    return {
      title: 'Trang không tồn tại !',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>
