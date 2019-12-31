<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div>
        <div class="top">
          <shoppingMall></shoppingMall>
          <top></top>
          <floor></floor>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import shoppingMall from "../components/shoppingMall/shoppingMall";
import top from "../components/top/top";
import floor from '../components/top/floor'
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    shoppingMall,
    top,
    floor
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
