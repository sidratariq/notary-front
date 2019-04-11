const state ={
    flag:false
};

const getters = {
    getflag:state =>{
        return state.flag
    }
};

const mutations = {

    setflag:state =>{
        state.flag = !state.flag;
        // console.log("value of flag is:" + state.flag)
    }
}

const actions = {
    changeflag:({commit})=>{
        commit('setflag')
        // console.log(state.flag)

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
