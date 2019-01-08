<template>
  <div id="Layout">
    <div class="main-container">
      <Header></Header>
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
      cacheList: []
    }
  },
  components: {
    Header,
    TagsView,
    SideNav
  },
  computed: {

  },
  created() {
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
</style>

