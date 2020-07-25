<template>
  <ValidationObserver ref="observer">
    <!-- the "passes" function on the slot-scope only chains if the validation is successfull -->
    <!-- Making it easier to call directly in the template than to call `passes` on the observer component -->
    <section class="section">
      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|email"
        name="Email"
      >
        <b-field
          label="Email"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input v-model="email" type="email"></b-input>
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        vid="password"
        name="Password"
      >
        <b-field
          label="Password"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input v-model="password" type="password"></b-input>
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|confirmed:password"
        name="Password Confirmation"
      >
        <b-field
          label="Confirm Password"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input v-model="confirmation" type="password"></b-input>
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="Subject"
      >
        <b-field
          label="Subject"
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-select v-model="subject" placeholder="Select a subject">
            <option value>None</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </b-select>
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|length:2"
        name="Drinks"
      >
        <div class="block">
          <b-checkbox v-model="choices" native-value="Coffee"
            >Coffee</b-checkbox
          >
          <b-checkbox v-model="choices" native-value="Tea">Tea</b-checkbox>
          <b-checkbox v-model="choices" native-value="Soda">Soda</b-checkbox>
          <p class="has-text-danger">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <div class="buttons">
        <button class="button is-success" @click="validate().then(submit)">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit</span>
        </button>

        <button class="button" @click="resetForm">
          <span class="icon is-small">
            <i class="fas fa-redo"></i>
          </span>
          <span>Reset</span>
        </button>
      </div>
    </section>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'BuefyForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    email: '',
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
