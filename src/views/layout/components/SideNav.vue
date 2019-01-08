<template>
  <el-aside width="200px" id="sideMenu">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <template v-for="(item) in datas">
        <el-submenu class="nav-item" :index="item.groupName" :key="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span class="nav-title">{{item.groupName}}</span>
          </template>
          <el-menu-item-group v-for="(child, index) in item.children" :key="index">
            <router-link :to="{name: child.urlLink}">
              <el-menu-item :index="child.urlLink">{{child.permissionName}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          groupName: '门店订单检测分析',
          path: 'storeOrder',
          children: [
            {
              urlLink: 'storeOrder-list',
              permissionName: '门店订单检测分析'
            }
          ]
        },
        {
          groupName: '门店基本信息表',
          path: 'storeInfo',
          children: [
            {
              urlLink: 'storeInfo-edit',
              permissionName: '编辑页面'
            }
          ]
        },
        {
          groupName: '门店培训详情',
          path: 'storeTrain',
          children: [
            {
              urlLink: 'storeTrain-info',
              permissionName: '门店培训详情'
            }
          ]
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    handleOpen() { },
    handleClose() { },
    close() { }
  }
}
</script>

<style lang="scss" scoped>
#sideMenu {
  background: $sideMenuColor;
  .el-menu-vertical-demo {
    border-right: none;
  }
  .nav-item > div:hover {
    .nav-title,
    i {
      color: #409eff;
    }
  }
}
</style>
