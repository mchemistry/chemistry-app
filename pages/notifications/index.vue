<template>
  <div>
    <client-only>
      <div class="title-notification">Thông báo</div>
      <hr class="hr" />
      <div class="container">
        <div v-if="!loading" class="list-notifications">
          <noti-list :un-read="false" :in-page="true" />
          <noti-list :in-page="true" />
          <noti-list :in-page="true" />
          <noti-list :in-page="true" />
          <noti-list :in-page="true" />
        </div>
        <section v-if="loading" class="section-loading">
          <noti-skeleton v-for="i in media" :key="i" />
        </section>
      </div>
      <div class="end"></div>
    </client-only>
  </div>
</template>

<script>
import NotificationsList from '../../components/notification/NotificationsList'
import NotificationSkeleton from '../../components/skeleton/NotificationSkeleton'

export default {
  layout: 'main',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'noti-list': NotificationsList,
    'noti-skeleton': NotificationSkeleton,
  },
  data() {
    return {
      media: 6,
      loading: false,
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.loading = false
    }, 5000)
    this.loading = true
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.container {
  background-color: #540474;
  padding: 10px;
  border-radius: 10px;
}
.hr {
  position: relative;
  height: 2px;
  background-color: rgba(189, 189, 189, 0.534);
  margin: 0 40px 40px 40px;
}

.title-notification {
  font-size: 30px;
  color: white;
  padding-top: 60px;
  margin-left: 40px;
}
.end {
  padding-bottom: 20px;
}

@media only screen and (max-width: 1023px) {
  .title-notification {
    text-align: center;
    margin: 0 auto;
    font-size: 26px;
    padding-top: 15px;
  }
  .container {
    margin: 40px !important;
  }
}
@media only screen and (max-width: 600px) {
  .title-notification {
    font-size: 24px;
  }
  .hr {
    margin: 0 20px 20px 20px;
  }
  .container {
    margin: 20px !important;
  }
}
@media only screen and (max-width: 400px) {
  .title-notification {
    font-size: 22px;
  }
  .hr {
    margin: 0 10px 10px 10px;
  }
  .container {
    margin: 10px !important;
  }
}
</style>
