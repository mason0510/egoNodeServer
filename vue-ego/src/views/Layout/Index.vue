<template>
  <div class="layout">
    <MyMenu class="menu"></MyMenu>
    <Content class="content"></Content>
  </div>

</template>
<script>
// import Menu and Content
import MyMenu from './MyMenu.vue'
import Content from './Content.vue'

export default {
  name: 'Index',
  components: {
    MyMenu,
    Content
  }
}
</script>

<style scoped lang="less">
  @import '../../less/index.less';
</style>
