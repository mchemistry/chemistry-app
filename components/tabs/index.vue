<template>
  <div>
    <div class="tabs is-medium is-fullwidth">
      <ul v-for="(title, index) in titles" :key="index">
        <li
          class="tabs-item ripple"
          :class="{ 'is-active': $route.fullPath === router[index] }"
        >
          <a
            :href="router[index]"
            class="tabs-title not-active"
            :class="{ 'is-active': $route.fullPath === router[index] }"
            >{{ title }}</a
          >
          <pulse v-if="title === 'Đang diễn ra'" class="live"></pulse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Pulse from '../pulse'
export default {
  name: 'Tabs',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    pulse: Pulse,
  },
  data() {
    return {
      titles: ['Đang diễn ra', 'Sắp diễn ra', 'Đã kết thúc'],
      router: [
        '/challenges/live_event',
        '/challenges/comming_soon',
        '/challenges/challenges_over',
      ],
    }
  },
}
</script>
<style scoped>
.live {
  position: relative;
  margin-bottom: 3px;
  left: -30px;
}
.tabs ul {
  border: none !important;
}
.tabs-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #5d047e !important;
}
.is-active {
  background-color: #540474 !important;
  color: white !important;
  transition: all 0.3s;
}
.tabs-title {
  font-weight: 500 !important;
  width: 100%;
}
@media screen and (max-width: 650px) {
  .tabs-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #5d047e !important;
    color: white !important;
  }
  .tabs-title {
    font-size: 14px;
    font-weight: 400;
  }
  .live {
    margin-bottom: 0;
  }
  .is-active {
    background-color: #540474 !important;
    color: white !important;
    transition: all 0.3s;
  }
}
@media screen and (max-width: 580px) {
  .live {
    left: -13px;
    top: -1px;
  }
  .is-active {
    background-color: #540474 !important;
    color: white !important;
    transition: all 0.3s;
  }
}
</style>
