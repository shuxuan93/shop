<template>
  <div>
    <div class="goBack" @click="$router.back()">
      <van-icon name="arrow-left" size="30px" />
    </div>
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img :src="obj.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>{{obj.name}}</div>
    <div>￥{{obj.present_price}}</div>
    <div class="box3">
      <div>运费：0</div>
      <div>剩余：{{obj.amount}}</div>
      <div>点击收藏</div>
    </div>
    <div class="box4">
      <div>
        <van-icon name="shop-o" />有赞的店
      </div>
      <div>
        进入店铺
        <van-icon name="arrow" />
      </div>
    </div>
    <div>
      <van-tabs>
        <van-tab title="商品详情">
          <div v-html="obj.detail"></div>
        </van-tab>
        <van-tab title="商品评论" >
          <div>

          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}
    };
  },
  components: {},
  methods: {
    getDetail(id, page = 1) {
      this.$api
        .getDetail(this.$route.query.goodsId, (page = 1))
        .then(res => {
          this.obj = res.goods.goodsOne;

          console.log(this.obj.detail);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // check(title){
    //      this.$toast(title);
    // }
  },
  mounted() {
    this.getDetail();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goBack {
  position: fixed;
  top: 5px;
  left: 5px;
  padding: 10px 0 0 10px;
  z-index: 9999;
  .van-icon {
    color: #fff;
    background: rgba(136, 136, 136, 0.8);
    border-radius: 50%;
  }
}
.van-swipe {
  img {
    width: 375px;
  }
}
.box3 {
  display: flex;
  div {
    flex: 1;
  }
}
.box4 {
  display: flex;
  div {
    flex: 1;
  }
}
</style>