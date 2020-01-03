<template>
  <div class="floor">
    <div class="floor1">
      <div class="floorTiltle">
        <div class="floornum">1F</div>
        <div>{{floorName.floor1}}</div>
      </div>
      <div class="floorimg">
        <div
          v-for="(item,index) in arr"
          :key="index"
          :class="[ index === 0 ? 'floorimg1' : 'floorimg2']"
        >
          <img :src="item.image" @click="goto(item.goodsId)" />
        </div>
      </div>
    </div>
    <div class="floor2">
      <div class="floorTiltle">
        <div class="floornum">2F</div>
        <div>{{floorName.floor2}}</div>
      </div>
      <div class="floorimg">
        <div
          v-for="(item,index) in arr2"
          :key="index"
          :class="[ index === 0 ? 'floorimg1' : 'floorimg2']"
        >
          <img :src="item.image" @click="goto(item.goodsId)" />
        </div>
      </div>
    </div>
    <div class="floor3">
      <div class="floorTiltle">
        <div class="floornum">3F</div>
        <div>{{floorName.floor3}}</div>
      </div>
      <div class="floorimg">
        <div
          v-for="(item,index) in arr3"
          :key="index"
          :class="[ index === 0 ? 'floorimg1' : 'floorimg2']"
        >
          <img :src="item.image" @click="goto(item.goodsId)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      arr2: [],
      arr3: [],
      floorName: []
    };
  },
  components: {},
  methods: {
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          this.floorName = res.data.floorName;
          this.arr = res.data.floor1;
          this.arr2 = res.data.floor2;
          this.arr3 = res.data.floor3;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goto(item) {
      console.log(item);
      this.$router.push({ name: "details", query: { goodsId: item } });
    },
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.floor {
  height: 1000px;
}
.floor1 {
  margin-top: 1px;
  float: left;
  width: 100%;
}
.floor2 {
  margin-top: 1px;
  float: left;
  width: 100%;
}
.floor3 {
  margin-top: 1px;
  float: left;
  width: 100%;
}
.floorTiltle {
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  height: 25px;
  line-height: 25px;
  display: flex;
  color: red;
  font-weight: bold;
  .floornum {
    color: #fff;
    font-size: 14px;
    text-align: center;
    width: 25px;
    border-radius: 50%;
    background: red;
  }
}
img {
  width: 100%;
  height: 100%;
}
.floorimg {
  height: 300px;
}
.floorimg1 {
  float: left;
  width: 50%;
  height: 200px;
}
.floorimg2 {
  float: left;
  width: 50%;
  height: 100px;
  // height: 97px;
}
</style>