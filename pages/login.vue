<template>
  <div class="card">
    <p class="title">Đăng nhập</p>
    <section class="custom-field">
      <b-field label="Tên tài khoản">
        <b-input
          rounded
          custom-class
          placeholder="Nhập tên tài khoản ..."
          icon="account"
          class="custom-input"
        ></b-input>
      </b-field>

      <b-field label="Mật khẩu">
        <b-input
          password-reveal
          rounded
          custom-class
          placeholder="Nhập mật khẩu ..."
          icon="lock"
          type="password"
          class="custom-input"
        ></b-input>
      </b-field>
      <nuxt-link to="/" class="forgot-password">Quên mật khẩu ?</nuxt-link>
      <b-button type="is-primary" class="btn-login" rounded>Đăng nhập</b-button>
      <p class="or">Hoặc</p>
      <div class="social">
        <img src="../static/facebook.png" alt="facebook" class="social-img" />
        <img src="../static/google-plus.png" alt="google" class="social-img" />
      </div>
      <p class="to-signup">
        Chưa có tài khoản ?
        <nuxt-link to="/signup">Đăng ký</nuxt-link>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    logIn() {
      this.isLoading = true
      this.$buefy.toast.open({
        duration: 50000,
        message: `Tên tài khoản hoặc mật khẩu không chính xác !`,
        type: 'is-danger',
      })
    },
  },
}
</script>

<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10000000;
  background-color: white;
  width: 350px;
  height: 520px;
  border-radius: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
}
.title {
  font-family: 'Varela Round', sans-serif;
  font-size: 25px;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 30px;
  color: #7957d5;
}
.custom-field {
  width: 280px;
  margin: 0 auto;
  margin-top: 40px;
}
.forgot-password {
  margin-right: 1px;
  float: right;
}
.btn-login {
  width: 100%;
  margin-top: 15px;
}
.or {
  text-align: center;
  margin-top: 10px;
}
.social-img {
  width: 40px;
  height: 40px;
}
.social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  margin: 0 auto;
  margin-top: 10px;
}
.to-signup {
  margin-top: 15px;
  text-align: center;
}
</style>
