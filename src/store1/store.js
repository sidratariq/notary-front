    import Vue from 'vue';
    import Vuex from 'vuex'
    import VuexPersist from 'vuex-persist';
    import counter from './modules/counter.js'
    import flag from './modules/flag.js'
    import picupload from './modules/picupload'
    import contractfile from './modules/contract'
    import file_avalible from './modules/fileavalible.js'
    import userdata from './modules/user.js'
    import * as actions from './actions.js'
    import * as mutations from './mutations.js'
    import * as getters from './getters.js'

    Vue.use(Vuex)

    const vuexLocalStorage = new VuexPersist({
        key: 'vuex', // The key to store the state on in the storage provider.
        storage: window.localStorage, // or window.sessionStorage or localForage
        // Function that passes the state and returns the state with only the objects you want to store.
        // reducer: state => state,
        // Function that passes a mutation and lets you decide if it should update the state in localStorage.
        // filter: mutation => (true)
      })
    Vue.use(Vuex);

    export const store = new Vuex.Store({
        plugins: [vuexLocalStorage.plugin],
        state:{
            counter:0,
            value:0,
           
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
        }
    });