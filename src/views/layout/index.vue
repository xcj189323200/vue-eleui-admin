<template>
  <div id="Layout">
    <div class="main-container" :style="{ height: getScreenHeight +'px', overflow: 'scroll' }">
      <side-nav/>
      <tags-view @getCacheView="getCacheView_handler"/>

      <transition name="fade-transform" mode="out-in">
        <div class="main-view">
          <keep-alive :include="cacheList">
            <router-view :key="this.$route.fullPath"/>
          </keep-alive>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TagsView from './components/TagsView'
import SideNav from './components/SideNav'
export default {
  name: 'Layout',
  data() {
    return {
      cacheList: [],
      getScreenHeight: 600 + 'px'
    }
  },
  components: {
    Header,
    TagsView,
    SideNav
  },
  created() {
  },
  mounted () {
    this.getScreenHeight = `${document.documentElement.clientHeight}`
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    window.onresize = () => {
      this.getScreenHeight = `${document.documentElement.clientHeight}`
    }
  },
  methods: {
    getCacheView_handler(val) {
      console.log(val, '----val')
      this.cacheList = val
    }
  }
}
</script>
<style lang="scss" scoped>
#Layout {
  .main-container{
    display: flex;
  }
  .content{
    width: 100%
  }
}
</style>

