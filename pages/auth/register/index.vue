<template>
  <FormLogin :isSignUpPage="active" title="Đăng ký" />
</template>

<script>
import FormLogin from '@/components/forms/FormLogin'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FormLogin },
  layout: 'login',
  data() {
    return {
      active: true,
    }
  },
}
</script>
