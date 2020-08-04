<template>
  <div>
    <b-navbar class="nav-bg" type="is-primary" shadow transparent>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img class="logo" src="../assets/images/logo.svg" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#" class="name-item duration-300 ease-in-out"
          >Home</b-navbar-item
        >
        <b-navbar-item href="#" class="name-item duration-300 ease-in-out"
          >Documentation</b-navbar-item
        >
      </template>

      <template slot="end">
        <img
          src="../static/avatar/default-avatar.png"
          alt="avatar"
          class="avatar"
        />
        <b-navbar-dropdown label="Tân Dv" right class="fixed-text">
          <b-navbar-item href="#" class="nav-items">
            <b-icon class="media-left" icon="settings"></b-icon>
            <p class="_fixed-text">Cài đặt</p>
          </b-navbar-item>
          <b-navbar-item href="#" class="nav-items">
            <b-icon class="media-left" icon="logout"></b-icon>
            <p class="_fixed-text">Đăng xuất</p>
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<style scoped>
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-top: 11px;
}
.nav-items {
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 1023px) {
  .avatar {
    display: none;
  }
  ._fixed-text {
    top: 5px;
  }
  .duration-300 {
    transition-duration: 0.3s;
  }

  .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
