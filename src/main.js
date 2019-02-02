  import Vue from 'vue'
  import App from './App.vue'
  import VueRouter from 'vue-router'
  import VueResource from 'vue-resource'
  import {routes} from './routes.js'
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Vuelidate from 'vuelidate'
  import vueSignature from "vue-signature"
  import {store} from './store/store';

  

  Vue.use(VueResource);
  Vue.use(Vuelidate)
  Vue.use(vueSignature)
  //Vue.http.options.root = "http://192.168.0.166:8000/login"

  // Vue.http.interceptors.push((request,next) => {
  //   console.log(request);

  //   if(request.method == 'POST'){
  //   request.method = 'PUT';
  //   }
  //   next(response => {
      
  //   }
  //   )
  // })



  Vue.config.productionTip = false
  Vue.use(VueRouter);



  const router = new VueRouter( 
    {
      routes,
      mode:'history'
    }
  );

  router.beforeEach((to,from,next)=>{
    // console.log("beforeEach Global");
    next();
  });

  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')

  