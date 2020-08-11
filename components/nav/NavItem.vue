<template>
  <div>
    <b-navbar-item
      tag="router-link"
      :to="path"
      class="nav-item"
      :class="{ active: isActive }"
    >
      <b-icon
        v-if="isMobile"
        size="16"
        class="media-left icon"
        :icon="icon"
      ></b-icon>
      <p>{{ title }}</p></b-navbar-item
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: '/',
    },
  },
}
</script>
<style lang="css" scoped>
.nav-item {
  font-weight: 500;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100%;
  color: white;
  margin: 0 10px;
  transition: color 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
}
.nav-item::before {
  transition: all 0.5s;
}
.nav-item::after {
  transition: all 0.5s;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '';
  background: #ff7070;
}
.nav-item:hover {
  color: #ff7070;
  transition: all 0.5s;
}
.nav-item:hover::after {
  width: 100%;
}
.active {
  color: #ff7070;
}
@media only screen and (max-width: 1023px) {
  .icon {
    padding: 0 0 6px 0;
    margin: 0 10px 0 0;
  }
  .nav-item {
    background: #540474;
    font-size: 14px;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    transition: all 0.5s;
  }
  .nav-item:hover {
    background: #51046f;
    color: #ff7070;
    padding-left: 20px;
  }
  .nav-item::after {
    opacity: 0;
  }
}
</style>
