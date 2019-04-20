    import Vue from 'vue'
    import App from './App.vue'
    import VueRouter from 'vue-router'
    import VueResource from 'vue-resource'
    import {routes} from './routes.js'
    import VueSignaturePad from 'vue-signature-pad';
    import 'font-awesome/css/font-awesome.css'
import * as svgicon from 'vue-svgicon';


    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import Vuelidate from 'vuelidate'    
    import {store} from './store/store.js';

    Vue.use(VueResource);
    Vue.use(Vuelidate)
    Vue.use(VueSignaturePad);
    Vue.config.productionTip = false
    Vue.use(VueRouter);

    Vue.use(svgicon, {
      tagName: 'svgicon'
  });



    const router = new VueRouter( 
      {
        routes,
        mode:'history'
      }
    );

    // router.beforeEach((to,from,next)=>{
    //   console.log("global before each");
    //   next(true)
    // })
// c0a5cf
// #acdce6
// #81afb8
// #91789e
// #c0a5cf

    Vue.directive('rainbow',{
      bind(el,binding,vnode){
        el.style.background ='#' + ((1<<24)*Math.random()|0).toString(16);
        el.style.color = ((1<<24)*Math.random()|0).toString(16);;

        
      }
    })

    // const tutor = new VueRouter( 
    //   {
    //     tutorial,
    //     mode:'history'
    //   }
    // );


    // router.beforeEach((to,from,next)=>{
    //   console.log("beforeEach Global");
    //   next();
    // });

    new Vue({
      router,
      store,
      // tutor,
      render: h => h(App),
    }).$mount('#app')

    