<template>
  <div>
    <div class="header">
    <i v-if='!isCollapse' @click="changMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changMenu"
         class="iconfont icon-left-indent"></i>
      顶部区域
    </div>

    <div class="content"/>

    <div>
      欢迎{{this.userinfo.user}} 到来
      <i @click="logout" class="iconfont icon-exit"></i>
    </div>

    <router-view/>
  </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex';
export default {
  props:['isCollapse'],
  computed: {
    ...mapState('loginModule',['userinfo']),
    doneTodos() {
      return this.$store.loginModule.getters.getUsername;
    }
  },
  created () {
    console.log("userinfo",this.userinfo.user);
  },
  methods: {
    ...mapMutations('loginModule',['setUser','clearUser']),
    changMenu() {
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
