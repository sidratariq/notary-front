    import Vue from 'vue';
    import Vuex from 'vuex'

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        
        state:{
            counter:0,
            value:0
        },

        getters: {

            doublecounter:state =>{
                return state.counter * 2;
                    },

            stringcounter: state =>{
                return state.counter + "Clicks"
            },
            
            value:state =>{
                return state.value
            }
        },

        mutations:{
        
        increment: (state,payload) =>{
                state.counter += payload;
        },

        decrement: (state,payload) =>{
                state.counter -= payload;
        },

        updatevalue: (state,payload) =>{
            state.value = payload;
        }

        },
        

        actions:{
            
            increment: ({commit},payload) => {
                commit('increment',payload);
            },        

            decrement:({commit},payload)=>{
                commit('decrement',payload);
            },
            updatevalue:({commit},payload)=>{   
                    commit('upadatevalue',payload)
            }
            ,

            asyncIncrementAction: ({commit},payload)=>{     
                setTimeout(()=>{commit('increment', payload.by)}
            ,payload.duration)
            },
            asyncDecrementAction:({commit},payload)=>{
                setTimeout(
                    ()=>{commit('decrement',payload.by)},payload.duration)
            }

            }

            



    });