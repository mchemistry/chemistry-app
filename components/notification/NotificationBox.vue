<template>
  <div class="boxx">
    <div class="box-title">
      Thông báo
      <a class="mark-as-read">Đánh dấu tất cả là đã đọc</a>
    </div>
    <vue-scroll :ops="ops">
      <div class="list-notifications">
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="unread"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="un-read"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="un-read"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="un-read"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="un-read"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="unread"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div class="noti">
          <div class="avatar">
            <avatar :size="48"></avatar>
            <span class="un-read"></span>
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
      </div>
    </vue-scroll>
    <div class="view-all">
      <a class="mark-as-read">Xem tất cả thông báo</a>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
import Avatar from '../avatar/Avartar'
export default {
  components: {
    avatar: Avatar,
    'vue-scroll': vuescroll,
  },
  data() {
    return {
      ops: {
        rail: {
          opacity: '0.2',
          background: '#3d00553b',
          border: '1px solid #3d00553b',
          specifyBorderRadius: '5px',
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
.boxx {
  max-height: 400px;
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
.avatar {
  width: 80px;
  display: flex;
  flex-direction: row;
}
.unread {
  position: relative;
  top: 0;
  left: -13px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff7070;
  z-index: 999;
}
.list-notifications {
  max-height: 320px;
  padding: 0 0 0 10px;
  margin: 5px 0 5px 0;
}
.noti {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.view-all {
  border-top: 1px solid rgba(68, 68, 68, 0.253);
  text-align: center;
  padding: 10px 0 10px 0;
  color: #540474;
  font-weight: 200;
}
.view-all:hover {
  color: #ff7070;
  transition: all 0.5s;
}
</style>
