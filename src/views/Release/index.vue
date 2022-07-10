<template>
  <div>
    <van-nav-bar title="发布房源" @click-left="$router.back()">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <!-- 发布房源 -->
    <div class="lu">
      <van-cell-group>
        <van-cell value="房源信息" />
      </van-cell-group>
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <van-cell-group>
        <van-field v-model="value_1" label="租金" placeholder="请输入租金/月">
          <template #button>
            <span type="default">￥/月</span>
          </template></van-field
        >
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="value_2"
          label="建筑面积"
          placeholder="请输入建筑面积"
        >
          <template #button>
            <span type="default">㎡</span>
          </template></van-field
        >
      </van-cell-group>

      <div>
        <van-field
          readonly
          clickable
          label="户型"
          :value="value1"
          placeholder="                                              请选择"
          @click="showPicker1 = true"
          is-link
        />
        <van-popup v-model="showPicker1" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm1"
          />
        </van-popup>
      </div>

      <div>
        <van-field
          readonly
          clickable
          :value="value2"
          label="所在楼层"
          placeholder="                                              请选择"
          @click="showPicker2 = true"
          is-link
        />
        <van-popup v-model="showPicker2" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns1"
            @confirm="onConfirm2"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>

      <div>
        <van-field
          readonly
          clickable
          :value="value3"
          label="所在楼层"
          placeholder="                                              请选择"
          @click="showPicker3 = true"
          is-link
        />
        <van-popup v-model="showPicker3" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns2"
            @confirm="onConfirm3"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
    </div>

    <van-cell-group>
      <van-field label="房屋标题" readonly />
    </van-cell-group>

    <van-cell-group>
      <van-field
        v-model="value_3"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元） "
      />
    </van-cell-group>

    <van-cell-group>
      <van-field label="房屋标题" readonly />
      <van-uploader :after-read="afterRead" />
      <van-field label="房间配置" readonly />
    </van-cell-group>
    <div>
      <van-row type="flex" justify="center">
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
        <van-col span="5">span: 6</van-col>
      </van-row>
    </div>
    <div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      show: false,
      value1: '',
      value2: '',
      value3: '',
      value_1: '',
      value_2: '',
      value_3: '',
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      columns: ['一室', '二室', '三室', '四室+'],
      columns1: ['高楼层', '中楼层', '低楼层'],
      columns2: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      active: 0
    }
  },
  methods: {
    onConfirm1 (value) {
      this.value1 = value
      this.showPicker1 = false
    },
    onConfirm2 (value) {
      this.value2 = value
      this.showPicker2 = false
    },
    onConfirm3 (value) {
      this.value3 = value
      this.showPicker3 = false
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.lu {
  color: #21b97a;
  background-color: #fff;
  font-size: 15px;
}
.van-col--5 {
  width: 18%;
}
</style>
