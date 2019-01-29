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
        },

        mutations:{
        
        increment: (state,payload) =>{
                state.counter += payload;
        },

        decrement: (state,payload) =>{
                state.counter -= payload;
        }

        },
        

        actions:{
            // increment: context =>{
                // context.commit('increment');
            // },
            
            increment: ({commit},payload) => {
                commit('increment',payload);
            },        

            decrement:({commit},payload)=>{
                commit('decrement',payload);
            },

            asyncIncrementAction: ({commit},payload)=>{     
                setTimeout(()=>{commit('increment'),payload.by}
            ,payload.duration)
            }
            },

            asyncDecrementAction:({commit},payload)=>{
                setTimeout(
                    ()=>{commit('decrement',payload.by)},payload.duration)
            }



    });