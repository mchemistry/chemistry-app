<template>
  <div class="card">
    <div class="card-image">
      <b-skeleton
        height="140px"
        width="220px"
        class="none-border-bottom-radius"
      ></b-skeleton>
    </div>
    <div class="item-center flex-row mt-1" style="width: 50px; height: 25px;">
      <b-skeleton height="24px" width="49px" :rounded="false"></b-skeleton>
    </div>
    <hr class="hr is-relative p-0 mx-1 mb-1" style="top: -0.1px;" />
    <div class="is-flex flex-column has-text-centered item-center">
      <div class="card-title">
        <b-skeleton
          height="30px"
          width="180px"
          class="has-background-grey-lighter"
        ></b-skeleton>
      </div>
      <div class="mt-1">
        <b-skeleton height="20px" width="180px"></b-skeleton>
      </div>
      <div class="mt-1">
        <b-skeleton height="20px" width="180px"></b-skeleton>
      </div>
      <div class="mt-1">
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
}
</style>
