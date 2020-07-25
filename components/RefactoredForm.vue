<template>
  <div class="card" :class="{ fixedCard: isActive }">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section class="section custom-field" :class="{ fixedTop: isActive }">
        <p class="title">{{ title }}</p>
        <BInputWithValidation
          v-model="email"
          rounded
          rules="required|email"
          type="email"
          label="Email"
          placeholder="Nhập vào email..."
        />
        <BInputWithValidation
          v-if="title === 'Đăng ký'"
          v-model="username"
          rounded
          rules="required|username"
          type="username"
          label="Tên tài khoản"
          placeholder="Nhập vào tên tài khoản..."
        />
        <BInputWithValidation
          v-model="password"
          rules="required|passwords"
          password-reveal
          rounded
          type="password"
          label="Mật khẩu"
          vid="password"
          placeholder="Nhập vào mật khẩu..."
        />

        <nuxt-link v-if="title === 'Đăng nhập'" to="/" class="forgot-password"
          >Quên mật khẩu ?</nuxt-link
        >
        <BInputWithValidation
          v-if="title === 'Đăng ký'"
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
        <p v-if="title === 'Đăng nhập'" class="or">Hoặc</p>
        <div v-if="title === 'Đăng nhập'" class="social">
          <img src="../static/facebook.png" alt="facebook" class="social-img" />
          <img
            src="../static/google-plus.png"
            alt="google"
            class="social-img"
          />
        </div>
        <p v-if="title === 'Đăng nhập'" class="to-signup">
          Chưa có tài khoản ?
          <nuxt-link to="/signup">Đăng ký</nuxt-link>
        </p>
        <p v-if="title === 'Đăng ký'" class="to-signup">
          Đã có tài khoản ?
          <nuxt-link to="/login">Đăng nhập</nuxt-link>
        </p>
      </section>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from './inputs/BInputWithValidation'

export default {
  name: 'BuefyForm',
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'isActive'],
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
.fixedCard {
  height: 560px;
}
.section {
  display: flex;
  flex-direction: column;
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
  padding: 1px;
}
.fixedTop {
  margin-top: 1px;
}
.forgot-password {
  margin-top: 5px;
  margin-right: 1px;
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
}
</style>
