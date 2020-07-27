<template>
  <div class="card">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section class="section custom-field">
        <Logo class="fixed-logo" />
        <p class="title">{{ title }}</p>
        <BInputWithValidation
          v-model="email"
          rounded
          :rules="isSignUpPage ? 'required|email' : 'required'"
          :login="!isSignUpPage"
          type="email"
          label="Email"
          placeholder="Nhập vào email..."
        />
        <BInputWithValidation
          v-if="isSignUpPage"
          v-model="username"
          rounded
          rules="required|username"
          type="username"
          label="Tên tài khoản"
          placeholder="Nhập vào tên tài khoản..."
        />
        <BInputWithValidation
          v-model="password"
          :rules="isSignUpPage ? 'required|passwords' : 'required'"
          :login="!isSignUpPage"
          password-reveal
          rounded
          type="password"
          label="Mật khẩu"
          vid="password"
          placeholder="Nhập vào mật khẩu..."
        />
        <div class="level-right">
          <nuxt-link v-if="!isSignUpPage" to="/" class="forgot-password"
            >Quên mật khẩu ?</nuxt-link
          >
        </div>
        <BInputWithValidation
          v-if="isSignUpPage"
          v-model="confirmation"
          password-reveal
          rounded
          rules="required|confirmed:password"
          name="Password"
          type="password"
          label="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu..."
        />
        <b-button
          :disabled="invalid"
          class="is-primary btn-login"
          rounded
          @click="passes(submit)"
          >{{ title }}</b-button
        >
        <p v-if="!isSignUpPage" class="or">Hoặc</p>
        <div v-if="!isSignUpPage" class="social">
          <img src="../static/facebook.png" alt="facebook" class="social-img" />
          <img
            src="../static/google-plus.png"
            alt="google"
            class="social-img"
          />
        </div>
        <p v-if="!isSignUpPage" class="to-signup">
          Chưa có tài khoản ?
          <nuxt-link to="/auth/signup">Đăng ký</nuxt-link>
        </p>
        <p v-if="isSignUpPage" class="to-signup">
          Đã có tài khoản ?
          <nuxt-link to="/auth/login">Đăng nhập</nuxt-link>
        </p>
      </section>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from './inputs/BInputWithValidation'
import Logo from './Logo'

export default {
  name: 'FormLogin',
  components: {
    ValidationObserver,
    BInputWithValidation,
    Logo,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: {
    title: {
      type: String,
      default: '',
    },
    isSignUpPage: {
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
  }),
  methods: {
    submit() {
      // eslint-disable-next-line no-console
      console.log('Form submitted yay!')
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
.fixed-logo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
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
