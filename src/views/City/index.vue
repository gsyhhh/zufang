<template>
  <van-index-bar>
    <div v-for="(item, index) in theList" :key="index">
      <van-index-anchor index="A"></van-index-anchor>
      <van-cell v-for="(item2, ind) in item" :key="ind"></van-cell>
    </div>
  </van-index-bar>
</template>

<script>
import { getCityListData } from '@/api/user'
export default {
  async created () {
    try {
      const res1 = await getCityListData(1)
      console.log('res1', res1)
      this.getCityListData = res1.data.body
      const obj = {}
      this.getCityListData.forEach(item => {
        const first = item.short.substr(0, 1).toUpperCase()
        if (obj[first]) {
          obj[first].push(item)
        } else {
          obj[first] = [item]
        }
        this.obj = { ...obj, ...this.citylist }
        this.cityindexlist = Object.keys(obj).sort()
      })
      console.log('12', obj)
      const index = Array.from(new Set(Object.keys(obj)))
      console.log(index.sort())
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      indexList: [],
      theList: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
