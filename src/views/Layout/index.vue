<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/room" icon="youzan-shield"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/new" icon="comment">公告</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="manager">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 'home'
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
