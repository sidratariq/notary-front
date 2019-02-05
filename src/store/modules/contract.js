const state  ={
    filename:'',
    filesrc:'',
    status:['Finishing...']
};

const getters ={
    getfilename:state =>{
        return state.filename;
            },

    getfilesrc: state =>{
        return state.filesrc
    },
    getstatus: state=>{
        return state.status[0]
    }
};

const mutations = {
    setfilename: (state,payload) =>{
        state.filename = payload;
},

    setfilesrc: (state,payload) =>{
        state.filesrc = payload;
    },

    setstatus:(state,payload)=>{
        state.status[0] = payload
    }

};

const actions = {

    act_filename: ({commit},payload) => {
        commit('setfilename',payload);
    },        

    act_filesrc:({commit},payload)=>{
        commit('setfilesrc',payload);
    },

    act_status:({commit},payload)=>{
        commit('setstatus',payload)
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}


