const state  ={
    signavalible:false,
    initialavalible: false,
};

const getters ={

    getsignavalible:state =>{
        return state.signavalible;
    },

    getinitial: state =>{
        return state.initialavalible;
    }

};

const mutations = {
updatesignature: (state,payload) =>{
        state.signavalible =payload
},

updateinitial: (state,payload) =>{
        state.initialavalible =payload 
}

};

const actions = {
   
    changesignature: ({commit},payload) => {
        commit('updatesignature',payload);
    },        

    changeinitial:({commit},payload)=>{
        commit('updateinitial',payload);
    },
};

export default{
    state,
    mutations,
    actions,
    getters
}


