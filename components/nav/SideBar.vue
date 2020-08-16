<template>
  <section class="is-hidden-desktop">
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :fullwidth="fullwidth"
      :overlay="true"
      :open.sync="openSideLeft"
      class="is-primary"
    >
      <div>
        <img
          src="../../assets/icon/benzene.png"
          alt="CLABS.IO"
          class="side-bar-logo"
          @click="
            () => {
              this.$router.push('/')
            }
          "
        />
        <b-menu>
          <b-menu-list label="Menu">
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="HOME"
            ></nav-item>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="CHALLENGES"
            ></nav-item>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="LIVE EVENT"
            ></nav-item>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="UTILITIES"
            ></nav-item>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="NOTIFICATIONS"
            ></nav-item>
            <b-collapse
              v-for="(collapse, index) of collapses"
              :key="index"
              class="card"
              animation="slide"
              :open="isOpen == index"
              @open="isOpen = index"
            >
              <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button"
              >
                <p class="card-header-title">
                  {{ collapse.title }}
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
              <nav-item
                :is-mobile="true"
                path="/test"
                title="TEST1"
                :sub-nav="true"
              ></nav-item>
              <nav-item
                :is-mobile="true"
                path="/test"
                title="TEST2"
                :sub-nav="true"
              ></nav-item>
              <nav-item
                :is-mobile="true"
                path="/test"
                title="TEST3"
                :sub-nav="true"
              ></nav-item>
            </b-collapse>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :fullwidth="fullwidth"
      :overlay="true"
      :right="true"
      :open.sync="openSideRight"
      class="is-primary"
    >
      <div>
        <b-menu>
          <b-menu-list>
            <div class="label-for-menu-right is-flex flex-row py-10">
              <avatar :size="32" />
              <p class="user-name has-text-white font-100 ml-1 mt-1">
                @Mchemistry95
              </p>
            </div>
            <div class="label-for-menu-right is-flex flex-row py-10">
              <img
                src="../../assets/level/level-1.png"
                alt="level"
                class="level"
              />
              <progress-bar
                value="75/100"
                :width="140"
                :height="6"
                :percent="75"
                :inside-progress="false"
                :rounded="true"
                :show-value="true"
                class="ml-2 mt-1"
              ></progress-bar>
            </div>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="SETTING"
              icon="settings"
            ></nav-item>
            <nav-item
              :is-mobile="true"
              path="/auth/login"
              title="LOG OUT"
              icon="logout"
            ></nav-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <div
      class="nav-header-fixed is-flex flex-row"
      :class="{ 'is-hidden': openSideLeft || openSideRight }"
    >
      <a @click="openSideLeft = true">
        <img src="../../assets/icon/menu.png" alt="menu" class="menu-fixed" />
      </a>
      <img
        src="../../assets/icon/benzene.png"
        alt="logo"
        class="logo-fixed"
        @click="
          () => {
            this.$router.push('/')
          }
        "
      />
      <avatar
        :size="32"
        class="avatar-fixed"
        @click.native="
          () => {
            openSideRight = true
          }
        "
      />
    </div>
  </section>
</template>

<script>
import Avatar from '../avatar'
import Progress from '../progress'
import NavItem from './NavItem'

export default {
  components: {
    'nav-item': NavItem,
    avatar: Avatar,
    'progress-bar': Progress,
  },
  data() {
    return {
      openSideLeft: false,
      openSideRight: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
      isOpen: 0,
      collapses: [
        {
          title: 'Title 1',
          text: 'Text 1',
        },
      ],
    }
  },
}
</script>

<style scoped>
.nav-header-fixed {
  background-color: #6b048c;
  height: 50px;
  width: 100%;
  position: fixed;
  margin-bottom: 50px;
  top: 0;
  z-index: 9998;
  padding: 0 10px;
  justify-content: space-between;
}
.menu-fixed {
  width: 32px;
  height: 32px;
  margin-top: 9px;
  cursor: pointer;
}
.logo-fixed {
  margin-top: 9px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.side-bar-logo {
  margin: 0 auto;
  height: 64px;
  padding: 10px 10px 10px 5px;
  cursor: pointer;
}
.avatar-fixed {
  margin-top: 9px;
  cursor: pointer;
}
.label-for-menu-right {
  padding: 10px 0 10px 10px;
  z-index: 9999;
}
.user-name {
  font-size: 14px;
}
.level {
  width: 32px;
  height: 32px;
}
</style>
