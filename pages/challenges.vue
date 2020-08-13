<template>
  <div id="challenge">
    <div>
      <tabs class="fixed-tabs"></tabs>
    </div>
    <div class="main">
      <div id="live">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../components/tabs'
export default {
  layout: 'main',
  components: {
    tabs: Tabs,
  },
}
</script>
<style scoped>
#challenge {
  padding-top: 60px;
}
.fixed-tabs {
  margin: 0 100px;
}
.main {
  background-color: #540474;
  min-height: 100vh;
  margin: 0 100px;
}
#live {
  padding: 40px 30px 0 30px;
}
@media screen and (max-width: 1023px) {
  .main {
    margin: 0 40px;
  }
  .fixed-tabs {
    margin: 0 40px 0 40px;
  }
}
@media screen and (max-width: 650px) {
  .main {
    margin: 0 20px;
  }
  .fixed-tabs {
    margin: 0 20px 0 20px;
  }
}
@media screen and (max-width: 500px) {
  .main {
    margin: 0 20px;
  }
  .fixed-tabs {
    margin: 0 20px 0 20px;
  }
}
</style>
