import { required, confirmed, length, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('email', {
  ...email,
  message: 'Email nhập không hợp lý',
})

extend('confirmed', {
  ...confirmed,
  message: 'Mật khẩu nhập lại chưa đúng',
})

extend('length', {
  ...length,
  message: 'This field must have 2 options',
})
