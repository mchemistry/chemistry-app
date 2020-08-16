<template>
  <div>
    <b-navbar
      class="is-primary is-none-background"
      type="is-primary"
      transparent
      style="z-index: 9999;"
    >
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img class="logo" src="../../assets/images/logo.svg" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <nav-item path="/auth/login" icon="home" title="TRANG CHỦ"></nav-item>
        <nav-item title="BẢNG TUẦN HOÀN"></nav-item>
        <nav-item title="BẢNG TÍNH TAN"></nav-item>
        <nav-item
          icon="bell"
          title="THÔNG BÁO"
          class="is-hidden-desktop"
          path="/notifications"
        ></nav-item>
      </template>

      <template slot="end">
        <b-dropdown
          class="is-hidden-touch"
          aria-role="list"
          animation="ease-in-out"
          position="is-bottom-left"
          :max-height="400"
          @click.native="() => 0"
        >
          <badge
            slot="trigger"
            type="button"
            icon="bell"
            class="mr-1 is-hidden-touch"
          ></badge>
          <noti-box :loading="isLoading" class="dropdown-item"></noti-box>
        </b-dropdown>
        <avatar
          :size="30"
          style="margin-top: 15px;"
          class="is-hidden-touch"
          src-img="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/61827542_1137045079825001_383040469245886464_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=rat3kGVuPJAAX99EO2I&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=5b5143b1217c42439b9bb02915e0fb72&oe=5F5966FA"
        ></avatar>
        <b-navbar-dropdown label="Tân Dv" right>
          <nav-item
            :is-mobile="true"
            path="/auth/login"
            icon="settings"
            title="Tài khoản"
          ></nav-item>
          <nav-item
            :is-mobile="true"
            path="/auth/login"
            icon="logout"
            title="Đăng xuất"
          ></nav-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import NavItem from '../nav/NavItem'
import Badge from '../badge/Badge'
import Avatar from '../avatar'
import NotificationBox from '../notification/NotificationBox'
export default {
  components: {
    'nav-item': NavItem,
    badge: Badge,
    avatar: Avatar,
    'noti-box': NotificationBox,
  },
  data() {
    return {
      isLoading: false,
      getList: undefined,
      stopIt: false,
    }
  },
  methods: {
    // getNotifications() {
    //   this.getList = setInterval(() => {
    //     this.isLoading = false
    //     console.log('Check loading again: -> ' + this.isLoading)
    //     clearInterval(this.getList)
    //   }, 3000)
    //   this.isLoading = true
    //   // eslint-disable-next-line no-console
    //   console.log('check Loading -> ' + this.isLoading)
    // },
    // stopGetNotifications() {
    //   clearInterval(this.getList)
    //   this.getList = undefined
    // },
    // beforeDestroy() {
    //   clearInterval(this.getList)
    //   this.getList = undefined
    // },
  },
}
</script>
