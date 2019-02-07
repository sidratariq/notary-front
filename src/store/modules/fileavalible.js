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
        console.log("i am file avalible file and value is "+ state.fileavalible)

        commit('setavalible')
        console.log("mhy updates state is hahdagda"+state.fileavalible)

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
