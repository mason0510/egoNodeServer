<template>
  <div id="app">
    <h1>用户登录</h1>
    <form>
      <input type="text" id="username" placeholder="用户名"><br>
      <input type="password" id="password" placeholder="密码"><br>
      <input type="submit" @click.prevent="post_login" value="提交">
    </form>
    <hr>
    <h2>用户注册</h2>
  </div>
</template>

<script>
import base from '../../api/base'
export default {
  name: 'Login',
  methods: {
    loginUser(){
      console.log("发送数据");
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var path = "http://127.0.0.1:8989/api/login";
      this.$api.getLogin(path,{
        params:{
          username,
          password
        }
      }).then(function(data){
        console.log(data);
      },function(err) {
        console.log(err);
      }).catch(function(err){
        console.log("捕获错误");
      })
    },
    post_login() {
      var u = document.getElementById("username").value;
      // 获得标签属性id="username"的数据赋值给u
      var p = document.getElementById("password").value;
      const url = base.test;
      var params = new URLSearchParams();
      params.append("username", u);
      params.append("password", p);
      // 通过URLSearchParams()改变上传的参数格式为u=%E8%BF%AA%E8%BF%A6&p=123456
      this.$axios({
        method: "post",
        url: url,
        params,
      }).then((res) => {
        if (200 === res.data.code) {
          // 根据后端定义成功的正常请求，返回code值200为请求成功
          console.log(res.data);
        } else {
          console.log(res.data);
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
