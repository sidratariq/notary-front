const state  ={
    counter:0
};

const getters ={
    doublecounter:state =>{
        return state.counter * 2;
            },

    stringcounter: state =>{
        return state.counter + "Clicks"
    }
};

const mutations = {
    increment: (state,payload) =>{
        state.counter += payload;
},

decrement: (state,payload) =>{
        state.counter -= payload;
}

};

const actions = {
    asyncIncrementAction: ({commit},payload)=>{     
        setTimeout(()=>{commit('increment', payload.by)}
    ,payload.duration)
    },

    asyncDecrementAction:({commit},payload)=>{
        setTimeout(
            ()=>{commit('decrement',payload.by)},payload.duration)
    },
    increment: ({commit},payload) => {
        commit('increment',payload);
    },        

    decrement:({commit},payload)=>{
        commit('decrement',payload);
    },
};

export default{
    state,
    mutations,
    actions,
    getters
}


