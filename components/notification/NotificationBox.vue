<template>
  <div class="boxx">
    <div class="down-arrow"></div>
    <div class="box-title">
      Thông báo
      <a class="mark-as-read">Đánh dấu tất cả là đã đọc</a>
    </div>
    <vue-scroll :ops="ops">
      <div class="list-notifications">
        <noti-list :un-read="false"></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
        <noti-list></noti-list>
      </div>
    </vue-scroll>
    <div class="view-all">
      <a class="mark-as-read" href="/notifications">Xem tất cả thông báo</a>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import NotificationsList from './NotificationsList'
export default {
  components: {
    'vue-scroll': vuescroll,
    'noti-list': NotificationsList,
  },
  data() {
    return {
      ops: {
        rail: {
          opacity: '1',
          background: '#fff',
          border: 'none',
          specifyBorderRadius: '0px',
          size: '15px',
          gutterOfSide: '0px',
          keepShow: false,
        },
        bar: {
          background: '#3d0055a6',
          keepShow: true,
          size: '7px',
          minSize: 0.2,
          specifyBorderRadius: '5px',
        },
        scrollButton: {
          enable: false,
          background: '#cecece',
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800,
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
        },
      },
    }
  },
}
</script>

<style lang="css" scoped>
.down-arrow {
  position: absolute;
  margin-left: 5px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  top: -18px;
  right: 43px;
}
.boxx {
  max-height: 600px;
  min-height: 200px;
  width: 350px;
}
.box-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px 5px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid rgba(68, 68, 68, 0.253);
  color: #540474;
}
.mark-as-read {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 200;
  color: #540474;
}
.mark-as-read:hover {
  color: #ff7070;
  transition: all 0.5s;
}
.title {
  font-size: 16px;
  vertical-align: middle;
  padding-top: 15px;
}

.list-notifications {
  max-height: 320px;
  padding: 0 0 0 0;
}

.view-all {
  border-top: 1px solid rgba(68, 68, 68, 0.253);
  text-align: center;
  padding: 10px 0 0 0;
  color: #540474;
  font-weight: 200;
}
.view-all:hover {
  color: #ff7070;
  transition: all 0.5s;
}
</style>
