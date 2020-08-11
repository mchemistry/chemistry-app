<template>
  <div class="card">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section class="section custom-field">
        <p class="title">Thay đổi mật khẩu</p>
        <img :src="imgAvatar" alt="avatar" class="avatar" />
        <Information
          v-if="success"
          type="success"
          :message="message"
        ></Information>
        <BInputWithValidation
          v-if="success === null"
          v-model="password"
          rules="required|passwords"
          password-reveal
          rounded
          type="password"
          label="Mật khẩu mới"
          vid="password"
          placeholder="Nhập vào mật khẩu mới..."
          icon="lock"
        />
        <BInputWithValidation
          v-if="success === null"
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
          v-if="!isLoading"
          :disabled="invalid"
          :icon-left="success ? 'arrow-left' : ''"
          class="is-primary btn-login"
          rounded
          @click="success ? gotoLogin() : resetPassword()"
          >{{ textButton }}</b-button
        >
        <Loading v-if="isLoading"></Loading>
      </section>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '../inputs/BInputWithValidation'
import Information from '../information/Information'
import Loading from '../loading/Loading'

export default {
  name: 'FormLogin',
  components: {
    ValidationObserver,
    BInputWithValidation,
    Loading,
    Information,
  },
  props: {
    isExpired: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    password: '',
    confirmation: '',
    success: null,
    isLoading: false,
    textButton: 'Đổi mật khẩu',
    imgAvatar: 'https://image.flaticon.com/icons/svg/3231/3231474.svg',
    message: '',
  }),
  mounted() {
    // this.isExpired = true
    // this.$emit('expired', this.isExpired)
    // if (this.isExpired) this.$router.push('/auth/password_reset')
  },
  methods: {
    resetPassword() {
      setTimeout(() => {
        this.isLoading = false
        this.textButton = 'Quay lại đăng nhập'
        this.success = true
        this.message =
          'Thay đổi mật khẩu thành công! Ấn nút bên dưới để quay lại trang đăng nhập'
      }, 3000)
      this.isLoading = true
    },
    gotoLogin() {
      this.$router.push('/auth/login')
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
  font-family: 'Varela Round', sans-serif !important;
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
  margin-bottom: 40px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid violet;
  margin: 0 auto;
  margin-top: -10px;
  margin-bottom: 20px;
}
.btn-login {
  width: 100%;
  margin-top: 15px;
}
.hide {
  display: none;
}
</style>
