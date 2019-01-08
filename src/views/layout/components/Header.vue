<template>
  <div id="Header">
    <Breadcrumb></Breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from '@components/Ui/Breadcrumb/index.vue'
export default {
  name: 'Header',
  components: {
    Breadcrumb
  },
  created() { }
}
</script>
<style lang="scss" scoped>
#Header {
  height: 50px;
  line-height: 50px;
  width: 100%;
}
</style>

