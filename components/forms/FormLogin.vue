<template>
  <div class="card">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section class="section custom-field">
        <p class="title">{{ title }}</p>
        <BInputWithValidation
          v-model="email"
          rounded
          :rules="isRegisterPage ? 'required|email' : 'required'"
          :login="!isRegisterPage"
          type="email"
          label="Email"
          placeholder="Nhập vào email..."
          icon="email"
        />
        <BInputWithValidation
          v-if="isRegisterPage"
          v-model="username"
          rounded
          rules="required|username"
          type="username"
          label="Tên tài khoản"
          placeholder="Nhập vào tên tài khoản..."
          icon="account"
        />
        <BInputWithValidation
          v-model="password"
          :rules="isRegisterPage ? 'required|passwords' : 'required'"
          :login="!isRegisterPage"
          password-reveal
          rounded
          type="password"
          label="Mật khẩu"
          vid="password"
          placeholder="Nhập vào mật khẩu..."
          icon="lock"
        />
        <div class="level-right">
          <nuxt-link
            v-if="!isRegisterPage"
            to="/auth/password_reset"
            class="forgot-password"
            >Quên mật khẩu ?</nuxt-link
          >
        </div>
        <BInputWithValidation
          v-if="isRegisterPage"
          v-model="confirmation"
          password-reveal
          rounded
          rules="required|confirmed:password"
          name="Password"
          type="password"
          label="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu..."
          icon="lock"
        />
        <b-button
          v-if="!isSubmit"
          :disabled="invalid"
          class="is-primary btn-login"
          rounded
          @click="isRegisterPage ? signup() : login()"
          >{{ title }}</b-button
        >
        <Loading v-if="isSubmit"></Loading>
        <p v-if="!isRegisterPage" class="or">Hoặc</p>
        <div v-if="!isRegisterPage" class="social">
          <img
            src="../../static/icons/facebook.png"
            alt="facebook"
            class="social-img"
          />
          <img
            src="../../static/icons/google-plus.png"
            alt="google"
            class="social-img"
          />
        </div>
        <p v-if="!isRegisterPage" class="to-signup">
          Chưa có tài khoản ?
          <nuxt-link to="/auth/register">Đăng ký</nuxt-link>
        </p>
        <p v-if="isRegisterPage" class="to-signup">
          Đã có tài khoản ?
          <nuxt-link to="/auth/login">Đăng nhập</nuxt-link>
        </p>
      </section>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '../inputs/BInputWithValidation'
import Loading from '../loading/Loading'

export default {
  name: 'FormLogin',
  components: {
    ValidationObserver,
    BInputWithValidation,
    Loading,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: {
    title: {
      type: String,
      default: '',
    },
    isRegisterPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    email: '',
    username: '',
    password: '',
    confirmation: '',
    subject: '',
    choices: [],
    isSubmit: false,
  }),
  methods: {
    login() {
      setTimeout(() => {
        this.isSubmit = false
        this.$buefy.toast.open({
          message: 'Đăng nhập thành công!',
          type: 'is-success',
        })
      }, 3000)
      this.isSubmit = true
    },
    signup() {
      setTimeout(() => {
        this.isSubmit = false
        this.$buefy.toast.open({
          message: 'Đăng ký thất bại!',
          type: 'is-danger',
        })
      }, 3000)
      this.isSubmit = true
    },
    resetForm() {
      this.email = ''
      this.password = ''
      this.confirmation = ''
      this.subject = ''
      this.choices = []
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
  },
}
</script>

<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10000000;
  background-color: white;
  width: 350px;
  height: auto;
  border-radius: 15px;
  -webkit-box-shadow: 4px 10px 15px 1px #000;
  -moz-box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.418);
  box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.42);
}
.section {
  display: flex;
  flex-direction: column;
}
.title {
  font-family: 'Varela Round', sans-serif;
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #7957d5;
}
.custom-field {
  width: 280px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1px;
}
.forgot-password {
  margin-top: 5px;
  float: right;
  text-align: right;
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
  margin-bottom: 20px;
}
</style>
