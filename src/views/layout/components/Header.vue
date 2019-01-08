<template>
  <div id="Header">
    <div class="header_left">
      <Breadcrumb/>
    </div>
    <div class="header_right">
      <theme-picker class="theme-switch right-menu-item"/>
      <div class="user_box">
        <el-dropdown size="medium">
          <span class="el-dropdown-link">
            {{userName || '佚名'}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="loginOut_clickHandler">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@components/Ui/Breadcrumb/index.vue'
import ThemePicker from '@components/Ui/ThemePicker'
import { mapActions, mapGetters } from 'vuex'
import Utils from '@utils/utils'

export default {
  name: 'Header',
  components: {
    Breadcrumb,
    ThemePicker
  },
  data() {
    return {
      showPopFlag: false, // 控制用户信息弹出框显示隐藏
      userName: ''
    }
  },
  computed: {
    ...mapGetters({
      // userInfo: "getUserInfo",
      // stores: "getStores",
      // storeLen: "getStoreLen"
    })
  },
  props: [],
  methods: {
    ...mapActions(['loginOut']),
    /**
     * 登出事件
     * */
    loginOut_clickHandler() {
      this.loginOut()
    }
  },
  created() {
    const { _userName } = Utils.getCookie()
    this.userName = _userName
  },
  mounted() { },
  destroyed() { },
  watch: {}
}
</script>
<style lang="scss" scoped>
#Header {
  padding: 5px;
  height: 50px;
  line-height: 50px;
  width: 100%;
  .header_left {
    float: left;
  }
  .header_right {
    float: right;
    .user_box {
      display: inline-block;
      margin: 0 15px;
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
}
</style>

