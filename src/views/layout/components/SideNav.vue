<template>
  <el-aside width="200px" style="background:#545c64;">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu class="nav-item" index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="nav-title">导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item class="nav-item" index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item class="nav-item" index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item class="nav-item" index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
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
					groupName: '订单管理',
					path: 'orders',
					children: [
						{
							urlLink: 'orders-list',
							permissionName: '订单管理'
						}
					]
				},
				{
					groupName: '通知管理',
					path: 'notices',
					children: [
						{
							urlLink: 'notices-list',
							permissionName: '通知管理'
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
.el-menu-vertical-demo {
  border-right: none;
}
.nav-item > div:hover {
  .nav-title,
  i {
    color: #409eff;
  }
}
</style>
