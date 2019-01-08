<template>
  <div id="Layout">
    <div class="main-container" :style="{ height: getScreenHeight +'px', overflow: 'scroll' }">
      <side-nav/>
      <div class="content">
        <Header></Header>
        <tags-view/>
        <div class="main-view">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </transition>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TagsView from './components/TagsView'
import SideNav from './components/SideNav'
export default {
  name: 'Layout',
  components: {
    Header,
    TagsView,
    SideNav
  },
  data () {
    return {
      getScreenHeight: 600 + 'px'
    }
  },
  created() {
  },
  mounted () {
    this.getScreenHeight = `${document.documentElement.clientHeight}`
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    window.onresize = () => {
      this.getScreenHeight = `${document.documentElement.clientHeight}`
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

