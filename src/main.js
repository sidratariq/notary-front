    import Vue from 'vue'
    import App from './App.vue'
    import VueRouter from 'vue-router'
    import VueResource from 'vue-resource'
    import {routes} from './routes.js'
    import VueSignaturePad from 'vue-signature-pad';
    // import vueSignature from "vue-signature"
    // import VueHtml2Canvas from 'vue-html2canvas';
    // import {tutorial} from './tutorialroutes.js'
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import Vuelidate from 'vuelidate'

    
    import {store} from './store/store';

    Vue.use(VueResource);
    Vue.use(Vuelidate)
    Vue.use(VueSignaturePad);
    // Vue.use(vueSignature)
    // Vue.use(VueHtml2Canvas);

    Vue.config.productionTip = false
    Vue.use(VueRouter);

    const router = new VueRouter( 
      {
        routes,
        
        mode:'history'
      }
    );

    Vue.directive('rainbow',{
      bind(el,binding,vnode){
        el.style.background = '#' + Math.random().toString().slice(2,8);
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

    