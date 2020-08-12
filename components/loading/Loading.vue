<template>
  <div id="loaderSvgWrapper" :class="[isLoginPage ? 'fixed-loading' : '']">
    <svg
      id="preLoader"
      xmlns:svg="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100px"
      height="100px"
    >
      <path
        id="T1"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="m 58.26475,43.628481 15.7247,-27.287018 -31.4936,0.02553 z"
      />
      <path
        id="T2"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="m 58.26475,43.628481 31.4936,-0.02553 -15.7689,-27.261492 z"
      />
      <path
        id="T3"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="M 58.26475,43.628481 74.03365,70.88997 89.75835,43.602954 Z"
      />
      <path
        id="T4"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="M 58.26475,43.628481 42.54006,70.915503 74.03365,70.889973 Z"
      />
      <path
        id="T5"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="m 58.26475,43.628481 -31.49359,0.02553 15.7689,27.261491 z"
      />
      <path
        id="T6"
        style="
          stroke-width: 0.26458332px;
          stroke-linecap: butt;
          stroke-linejoin: miter;
        "
        d="M 58.26475,43.628481 42.49585,16.366995 26.77116,43.654011 Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    isLoginPage() {
      const name = this.$route.name + ''
      const check = name.split('-')
      // eslint-disable-next-line no-console
      console.log(check[1] === 'login')
      if (check[1] === 'login') return true
      return false
    },
  },
}
</script>

<style lang="css" scoped>
#loaderSvgWrapper {
  background: transparent;
  z-index: 99;
  width: 55px;
  height: 55px;
  margin: 0 auto;
  margin-top: -15px;
  margin-bottom: 15px;
}
.fixed-loading {
  margin-left: 106px !important;
}
#preLoader {
  margin: 0 auto;
  width: 100%;
}
path {
  fill: #6b048c;
  stroke: #6b048c;
}
#T1 {
  animation: visible 2s ease 0.2s infinite;
}
#T2 {
  animation: visible 2s ease 0.4s infinite;
}
#T3 {
  animation: visible 2s ease 0.6s infinite;
}
#T4 {
  animation: visible 2s ease 0.8s infinite;
}
#T5 {
  animation: visible 2s ease 1s infinite;
}
#T6 {
  animation: visible 2s ease 1.2s infinite;
}
@keyframes visible {
  0% {
    opacity: 1;
    stroke-opacity: 1;
  }
  50% {
    opacity: 0;
    stroke-opacity: 0;
  }
  100% {
    opacity: 1;
    stroke-opacity: 1;
  }
}
</style>
