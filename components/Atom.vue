<template>
  <div class="proton">
    <p class="element">He</p>
    <div class="electron1"></div>
    <div class="electron2"></div>
    <div class="electron3"></div>
    <div class="electron4"></div>
    <div class="electron5"></div>
    <div class="electron6"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.proton {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #660f8b;
  border-radius: 50%;
  left: 25%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(10, 9, 17, 0.3);
}
.electron1 {
  width: 20px;
  height: 20px;
  position: absolute;
  animation: rotation 3s infinite linear;
  border-radius: 50%;
  padding: 19.6px;
  border: 1px solid silver;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.electron1::before {
  content: '';
  width: 5px;
  height: 5px;
  background-color: deeppink;
  position: absolute;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  margin: 51px;
}
.electron1::after {
  content: '';
  width: 5px;
  height: 5px;
  background-color: deeppink;
  position: absolute;
  left: -46px;
  top: -50px;
  border-radius: 50%;
  margin: 51px;
}

@keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
.element {
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 3px;
}
</style>
