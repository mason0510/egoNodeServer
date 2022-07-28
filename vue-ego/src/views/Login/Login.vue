<template>
  <div class="login-box">
     <h3 class="title">登录界面</h3>
    <div>{{info}}</div>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="60px">
      <el-form-item label="账号" prop="username">
        <el-input type="password" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        <el-button @click="resetForm('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//vuex
import {mapMutations} from 'vuex';
//jwtDecode
import jwtDecode from 'jwt-decode';
export default {
  name: 'Login',
  data () {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      info: '',
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {validator: validateUser, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    ...mapMutations('loginModule',['setUser']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log("request log in");
        if (valid) {
        let username=this.loginForm.username;
        let password=this.loginForm.password;
          this.$api.getLogin({
              username,
              password
          }).then(res=>{
            console.log("login success",res.data);
            //check
            if (res.data.status===200){
              let jwt=jwtDecode(res.data.data);
              //save login
              let obj={
                user:jwt.username,
                token:res.data.data,
              }
              this.setUser(obj)
              //save local
              localStorage.setItem("user",JSON.stringify(obj));
              console.log("setItem:=",obj);
              //jymp
               this.$router.push('/');
              this.info="";
            }else{
              this.alert(res.data.message);
            }
          });
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
}
</script>

<style scoped lang="less">
.login-box {
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 150px auto;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
}
.title{
  margin-bottom: 20px;
  text-align: center;
  left: 50%;
}
</style>



