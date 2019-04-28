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



    Vue.directive('rainbow',{
      bind(el,binding,vnode){
 
        let arr= ['c0a5cf','acdce6','81afb8','91789e','c0a5cf',
                  '8D8741','659DBD','DAAD86','BC986A','05386B',
                   'FC4445','55BCC9','8EE4AF','C3073F','AFD275',
                  '45A29E' ,'EE4C7C']
        for(let i=0;i<20;i++){
          el.style.background ='#' + arr[Math.floor(Math.random() * arr.length)]
        }
        // el.style.background ='#' + ((1<<24)*Math.random()|0).toString(16);
        // el.style.color = ((1<<24)*Math.random()|0).toString(16);;

        
      }
    })

    

    new Vue({
      router,
      store,
      // tutor,
      render: h => h(App),
    }).$mount('#app')

    