<template>
  <div>
    <!-- 登录 -->
    <div
      class="My_title__39w3V"
      v-if="$store.state.user && $store.state.user.token"
    >
      <img
        class="My_bg__2j-VX"
        src="http://liufusong.top:8080/img/avatar.png"
        alt="背景图"
      />
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img
            class="My_avatar__2Fbh7"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user__B6O1D">
          <div class="My_name__3U2NB">{{AParameters.nickname}}</div>
          <div class="My_auth__1KSIg">
            <van-button
              type="primary"
              size="small"
              v-if="$store.state.user && $store.state.user.token"
              @click="del"
              >退出</van-button
            >
          </div>
          <div class="My_edit__3wqlv">
            编辑个人资料<span class="My_arrow__1LOxs"
              ><i class="iconfont icon-arrow"></i
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 未登录 -->
    <div class="My_title__39w3V" v-else>
      <img
        class="My_bg__2j-VX"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
      />
      <div class="My_info__eOYeg">
        <div class="My_myIcon__3cKIV">
          <img
            class="My_avatar__2Fbh7"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user__B6O1D">
          <div class="My_name__3U2NB">游客</div>
          <div class="My_edit__3wqlv">
            <a
              role="button"
              class="
                am-button am-button-primary am-button-small am-button-inline
              "
              aria-disabled="false"
              ><van-button
                type="primary"
                size="small"
                @click="$router.push('login')"
                >登录</van-button
              ></a
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-grid
        :column-num="3"
        v-if="$store.state.user && $store.state.user.token"
      >
        <van-grid-item
          @click="$router.push('collect')"
          icon="star-o"
          text="我的收藏"
        />
        <van-grid-item
          @click="$router.push('rent')"
          icon="wap-home-o"
          text="我的出租"
        />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="balance-pay" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
      <van-grid :column-num="3" v-else>
        <van-grid-item
          @click="$router.push('login')"
          icon="star-o"
          text="我的收藏"
        />
        <van-grid-item
          @click="$router.push('login')"
          icon="wap-home-o"
          text="我的出租"
        />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="balance-pay" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div>
      <div class="My_ad__1wZZj">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { AParameters } from '@/api/user'
import { mapState } from 'vuex'

export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await AParameters()
        console.log('res', res)
        this.AParameters = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },

  data () {
    return {
      AParameters: {}
    }
  },
  methods: {
    async del () {
      try {
        await this.$dialog.confirm({ message: '你确定？？' })
        this.$store.commit('setUser', {})
        const { data } = await AParameters()
        this.userInfo = data.data
      } catch (err) {
        console.log(err)
        this.$toast('获取数据失败')
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
.round {
  border-radius: 30px;
}
.My_title__39w3V {
  min-height: 300px;
  position: relative;
}
.My_bg__2j-VX {
  width: 100%;
  height: 5.5rem;
}
.My_info__eOYeg {
  position: absolute;
  background: #fff;
  width: 7rem;
  height: 4rem;
  top: 2.5rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My_myIcon__3cKIV {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.My_avatar__2Fbh7 {
  width: 100%;
  border-radius: 50%;
}
.My_user__B6O1D {
  padding-top: 15px;
}
.My_name__3U2NB {
  margin-top: -30px;
  margin-bottom: 10px;
}
.My_edit__3wqlv {
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}
.My_ad__1wZZj {
  text-align: center;
  margin-top: 10px;
}
.My_ad__1wZZj img {
  width: 92%;
}
/* 登录 */
.My_title__39w3V {
  min-height: 300px;
  position: relative;
}
.My_edit__3wqlv[data-v-f7eea52e] {
  color: #999;
  font-size: 0.32rem;
  margin-top: 0rem;
}
.My_name__3U2NB[data-v-f7eea52e] {
  margin-top: -1.1rem;
  margin-bottom: 0.26667rem;
}
.My_bg__2j-VX[data-v-f7eea52e] {
  width: 100%;
  height: 5rem;
}
</style>
