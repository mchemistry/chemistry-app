<template>
  <ValidationProvider
    v-slot="{ errors, valid }"
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
  >
    <b-field
      v-if="login"
      v-bind="$attrs"
      :message="errors"
      :type="{ 'is-danger': errors[0] }"
    >
      <b-input v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
    <b-field
      v-else
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="errors"
    >
      <b-input v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: { ValidationProvider },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: null,
    },
    login: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
}
</script>
