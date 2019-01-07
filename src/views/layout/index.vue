<template>
  <div id="Layout">
    <div class="main-container">
      <Header></Header>
      <side-nav/>
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
  created() {
  }
}
</script>
<style lang="scss" scoped>
</style>

