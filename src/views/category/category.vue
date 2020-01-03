<template>
 <div>
   <div class="title">商品分类</div>
   <van-divider />
   <categ></categ>
 </div>
</template>

<script>
import categ from '../../components/category/categ'
 export default {
   data () {
     return {

     }
   },
   components: {
     categ
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.title{
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background: #fff;
}
.van-divider{
  margin: 0;
}
</style>