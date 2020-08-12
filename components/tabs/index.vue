<template>
  <div>
    <div class="tabs is-medium">
      <ul>
        <li class="is-active">
          <a class="tabs-title">Đang diễn ra</a>
          <span class="down-arrow"></span>
        </li>
        <li>
          <a>Sắp diễn ra</a>
        </li>
        <li>
          <a>Đã kết thúc</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.container {
  background: #3c0054;
  margin-top: -55px;
}
.tabs-fixed {
  background-color: #5d047e;
}
.is-active {
  background-color: #540474;
  color: white !important;
}
.tabs-title {
  color: white !important;
  font-weight: 500 !important;
}
.down-arrow::before {
  content: '';
  border-top: 20px solid #c00;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
</style>
