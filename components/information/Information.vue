<template>
  <div
    :class="[
      type === 'danger'
        ? 'is-danger'
        : type === 'success'
        ? 'is-success'
        : 'is-primary',
      'information',
    ]"
  >
    <b-icon
      :class="[type === '' ? 'hide' : '', 'icon-information']"
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
.information {
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}
.hide {
  display: none;
}
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
.is-primary {
  background-color: #6b048c;
}
.is-success {
  background-color: hsl(141, 71%, 48%);
}
.is-danger {
  background-color: hsl(348, 100%, 61%);
}
</style>
