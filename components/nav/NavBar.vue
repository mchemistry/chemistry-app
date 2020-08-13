<template>
  <div>
    <b-navbar class="nav-bg" type="is-primary" transparent>
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
          class="notifications"
          path="/notifications"
        ></nav-item>
      </template>

      <template slot="end">
        <b-dropdown
          class="badge"
          aria-role="list"
          animation="ease-in-out"
          position="is-bottom-left"
          :max-height="400"
        >
          <badge slot="trigger" type="button" icon="bell" class="badge"></badge>
          <noti-box class="dropdown-item"></noti-box>
        </b-dropdown>
        <avatar
          :size="30"
          class="avatar"
          src-img="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/61827542_1137045079825001_383040469245886464_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=rat3kGVuPJAAX99EO2I&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=5b5143b1217c42439b9bb02915e0fb72&oe=5F5966FA"
        ></avatar>
        <b-navbar-dropdown animation label="Tân Dv" right>
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
import Avatar from '../avatar/Avartar'
import NotificationBox from '../notification/NotificationBox'
export default {
  components: {
    'nav-item': NavItem,
    badge: Badge,
    avatar: Avatar,
    'noti-box': NotificationBox,
  },
}
</script>

<style lang="css" scoped>
.badge {
  margin-right: 10px;
}
.level {
  position: fixed;
  display: flex;
  flex-direction: row;
}
.level-center {
  text-align: center;
  width: 100%;
}
.mark-as-read {
  color: black;
}
.mark-as-read:hover {
  color: #ff7070;
  transition: all 0.5s;
}
.notifications {
  display: none;
}
.nav-bg {
  background-color: #6b048c;
  z-index: 9999;
}
.avatar {
  margin-top: 15px;
}
.drop-item {
  width: 350px;
}
.small-content {
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
}
.media {
  height: auto;
}
.media-content {
  height: auto;
}
@media only screen and (max-width: 1023px) {
  .notifications {
    display: block;
  }
  .badge {
    display: none;
  }
  .fix {
    padding-top: 0 !important;
  }
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
