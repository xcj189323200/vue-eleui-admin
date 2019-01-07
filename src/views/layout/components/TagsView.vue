<template>
  <div class="tags-view-container">
    <ul>
      <li v-for="item in tagList" :key="item.title">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      tagList: [
        { title: '首页' }
      ]
    }
  },
  computed: {

  },
  watch: {
    $route() {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
