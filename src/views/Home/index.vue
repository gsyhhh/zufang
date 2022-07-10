<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.index">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>
    <div class="search">
      <van-button class="bei" type="default" @click="$router.push('city')"
        >北京</van-button
      >
      <van-search class="sou" placeholder="请输入搜索关键词" />
      <van-icon class="tu" name="guide-o" />
    </div>
    <van-grid>
      <van-grid-item icon="photo-o" text="整租" />
      <van-grid-item icon="photo-o" text="合租" />
      <van-grid-item icon="photo-o" text="地图找房" />
      <van-grid-item
        @click="$router.push('release')"
        icon="photo-o"
        text="去出租"
      ></van-grid-item>
    </van-grid>

    <div>
      <h3 class="group-title">租房小组 <span class="more">更多</span></h3>
      <van-row type="flex" justify="space-around" style="padding-bottom: 15px">
        <van-col class="four" span="11" v-for="item in groups" :key="item.id"
          ><van-image
            class="image"
            :src="`http://liufusong.top:8080${item.imgSrc}`"
          />
          <div class="tops">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { swiper, groups } from '@/api/home'
export default {
  async created () {
    try {
      // 轮播图
      const res = await swiper()
      console.log(res)
      this.images = res.data.body
      console.log(this.images)
      // 租房小组
      const ree = await groups()
      console.log(ree)
      this.groups = ree.data.body
      console.log(this.groups)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      images: [],
      groups: []
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* width: 375px; */
  /* line-height: 150px; */
  text-align: center;
  img {
    width: 100%;
    height: 230px;
  }
}
.search {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0%;
  align-items: center;
  width: 10rem;
  height: 2rem;
  background: rgba(254, 254, 254, 0);
}
.bei {
  height: 33.94px;
}
.sou {
  padding: 0%;
}
.tu {
  margin-left: 20px;
}
.image {
  width: 50px;
  height: 50px;
  float: left;
  padding-top: 19px;
}
.tops {
  font-size: 14px;
}
.group-title {
  position: relative;
  font-size: 15px;
  margin-left: 15px;
  margin-right: 15px;
  .more {
    color: #787d82;
    position: absolute;
    right: 0;
    font-size: 14px;
    font-weight: 400;
  }
}
.four {
  margin-left: 15px;
}
</style>
