const state  ={
    filename:'',
    filesrc:'',
    status:['Finishing...'],
    contractdata:[],
    fileavalible:false
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
    },
    getavalible:state =>{
        return state.fileavalible
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
    },
    setavalible:(state,payload) =>{
        state.fileavalible = payload;
    }

};

    const actions = {
    act_filename: ({commit},payload) => {
        console.log(payload+'payload')
        commit('setfilename',payload);
    },        

    act_filesrc:({commit},payload)=>{
        console.log(payload+'imagesource')

        commit('setfilesrc',payload);
    },

    act_status:({commit},payload)=>{
        commit('setstatus',payload)
    },
    act_contractdata:({commit},payload)=>{
        commit('setcontractdata',payload)
    },
    act_avalible:({commit},payload)=>{

        commit('setavalible',payload)

    }
};

export default{
    state,
    mutations,
    actions,
    getters
}


