<template>
  <div class="card is-primary-darker m0-auto">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <section class="is-flex flex-column m0-auto mt-2" style="width: 280px;">
        <p class="title-big">{{ title }}</p>
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
          class="mt-1"
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
          class="mt-1"
        />
        <div class="level-right">
          <nuxt-link
            v-if="!isRegisterPage"
            to="/auth/password_reset"
            class="forgot-password link"
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
          class="mt-1 mb-1"
        />
        <b-button
          v-if="!isSubmit"
          :disabled="invalid"
          class="btn-secondary ripple mt-1 none-border"
          rounded
          :class="{ 'mt-2': isRegisterPage }"
          @click="isRegisterPage ? signup() : login()"
          >{{ title }}</b-button
        >
        <loader v-if="isSubmit"></loader>
        <p v-if="!isRegisterPage" class="mt-1 has-text-centered white">Hoặc</p>
        <div v-if="!isRegisterPage" class="is-flex flex-row item-center mt-1">
          <img-social
            :src-img="require('~/static/icons/facebook.png')"
            alt="facebook"
            :size="36"
            class="mr-1"
          />
          <img-social
            :src-img="require('~/static/icons/google-plus.png')"
            alt="google"
            :size="36"
          />
        </div>
        <p v-if="!isRegisterPage" class="mt-1 mb-2 has-text-centered white">
          Chưa có tài khoản ?&nbsp;&nbsp;
          <nuxt-link to="/auth/register" class="link">Đăng ký</nuxt-link>
        </p>
        <p v-if="isRegisterPage" class="mt-1 mb-2 has-text-centered white">
          Đã có tài khoản ?&nbsp;&nbsp;
          <nuxt-link to="/auth/login" class="link">Đăng nhập</nuxt-link>
        </p>
      </section>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '../inputs/BInputWithValidation'
import Loading from '../loading/Loading'
import Avatar from '../avatar'

export default {
  name: 'FormLogin',
  components: {
    ValidationObserver,
    BInputWithValidation,
    loader: Loading,
    'img-social': Avatar,
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
  width: 350px;
  height: auto;
  border-radius: 15px;
  -webkit-box-shadow: 4px 10px 15px 1px #000;
  -moz-box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.418);
  box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.42);
}
</style>
