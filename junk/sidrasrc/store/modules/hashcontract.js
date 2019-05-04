const state ={
    ContractHash:{}
};

const getters = {
    getcontractforhash:state =>{
        return state.ContractHash
    }
};

const mutations = {

    setcontractforhash:(state,payload) =>{
        state.ContractHash = payload;
    }
}

const actions = {
    updateContracthash:({commit},payload)=>{
        commit('setcontractforhash',payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
