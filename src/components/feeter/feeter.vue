<template>
  <div>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item name="about" icon="wap-home-o" @click="goto('/')">首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="wap-nav" @click="goto('/category')">分类</van-tabbar-item>
      <van-tabbar-item name="shoppingCart" icon="shopping-cart" :info="key">购物车</van-tabbar-item>
      <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:'about',
      key:null
    };
  },
  components: {},
  methods: {
    goto(path){
      this.$router.push(path)
      
    },
  },
  mounted() {
    this.active=this.$route.name
  },
  watch: {
    $route(val){
      this.active=this.$route.name
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>