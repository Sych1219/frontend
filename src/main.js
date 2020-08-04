import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token");
  //筛选需要传token的路由，匹配route里面需要登录的路径，如果匹配到就是true
  if( to.matched.some(record => record.meta.requiresAuth) ){
    //根据token是否有，判断是否需要调到登录页面
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next();
  }
})

// router.beforeEach((to,from,next)=>{

//   const token = localStorage.getItem("token")

//   if(to.matched.some(record =>record.meta.requiresAuth)){
//     if(token){
//       next()
//     }else{
//       next({path:"/login"})
//     }

//   }else{
//     next()
//   }

// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
