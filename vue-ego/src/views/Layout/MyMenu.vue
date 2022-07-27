<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      router
    >
      <el-menu-item>
        <span slot="title">后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
        <el-menu-item index="/goods/goods-list">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <!--        商品审核-->
        <el-menu-item index="/goods/goods-verify">
          <i class="el-icon-menu"></i>
          <span slot="title">商品审核</span>
        </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--    规格包装-->
      <el-submenu index="/params">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>规格包装</span>
        </template>
        <el-menu-item-group>
        <el-menu-item index="/params/specifications">
          <i class="el-icon-setting"></i>
          <span slot="title">规格包装</span>
        </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!--      广告分类-->
      <el-menu-item index="/advert">
        <i class="el-icon-data-board"></i>
        <span slot="title">广告分类</span>
      </el-menu-item>

      <!--      订单管理-->
      <el-submenu index="/orders">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/orders/order-list">
            <i class="el-icon-menu"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/orders/send-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">发货列表</span>
          </el-menu-item>
          <el-menu-item index="/orders/change-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">换货列表</span>
          </el-menu-item>
          <el-menu-item index="/orders/order-back">
            <i class="el-icon-menu"></i>
            <span slot="title">退货管理</span>
          </el-menu-item>
          </el-menu-item-group>
      </el-submenu>
            <el-menu-item index="/user">
              <i class="el-icon-data-board"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  props:['isCollapse'],
  data() {
    return {
      //isCollapse: true
    }
  }
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
