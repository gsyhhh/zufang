<template>
  <div>
    <van-nav-bar title="我的出租" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="HouseItem_house__29lYP" v-for="item in Rent" :key="item.id">
      <div class="HouseItem_imgWrap__3ZPoa">
        <img
          class="HouseItem_img__1BaJK"
          :src="`http://liufusong.top:8080${item.houseImg}`"
          alt=""
        />
      </div>
      <div class="HouseItem_content__1gVhj">
        <h3 class="HouseItem_title__2dXar">{{ item.title }}</h3>
        <div class="HouseItem_desc__5-mp4">{{ item.desc }}</div>
        <div>
          <span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">{{
            item.tags[0]
          }}</span>
        </div>
        <div class="HouseItem_price__1_r8v">
          <span class="HouseItem_priceNum__RGpsE">{{ item.price }}</span> 元/月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rent } from '@/api/user'
export default {
  async created () {
    try {
      const res = await Rent()
      console.log(res)
      this.Rent = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      Rent: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.HouseItem_house__29lYP {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
}
.HouseItem_img__1BaJK {
  width: 106px;
  height: 80px;
}
.HouseItem_imgWrap__3ZPoa {
  float: left;
  width: 106px;
  height: 80px;
}
.HouseItem_content__1gVhj {
  overflow: hidden;
  line-height: 22px;
  padding-left: 12px;
}
.HouseItem_title__2dXar {
  margin: 0;
  font-size: 15px;
  color: #394043;
}
.HouseItem_desc__5-mp4 {
  font-size: 12px;
  color: #afb2b3;
}
.HouseItem_title__2dXar {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.HouseItem_price__1_r8v {
  font-size: 12px;
  color: #fa5741;
}
.HouseItem_tag1__3VDnD {
  color: #39becd;
  background: #e1f5f8;
}
.HouseItem_tag__3MxYv {
  display: inline-block;
  font-size: 12px;
  border-radius: 3px;
  padding: 4px 5px;
  margin-right: 5px;
  line-height: 12px;
}
</style>
