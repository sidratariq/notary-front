import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    
    state:{
        counter:0
    },
    getters: {
        doublecounter:state =>{
            return state.counter * 2;
        },
        stringcounter: state =>{
            return state.counter + "Clicks"
        }

    }


});