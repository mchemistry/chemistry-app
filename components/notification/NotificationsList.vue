<template>
  <div>
    <div class="noti" :class="{ 'bg-unread': unRead }">
      <div class="noti-avatar">
        <avatar :size="48" class="avatar"></avatar>
        <span class="unread" :class="{ 'unread-hide': !unRead }"></span>
      </div>
      <div class="noti-content">
        <p
          class="text-content"
          :style="{ 'max-width': maxWidth }"
          :class="{ 'text-content-fixed': inPage }"
        >
          <a :href="urlSender" class="noti-sender"> {{ sender }} - </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          fkdfkdnfkdnfkndkfnkdnfkd nfkdnkfndkfnkdnfkdnfkndkfkdfkd.
        </p>
        <div class="noti-time" :class="{ 'noti-time-fixed': inPage }">
          <b-icon size="is-small" icon="clock" class="time-icon"></b-icon>
          <p class="time-leap" :class="{ 'time-leap-fixed ': inPage }">
            Sep 27, 2019 at 04:50 AM
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../avatar'
export default {
  components: {
    avatar: Avatar,
  },
  props: {
    unRead: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: Number,
      default: 270,
    },
    sender: {
      type: String,
      default: 'Tân Dv',
    },
    urlSender: {
      type: String,
      default: 'https://www.facebook.com/mrbenzene95',
    },
    inPage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="css" scoped>
.bg-unread {
  background-color: #ff707060;
}
.bg-unread:hover {
  background-color: #ff70703f !important;
}
.noti {
  min-height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: black;
  vertical-align: center;
  border-bottom: 1px dashed rgba(165, 165, 165, 0.616);
}
.noti:hover {
  background-color: rgba(204, 204, 204, 0.24);
  transition: all 0.5s;
  color: rgb(68, 68, 68);
}
.noti-content {
  color: rgb(0, 0, 0);
}
.noti-sender {
  font-weight: 500;
  color: #ff7070;
}
.noti-sender:hover {
  color: #ff7070;
  transition: all 0.5s;
}
.noti-time {
  bottom: 5px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  color: rgb(124, 124, 124);
}
.noti-time-fixed {
  color: rgba(190, 190, 190, 0.8);
}
.time-icon {
  height: 100%;
}
.avatar {
  width: 48px;
  height: 48px;
}
.noti-avatar {
  height: 60px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  padding-left: 10px;
}
.time-leap {
  font-size: 12px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 3px;
}
.time-leap-fixed {
  margin-top: 5px;
}
.text-content {
  padding: 5px 0 0 0;
  overflow-wrap: break-word;
}
.text-content-fixed {
  color: rgba(255, 255, 255, 0.7);
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
.unread-hide {
  background-color: transparent;
}
</style>
