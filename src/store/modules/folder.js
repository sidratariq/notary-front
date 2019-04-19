const state = {
    folder: []
};

const getters = {
    getfolder: state => {
        return state.folder
    }
};

const mutations = {

    setfolder: (state, payload) => {
        state.folder = payload;
        // console.log("value of flag is:" + state.flag)
    },

    addfolder: (state, payload) => {
        state.folder.push(payload)
    }
}

const actions = {
    updatefolder: ({ commit }, payload) => {
        commit('setfolder', payload)
        // console.log(state.flag)
    },

    addnewfolder: () => {
        commit('addfolder', payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
