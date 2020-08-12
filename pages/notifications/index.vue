<template>
  <div>
    <client-only>
      <div class="title-notification">Thông báo</div>
      <hr class="hr" />
      <div class="container">
        <div v-if="!loading" class="list-notifications">
          <noti-list :un-read="false" :in-page="true"></noti-list>
          <noti-list :in-page="true"></noti-list>
          <noti-list :in-page="true"></noti-list>
          <noti-list :in-page="true"></noti-list>
          <noti-list :in-page="true"></noti-list>
        </div>
        <section v-if="loading" class="section-loading">
          <article v-for="i in media" :key="i" class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <b-skeleton circle width="48px" height="48px"></b-skeleton>
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <b-skeleton height="60px"></b-skeleton>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
      <div class="end"></div>
    </client-only>
  </div>
</template>

<script>
import NotificationsList from '../../components/notification/NotificationsList'
export default {
  layout: 'main',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'noti-list': NotificationsList,
  },
  data() {
    return {
      media: 4,
      loading: false,
    }
  },
  mounted() {
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
  }
}
</style>
