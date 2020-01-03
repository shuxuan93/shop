<template>
  <div>
    <div>热销商品</div>
    <div class="goods">
      <van-grid :column-num="2">
        <van-grid-item v-for="item in arr" :key="item.id" @click="goto(item.goodsId)">
          <van-image :src="item.image" />
          <p class="goodsName">{{item.name}}</p>
          <p>
            <span>￥{{item.price}}</span>
            <span class="mallPrice">￥{{item.mallPrice}}</span>
          </p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          this.arr = res.data.hotGoods;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goto(item){
        this.$router.push({name:'details',query:{goodsId:item}})
    } 
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goods {
  width: 100%;
  p {
    color: #e13a33;
  }
}
.goodsName {
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mallPrice {
  text-decoration: line-through;
  color: #aaa; 
  font-size: 12px;
}
</style>