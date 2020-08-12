<template>
  <div class="card">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section class="section custom-field">
        <p class="title">Khôi phục mật khẩu</p>
        <b-icon
          class="icon-password"
          icon="lock"
          size="is-large"
          type="is-primary"
        >
        </b-icon>
        <Information :message="message" :type="type"></Information>
        <BInputWithValidation
          v-if="success === null"
          v-model="email"
          rounded
          :rules="'required|email'"
          type="email"
          placeholder="Nhập vào email khôi phục..."
          icon="email"
        />
        <b-button
          v-if="!isLoading"
          :icon-left="success === null ? '' : 'arrow-left'"
          :disabled="success === null ? invalid : false"
          class="is-primary btn-login"
          rounded
          @click="
            success === null
              ? resetPassword()
              : success
              ? goSignInPage()
              : retypeEmail()
          "
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
import Loading from '../loading/Loading'
import Information from '../information/Information'

export default {
  name: 'FormSendEmailReset',
  components: {
    ValidationObserver,
    BInputWithValidation,
    Loading,
    Information,
  },
  data: () => ({
    email: '',
    isLoading: false,
    type: '',
    message:
      'Vui lòng nhập vào email bạn đã đăng ký, chúng tôi sẽ gửi cho bạn một đường link khôi phục lại mật khẩu.',
    textButton: 'Lấy lại mật khẩu',
    success: null,
  }),
  methods: {
    resetPassword() {
      setTimeout(() => {
        this.isLoading = false
        this.success = true
        this.type = 'success'
        this.textButton = 'Quay về trang đăng nhập'
        this.message = `Chúng tôi vừa gửi cho bạn một đường link khôi phục mật khẩu vào emai ${this.email}. Nếu không nhận được đường link khôi phục, vui lòng kiểm tra tại thư mục spam.`
        // this.$buefy.toast.open({
        //   message: 'Đăng nhập thành công!',
        //   type: 'is-success',
        // })
      }, 3000)
      this.isLoading = true
    },
    retypeEmail() {
      this.email = ''
      this.type = ''
      this.message =
        'Vui lòng nhập vào email bạn đã đăng ký, chúng tôi sẽ gửi cho bạn một đường link khôi phục lại mật khẩu.'
      this.textButton = 'Lấy lại mật khẩu'
      this.success = null
    },
    goSignInPage() {
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
  width: 400px;
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
.hide {
  display: none;
}
.icon-password {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: -8px;
}
.title {
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #6b048c;
}
.custom-field {
  width: 360px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1px;
  margin-bottom: 40px;
}
.btn-login {
  width: 100%;
  margin-top: 15px;
}
</style>
