const state  ={
    filename:'',
    filesrc:'',
    status:['Finishing...'],
    contractdata:[],
    
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
    },
    getcontractdata:state=>{
        return state.contractdata
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
    },
    setcontractdata:(state,payload)=>{
        state.contractdata = payload
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
    },
    act_contractdata:({commit},payload)=>{
        commit('setcontractdata',payload)
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}


