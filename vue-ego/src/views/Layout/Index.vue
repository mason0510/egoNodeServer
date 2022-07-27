<template>
  <div class="layout">
<!--    //receive data-->
    <MyMenu class="menu" :is-collapse="isCollapse"></MyMenu>
    <Content class="content"
             :class="{isActive:isCollapse}"
             @changeCollapse='changeCollapse'
             :isCollapse='isCollapse'></Content>
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
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../less/index.less';
</style>
