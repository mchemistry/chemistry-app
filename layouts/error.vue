<template>
  <div class="page-404">
    <h1 class="text-404">{{ error.statusCode }}</h1>
    <div class="container">
      <img
        class="image-404"
        src="https://cdn.dribbble.com/users/1162077/screenshots/3779301/complexity.png"
        alt="image-404"
      />
    </div>
    <div>
      <p class="text-suggest">
        <strong>OPPS !</strong>
        Trang bạn tìm kiếm không tồn tại, bấm nút bên dưới để quay về trang chủ
        !
      </p>
    </div>
    <div class="buttons">
      <b-button icon-left="arrow-left" class="center" rounded>
        <nuxt-link to="/">Quay về trang chủ</nuxt-link>
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

<style scoped>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: 'Arvo', serif;
}
.text-404 {
  text-align: center;
  font-size: 100px;
  font-weight: bold;
}
.image-404 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.text-suggest {
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
}
.buttons {
  width: 100%;
}
.center {
  margin: 20px auto;
}
</style>
