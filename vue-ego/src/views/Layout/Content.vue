<template>
  <div>
    <div class="header">
    <i v-if='!isCollapse' @click="changMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changMenu"
         class="iconfont icon-left-indent"></i>
      顶部区域
    </div>
    <div class="content"/>

    <div class="user">
      欢迎 {{userinfo.user}}
      <i @click="logout" class="iconfont icon-logout"></i>

    </div>
<!--    send /-->
    <router-view/>
  </div>
</template>

<script>
//mapState('loginModule',['user'])
import { mapState ,mapMutations} from 'vuex';
export default {
  props:['isCollapse'],
  computed: {
    ...mapState('loginModule',['userinfo']),
  },
  methods: {
    ...mapMutations('loginModule',['clearUser']),
    changMenu() {//fix uppper data
      this.$emit('changeCollapse')
    },
    logout() {
      this.clearUser();
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  }
}
</script>
<style scoped lang="less">
@import '../../less/content.less';
</style>
