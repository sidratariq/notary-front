const state = {
    uploadphoto: false,
    imagesource:''
};

const getters = {
    getupload: state => {
        return state.uploadphoto
    },
    getimagesource:state =>{
        return state.imagesource
    }
};

const mutations = {

    setupload: state => {
        state.uploadphoto = !state.uploadphoto;
    },

    setimagesource:(state,payload) =>{
        state.imagesource = payload
    }
    
}

const actions = {
    changephoto: ({ commit }) => {
        commit('setupload')
    },

    changeimagesource:({commit},payload)=>{
        console.log("1**")
        commit('setimagesource',payload)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
