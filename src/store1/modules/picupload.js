const state = {
    uploadphoto: false
};

const getters = {
    getupload: state => {
        return state.uploadphoto
    }
};

const mutations = {

    setupload: state => {
        state.uploadphoto = !state.uploadphoto;
        // console.log("value of flag is:" + state.uploadphoto)
    }
}

const actions = {
    changephoto: ({ commit }) => {
        commit('setupload')
        // console.log(state.uploadphoto)

    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
