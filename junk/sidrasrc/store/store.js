import Vue from 'vue'
import Vuex from 'vuex'
import getWeb3 from '../util/getWeb3'
import pollWeb3 from '../util/pollWeb3'
import getContract from '../util/getContract'
import VuexPersist from 'vuex-persist';
import userdata from './modules/user.js';
import picupload from './modules/picupload'
import folders from './modules/folder'
import flag from './modules/flag.js'
import contractfile from './modules/contract'
import rect from './modules/rect'
import hashcontract from './modules/hashcontract'



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
    value: '',
    imagevalue: '',
    web3: {
      isInjected: false,
      web3Instance: null,
      networkId: null,
      coinbase: null,
      balance: null,
      error: null
    },
    contractInstance: null,
    // for drag and drop screen
    currentrecipientid: '',
    
    // for drag and drop playgroundscreen,
    currentreipientname:'',

    // index for deleteing index from state object
    currentindex:0




  },

  plugins: [vuexLocalStorage.plugin],

  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    updateValue: (state, payload) => {
      state.value = payload
    },

    setimage: (state, payload) => {
      state.imagevalue = payload
    },

    registerWeb3Instance(state, payload) {
      // console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
      pollWeb3()
    },
    pollWeb3Instance(state, payload) {
      // console.log('pollWeb3Instance mutation being executed', payload)
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseInt(payload.balance, 10)
    },
    registerContractInstance(state, payload) {
      // console.log('Casino contract instance: ', payload)
      state.contractInstance = () => payload
    }
  },

  getters: {
    getvalue: state => {
      return state.value
    },
    getimage: state => {
      return state.imagevalue
    }
  },

  actions: {

    updateValue({ commit }, payload) {
      commit('updateValue', payload)
    },

    updateImage({ commit }, payload) {
      commit('setimage', payload)
    },

    registerWeb3({ commit }) {
      // console.log('registerWeb3 Action being executed')
      getWeb3.then(result => {
        // console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        // console.log('error in action registerWeb3', e)
      })
    },
    pollWeb3({ commit }, payload) {
      // console.log('pollWeb3 action being executed')
      commit('pollWeb3Instance', payload)
    },
    getContractInstance({ commit }) {
      getContract.then(result => {
        commit('registerContractInstance', result)
      }).catch(e => console.log(e))
    }

  },

  modules: {
    userdata,
    flag,
    picupload,
    contractfile,
    folders,
    rect,
    hashcontract
  }


})