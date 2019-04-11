import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import userdata from './modules/user.js';
import picupload from './modules/picupload'
import flag from './modules/flag.js'
import file_avalible from './modules/fileavalible.js'
import contractfile from './modules/contract'




Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
  })


export const store = new Vuex.Store({
    state: {
        count: 0,
        value:'',
        imagevalue:''
       
      },

    plugins: [vuexLocalStorage.plugin],
    
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        updateValue:(state,payload)=>{
          state.value = payload
        },

        setimage:(state,payload)=>{
          state.imagevalue = payload
        }
      },

    getters:{
      getvalue: state =>{
        return state.value
      }, 
      getimage: state =>{
        return state.imagevalue
      }
    },

    actions:{

      updateValue({commit},payload){
        commit('updateValue',payload)
      },

      updateImage({commit},payload){
        commit('setimage',payload)
      }

    },

    modules:{
      userdata,
      flag,
      picupload,
      file_avalible,
      contractfile
  }



})