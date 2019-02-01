    import Vue from 'vue';
    import Vuex from 'vuex'
    import counter from './modules/counter.js'
    import flag from './modules/flag.js'
    import picupload from './modules/picupload'

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        
        state:{
            counter:0,
            value:0
        },

        getters: {    
            value:state =>{
                return state.value
            }
        },

        mutations:{
        
        updatevalue: (state,payload) =>{
            state.value = payload;
        }
        },
        
        actions:{
        
            updatevalue:({commit},payload)=>{   
                    commit('updatevalue',payload)
            },        
            },

        modules:{
            counter,
            flag,
            picupload
        }


            



    });