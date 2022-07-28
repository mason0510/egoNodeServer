# vue-ego

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## vue-ego start project vue managment
安装less插件
npm install less less-loader --save

安装最新版node
nvm install --lts

安装element UI
npm install element-ui --save
import ElementUI from 'element-ui' import 'element-ui/lib/theme-chalk/index.css' Vue.use(ElementUI);

vue add element-plus
npm install babel-plugin-import -D
https://kalacloud.com/blog/element-plus-tutorial/
##
整体布局

## 技术点
    Vue + Vue-router  + Vuex + Element-ui + Axios  + Echarts + 其他三方库

##
找不到option
npm uninstall less less-loader
npm install less@3.9.0 less-loader@4.1.0 --save-dev

##布局相关
https://juejin.cn/post/6986935474635931656

##开发工具
ngrok
ngrok config add-authtoken 1mMr4VHUPxIzOZSrGWVGCEvSDAu_6jGV3aE66Xpj2RqyX7p8M
ngrok http 80
如果不能启动访问那么走一下路径
vue 默认会阻止来自其他来源的所有请求。
ngrok http 8081 --host-header=rewrite

找不到elementUi
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
不折叠
必须有span

发送数据无法收到
改变前端参数

无法跳转 保存token到vuex
https://laracasts.com/discuss/channels/vue/vuex-anybody-typeerror-thisstorecommit-is-not-a-function

##公共组件
