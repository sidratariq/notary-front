    import Vue from 'vue';
    import Vuex from 'vuex'
    import counter from './modules/counter.js'
    import flag from './modules/flag.js'
    import picupload from './modules/picupload'
    import * as actions from './actions.js'
    import * as mutations from './mutations.js'
    import * as getters from './getters.js'

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        
        state:{
            counter:0,
            value:0,
            username:'',
            email:''
        },
        
        getters,
        mutations,
        actions,
        modules:{
            counter,
            flag,
            picupload
        }


            



    });