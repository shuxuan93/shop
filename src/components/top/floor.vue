<template>
  <div>
    <p>1F{{}}</p>
    <div class="floor1" >
      <img v-for="item in arr" :key="item.goodsId" :src="item.image" width="50%" no-repeat />
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
          this.arr = res.data.floor1;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
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
.floor1{
  display: flex;
  float: left;
  flex-wrap:wrap;
  
}
</style>