const state ={
    fileavalible:false
};

const getters = {
    getavalible:state =>{
        return state.fileavalible
    }
};

const mutations = {

    setavalible:state =>{
        state.fileavalible = !state.fileavalible;
        // console.log("value of flag is:" + state.fileavalible)
    }

}

const actions = {
    act_avalible:({commit})=>{
        // console.log("before function commit "+ state.fileavalible)

        commit('setavalible')
        // console.log("after function commit"+state.fileavalible)

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}