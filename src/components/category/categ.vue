<template>
  <div class="categoryBox">
    <div class="category">
      <van-sidebar v-model="mallCategoryId">
        <van-sidebar-item
          v-for="item in category"
          :key="item.id"
          :title="item.mallCategoryName"
          @click="change(item.mallCategoryId)"
        />
      </van-sidebar>
    </div>
    <div>
      <van-tabs :ellipsis="false" :swipe-threshold="4" @click="onClick">
        <van-tab v-for="item in bxMallSubDto" :key="item.id" :title="item.mallSubName">
          <van-card
            v-for="item in list"
            :key="item.id"
            num="1"
            :price="item.present_price"
            desc="描述信息"
            :title="item.name"
            :thumb="item.image_path"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      mallCategoryId: 0,
      category: [],
      bxMallSubDto: [],
      list: []
    };
  },
  components: {},
  methods: {
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          this.category = res.data.category;
          this.bxMallSubDto =
            res.data.category[this.mallCategoryId].bxMallSubDto;
          this.mallSubId = this.bxMallSubDto.mallSubId;
          console.log(this.bxMallSubDto);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getID() {
      if (this.$route.params.mallCategoryId) {
        this.mallCategoryId = this.$route.params.mallCategoryId - 1;
        console.log(this.$route.params.mallCategoryId);
      }
    },
    change(item) {
      this.mallCategoryId = item;
      this.getRecommend();
      console.log(this.mallCategoryId);
    },
    onClick(name, title) {
      console.log(name);
      this.bxMallSubDto[name].mallSubId;
      console.log(this.bxMallSubDto[name].mallSubId);
      this.getCategory(this.bxMallSubDto[name].mallSubId);
    },
    getCategory(id) {
      this.$api
        .getCategory(id)
        .then(res => {
          this.list = res.dataList;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getRecommend();
    this.getID();
    this.getCategory();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.categoryBox {
  display: flex;
}
.content {
  display: flex;
}
.van-tabs {
  width: 290px;
  .van-tab {
    width: 290px;
  }
}
</style>