    import Vue from 'vue';
    import Vuex from 'vuex'
    import counter from './modules/counter.js'
    import flag from './modules/flag.js'
    import picupload from './modules/picupload'
    import contractfile from './modules/contract'
    import file_avalible from './modules/fileavalible.js'
    import userdata from './modules/user.js'
    import uploadsignature from './modules/createsignn.js'
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
            picupload,
            contractfile,
            file_avalible,
            userdata,
            uploadsignature
        }
    });