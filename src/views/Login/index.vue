<template>
  <div>
    <van-nav-bar title="账号登陆" @click-left="$router.back()">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '这手机用不了' },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^\d+$/,
            message: '这密码不行 快换',
          },
        ]"
      />
      <div style="margin: 16px" class="btn">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
      <div class="register">
        <span @click="$router.push('Register')">还没有账号去注册</span>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit () {
      const res = await login(this.username, this.password)
      console.log(res)
      if (res.data.status === 200) {
        this.$toast.success('牛的！！')
        this.$store.commit('setUser', res.data.body)
        this.$router.push({
          path: 'my'
        })
      } else {
        this.$toast.fail('你个软蛋')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.register {
  font-size: 12px;
  text-align: center;
}
.van-button {
  background-color: #21b97a;
}
</style>
