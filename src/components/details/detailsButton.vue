<template>
  <div>
    <van-tabbar  fixed>
      <van-tabbar-item icon="chat-o">客服</van-tabbar-item>
      <van-tabbar-item :info="count" icon="shopping-cart-o" >购物车</van-tabbar-item>
      <van-tabbar-item class="btn1" :info="count">加入购物车</van-tabbar-item>
      <van-tabbar-item class="btn2" url="">立即购买</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        count:null
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.btn1{
    flex: 3;
    background: #ff8855;
    color: #fff;
    font-size: 20px;
    // font-weight: bold;
}
.btn2{
    flex: 3;
    color: #fff;
    font-size: 20px;
    background: red;
}
</style>