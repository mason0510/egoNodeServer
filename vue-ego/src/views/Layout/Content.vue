<template>
  <div>
    <div class="header">
    <i v-if='!isCollapse' @click="changMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changMenu"
         class="iconfont icon-left-indent"></i>
      顶部区域
    </div>
    <div class="content"/>
<!--    send /-->
    <router-view/>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  methods: {
    changMenu() {//fix uppper data
      this.$emit('changeCollapse')
    }
  }
}
</script>
<style scoped lang="less">
@import '../../less/content.less';
</style>
