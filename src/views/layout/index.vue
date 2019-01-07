<template>
  <div id="Layout">
    <div class="main-container">
      <Header></Header>
      <side-nav/>
      <tags-view/>
      <router-view/>
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
	created () {
	}
}
</script>
<style lang="scss" scoped>

</style>

