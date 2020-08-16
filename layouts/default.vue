<template>
  <div class="is-primary" style="min-height: 100vh;">
    <side-bar />
    <nuxt />
  </div>
</template>

<script>
import SideBar from '../components/nav/SideBar'

export default {
  name: 'Default',
  'side-bar': SideBar,
}
</script>
