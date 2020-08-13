<template>
  <div class="card">
    <div class="card-image">
      <b-skeleton height="140px" width="220px" class="fixed-img"></b-skeleton>
    </div>
    <div class="total-user">
      <b-skeleton height="24px" width="49px" :rounded="false"></b-skeleton>
    </div>
    <div class="hr"></div>
    <div class="card-content">
      <div class="card-title">
        <b-skeleton
          height="30px"
          width="180px"
          class="has-background-grey-lighter"
        ></b-skeleton>
      </div>
      <div class="card-title">
        <b-skeleton height="20px" width="180px"></b-skeleton>
      </div>
      <div class="card-title">
        <b-skeleton height="20px" width="180px"></b-skeleton>
      </div>
      <div class="btn">
        <b-skeleton height="40px" width="180px" rounded></b-skeleton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 220px;
  height: 340px;
  background-color: #3c0054;
  border-radius: 8px;
  order: 10;
}
.fixed-img {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.card-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
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
  order: 2;
  margin-top: 10px;
}
.hr {
  position: relative;
  border-top: 1px solid #ff7070;
  top: -0.1px;
}
.card-title,
.btn {
  margin-top: 10px;
}
</style>
