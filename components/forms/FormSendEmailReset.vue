<template>
  <div class="card is-primary-darker">
    <ValidationObserver ref="observer" v-slot="{ invalid }">
      <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
      <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
      <section
        class="is-flex flex-column m0-auto p-0 mt-2 mb-3"
        style="width: 360px;"
      >
        <p class="title-big">Khôi phục mật khẩu</p>
        <b-icon
          class="m0-auto has-text-white"
          icon="lock"
          size="is-large"
          type="is-primary"
        >
        </b-icon>
        <Information :message="message" :type="type" class="mt-2"></Information>
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
          class="btn-secondary none-border mt-2 mb-3"
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
        <Loading v-if="isLoading" class="mb-2"></Loading>
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
        this.type = 'danger'
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
  width: 400px;
  height: auto;
  border-radius: 15px;
  -webkit-box-shadow: 4px 10px 15px 1px #000;
  -moz-box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.418);
  box-shadow: 4px 10px 15px 1px rgba(0, 0, 0, 0.42);
}
</style>
