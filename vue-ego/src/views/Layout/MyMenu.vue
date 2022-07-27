<template>
  <div>
        <ul>
          <li>
          <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/goods">商品管理</router-link>
          </li>
          <li>
            <router-link to="/goodsParams">规格参数</router-link>
          </li>
          <li>
            <router-link to="/advert">广告</router-link>
          </li>
          <li>
            <router-link to="/orders">订单管理</router-link>
          </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: 'MyMenu'
}
</script>

<style scoped>

</style>
