<template>
  <div class="badge">
    <b-icon class="icon-badge" :icon="icon"></b-icon>
    <b-tag v-if="totalNotifications !== 0" class="b-tag-badge" is-small>{{
      totalNotifications
    }}</b-tag>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bell',
    },
    totalNotifications: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
.badge {
  background: transparent;
  height: 100%;
}
.icon-badge {
  cursor: pointer;
  margin-top: 17px;
  padding-right: 20px;
}
.b-tag-badge {
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  top: -15px;
  left: -20px;
  background-color: #ff7070;
  color: white;
  border-radius: 50%;
}
</style>
