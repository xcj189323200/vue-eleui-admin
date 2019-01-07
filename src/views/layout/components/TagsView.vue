<template>
  <div class="tags-view-container">
    <div class="tags-view-wrapper">
      <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container">
        <router-link v-for="(tag,index) in tagList" :key="tag.path" :class="isActive(tag)?'active':''" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" tag="span" class="tags-view-item">
          {{ tag.meta.title || '未知'}}
          <span class="el-icon-close" @click.stop="closeTag_clickHandler(tag,index)"/>
        </router-link>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      tagList: []
    }
  },
  computed: {

  },
  watch: {
    $route: {
      handler(val) {
        this.addViewTags()
      },
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    addViewTags() {
      const { name } = this.$route
      const isAddRoute = this.tagList.some((k) => { return k.name === name })
      if (name && !isAddRoute) {
        this.tagList.push(this.$route)
        // this.$store.dispatch('addView', this.$route)
      }
      return false
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    closeTag_clickHandler(tag = {}, index) {
      const { name } = this.$route
      this.tagList.splice(index, 1)
      if (tag.name === name) {
        const { path, query } = this.tagList[0] || { path: 'home', query: {}}
        this.$router.push({ path, query })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      border-radius: 3px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color:$tabColor;
        color: #fff;
        border-color: $tabColor;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
}
</style>
