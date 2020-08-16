<template>
  <div
    :class="[
      type === 'danger'
        ? 'is-danger'
        : type === 'success'
        ? 'is-success'
        : 'is-primary',
    ]"
    class="p-1 mb-2 is-flex flex-row"
    style="border-radius: 10px;"
  >
    <b-icon
      :class="[type === '' ? 'is-hidden' : '', 'icon-information']"
      :icon="type === 'danger' ? 'exclamation' : 'check'"
      size="is-medium"
      :type="
        type === 'danger'
          ? 'is-danger'
          : type === 'success'
          ? 'is-success'
          : 'is-primary'
      "
    ></b-icon>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Infomation',
  props: {
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="css" scoped>
.message {
  color: white;
  background-color: transparent;
  font-size: 12px !important;
  margin-top: 6px;
  margin-bottom: 5px;
}
.icon-information {
  color: white !important;
  margin-right: 10px;
  height: 100%;
  top: 50%;
}
</style>
