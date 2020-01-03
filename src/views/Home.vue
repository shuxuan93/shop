<template>
  <div class="home">
    <router-view></router-view>
    <feeter></feeter>
  </div>
</template>

<script>
import feeter from '../components/feeter/feeter'
export default {
  components: {
    feeter
  }
};
</script>
<style scoped lang='scss'>
</style>
