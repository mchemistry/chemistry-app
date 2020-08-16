<template>
  <div class="card">
    <div class="card-image">
      <img
        v-if="newEvent"
        src="../../assets/images/images/bookmark.png"
        alt="book mark"
        class="bookmark"
      />
      <figure class="image is-96x96">
        <img :src="imgEvent" alt="Chemistry Element" />
      </figure>
    </div>
    <div class="total-user is-small">
      <b-icon icon="account" class="icon-user" size="is-small"></b-icon>
      <p class="total-user__join">{{ totalUserJoin }}</p>
    </div>
    <div class="hr"></div>
    <p class="card-title">
      {{ eventTitle }}
    </p>
    <p class="time-left">THỜI GIAN KẾT THÚC</p>
    <div class="time">
      <div class="day">
        <p>07</p>
        <p class="fixed-time-text">Ngày</p>
      </div>
      <p class="fixed-colon">&nbsp;:&nbsp;</p>
      <div class="hour">
        <p>16</p>
        <p class="fixed-time-text">Giờ</p>
      </div>
      <p class="fixed-colon">&nbsp;:&nbsp;</p>
      <div class="minute">
        <p>39</p>
        <p class="fixed-time-text">Phút</p>
      </div>
    </div>
    <div class="join-button">
      <b-button rounded class="btn-secondary none-border ripple mt-1 w-2"
        >BẮT ĐẦU</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    newEvent: {
      type: Boolean,
      default: false,
    },
    totalUserJoin: {
      type: Number,
      default: 0,
    },
    eventTitle: {
      type: String,
      default: 'Event Title',
    },
    imgEvent: {
      type: String,
      default: 'Este.png',
    },
  },
}
</script>

<style scoped>
.bookmark {
  position: absolute;
  height: 60px;
  width: auto;
  top: -20px;
  left: -20px;
  order: 1;
}
.card {
  width: 220px;
  height: 335px;
  background-color: #3c0054;
  padding: 10px;
  border-radius: 8px;
  order: 10;
}
.card:hover {
  transition: all 0.3s;
}
.image {
  margin: 0 auto;
}
.total-user {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  color: #ff7070;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff7070;
  width: 50px;
  height: 25px;
  padding: 5px 10px 5px 10px;
  order: 2;
  margin-top: 40px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}
.hr {
  position: relative;
  border-top: 1px solid #ff7070;
  top: -1px;
}
.total-user__join {
  margin-left: 4px;
  margin-top: 2.5px;
  font-size: 12px;
}
.card-title {
  width: 100%;
  color: white;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
}
.time-left {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-align: center;
}
.time {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.fixed-colon {
  margin-bottom: 19px;
}
.fixed-time-text {
  font-weight: 100;
  font-size: 12px;
}
.join-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-start:hover {
  background-color: #de5d5d;
  border: 1px solid #ff7070;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
</style>
