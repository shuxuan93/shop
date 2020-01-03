<template>
  <div>
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(item, index) in imagesdata"
          :key="index"
          @click="goto(item.goodsId)"
        >
          <img :src="item.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="category" name="category">
      <van-grid :column-num="5" clickable border:flase>
        <van-grid-item
          v-for="(item,index) in list"
          :key="index"
          :icon="item.image"
          :text="item.mallCategoryName"
          @click="go(item.mallCategoryId)"
        />
      </van-grid>
    </div>
    <div v-if="arr.advertesPicture !=='' " class="picture">
      <img :src="PICTURE_ADDRESS" />
    </div>
    <div>
      <p class="recommendTitel">商品推荐</p>
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="recommendBox">
            <div class="recommend" v-for="item in recommend" :key="item.goodsId">
              <img class="img" :src="item.image" alt />
              <p class="goodsName">{{item.goodsName}}</p>
              <p class="price">
                <span>￥{{item.price}}</span>
                <span class="mallPrice">￥{{item.mallPrice}}</span>
              </p>
              <div class="btn">
                <div class="shopcart">
                  <van-icon size="26px" name="shopping-cart-o" />
                </div>
                <div class="check" @click="goto(item.goodsId)">查看详情</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      arr: {},
      list: [],
      imagesdata: [],
      recommend: [],
      PICTURE_ADDRESS: ""
    };
  },
  components: {},
  methods: {
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          this.arr = res.data;
          this.PICTURE_ADDRESS = res.data.advertesPicture.PICTURE_ADDRESS;
          this.list = res.data.category;
          this.imagesdata = res.data.slides;
          this.recommend = res.data.recommend;
          this.mallCategoryId=res.data.category.mallCategoryId
          console.log(this.mallCategoryId);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goto(item) {
      console.log(item);
      this.$router.push({ name: "details", query: { goodsId: item } });
    },
    go(item) {
      console.log(item);
      this.$router.push({ name: "category", params: { mallCategoryId: item } });
    },
    flash() {
      this.bs = new BScroll(".wrapper", {
        scrollX: true,
        click: true
      });
    }
  },
  mounted() {
    this.getRecommend();
    this.flash();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-swipe {
  margin-top: 5px;
  width: 100%;
  img {
    width: 375px;
  }
}
.category {
  width: 100%;
  margin: 5px 0;
  .van-grid {
    // border: 1px solid rebeccapurple;
    background: white;
    border-radius: 10px;
    height: 100px;
    margin: 0 10px;
    .van-grid-item {
      margin-top: 10px;
      height: 80px;
    }
  }
}
.recommendTitel {
  height: 20px;
  background: #fff;
  margin-top: 10px;
  padding-left: 10px;
}
.picture {
  width: 100%;
  img {
    width: 375px;
  }
}
.wrapper {
  width: 100%;
  background: #fff;
  .content {
    width: 2125px;
  }
}
.recommendBox {
  width: 125px;
  display: flex;
}
.recommend {
  p {
    width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img {
    width: 125px;
  }
}
.goodsName {
  font-size: 16px;
}
.mallPrice {
  text-decoration: line-through;
  color: #aaa;
  font-size: 12px;
}
.btn {
  display: flex;
  width: 100%;
  height: 30px;
  line-height: 30px;
  .shopcart {
    margin-left: 20px;
    background: #feca3a;
    color: #fff;
    width: 30px;
    border-radius: 5px 0 0 5px;
  }
  .check {
    background: red;
    color: #fff;
    border-radius: 0 5px 5px 0;
  }
}
</style>