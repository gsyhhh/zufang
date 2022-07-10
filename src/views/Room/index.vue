<template>
  <div>
    <div class="search">
      <van-icon name="arrow-left" @click="$router.push('home')" />
      <van-button class="bei" type="default" @click="$router.push('city')"
        >北京</van-button
      >
      <van-search class="sou" placeholder="请输入搜索关键词" />
      <van-icon class="tu" name="guide-o" />
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" title="区域">
        <van-picker :columns="columns1" />
        <van-row gutter="20" class="q">
          <van-col span="8" class="van-col van-col--1">取消</van-col>
          <van-col span="8" class="van-col van-col--2">确认</van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" title="方式">
        <van-picker
          :columns="columns2"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
        <van-row gutter="20" class="q">
          <van-col span="8" class="van-col van-col--1">取消</van-col>
          <van-col span="8" class="van-col van-col--2">确认</van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item v-model="value3" :options="option3" title="租金">
        <van-picker
          :columns="columns3"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
        <van-row gutter="20" class="q">
          <van-col span="8" class="van-col van-col--1">取消</van-col>
          <van-col span="8" class="van-col van-col--2">确认</van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item v-model="value4" :options="option4" title="筛选">
        <van-popup v-model="show" position="right" :style="{ height: '60%' }" />
      </van-dropdown-item>

      <!-- <van-dropdown-item title="筛选" ref="item">
        <van-cell center title="包邮">
          <template #right-icon>
            <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
        <van-cell center title="团购">
          <template #right-icon>
            <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
          </template>
        </van-cell>
        <div style="padding: 5px 16px">
          <van-button type="danger" block round @click="onConfirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item> -->
    </van-dropdown-menu>

    <div class="HouseItem_house" v-for="item in Release" :key="item.id">
      <div class="HouseItem_imgWrap">
        <img
          class="HouseItem_img"
          :src="`http://liufusong.top:8080${item.houseImg}`"
          alt=""
        />
      </div>
      <div class="HouseItem_content">
        <h3 class="HouseItem_title__2dXar">{{ item.title }}</h3>
        <div class="HouseItem_desc">{{ item.desc }}</div>
        <div>
          <span class="HouseItem_tag HouseItem_tag1">{{ item.tags }}</span>
        </div>
        <div class="HouseItem_price">
          <span class="HouseItem_priceNum">{{ item.price }}</span> 元/月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Release } from '@/api/user'
export default {
  async created () {
    try {
      const res = await Release()
      console.log(res)
      this.Release = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      columns2: ['不限', '整租', '合租'],
      columns3: ['不限', '1000', '2000', '3000', '4000', '5000'],
      show: false,
      value: 0,
      switch1: false,
      switch2: false,
      columns1: [
        {
          text: '不限',
          children: [
            {
              text: '不限',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '地铁',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]

    }
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    },
    showPopup () {
      this.show = true
    },
    computed: {},
    watch: {},
    filters: {},
    components: {}
  }
}
</script>

<style scoped lang='less'>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 1.3rem;
  background: rgba(254, 254, 254, 0);
  background-color: #21b97a;
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

.HouseItem_house {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
}
.HouseItem_img {
  width: 106px;
  height: 80px;
}
.HouseItem_imgWrap {
  float: left;
  width: 106px;
  height: 80px;
}
.HouseItem_content {
  overflow: hidden;
  line-height: 22px;
  padding-left: 12px;
}
.HouseItem_title {
  margin: 0;
  font-size: 15px;
  color: #394043;
}
.HouseItem_desc {
  font-size: 12px;
  color: #afb2b3;
}
.HouseItem_title__2dXa {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.HouseItem_price {
  font-size: 12px;
  color: #fa5741;
}
.HouseItem_tag1 {
  color: #39becd;
  background: #e1f5f8;
}
.HouseItem_tag {
  display: inline-block;
  font-size: 12px;
  border-radius: 3px;
  padding: 4px 5px;
  margin-right: 5px;
  line-height: 12px;
}
.van-col--1 {
  width: 30%;
  text-align: center;
  color: #21b97a;
}
.van-col--2 {
  width: 70%;
  text-align: center;
  color: #fff;
  background-color: #21b97a;
}
</style>
