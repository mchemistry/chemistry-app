<template>
  <div class="card is-primary-darker">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section
        class="is-flex flex-column m0-auto mt-2 mb-3 p-0"
        style="width: 280px;"
      >
        <p class="title-big">Thay đổi mật khẩu</p>
        <avatar
          :src-img="'https://image.flaticon.com/icons/svg/3231/3231474.svg'"
          :size="40"
          class="m0-auto mb-2"
          alt="avatar"
        />
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
          class="mt-1"
        />
        <b-button
          v-if="!isLoading"
          :disabled="invalid"
          :icon-left="success ? 'arrow-left' : ''"
          class="btn-secondary mt-2 mb-2 none-border"
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
import Avatar from '../avatar'

export default {
  name: 'FormLogin',
  components: {
    ValidationObserver,
    BInputWithValidation,
    Loading,
    Information,
    avatar: Avatar,
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
  width: 350px;
  height: auto;
  border-radius: 15px;
  -webkit-box-shadow: 4px 10px 15px 1px #000;
  -moz-box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.418);
  box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.42);
}
</style>
