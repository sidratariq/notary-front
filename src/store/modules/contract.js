const state  ={
    filename:'',
    filesrc:'',
    status:['Finishing...'],
    contractdata:[],
    fileavalible:false,
    contractsource:'',

    // signer data
    signers:[],
    // for tareget selectd contract
    selectedcontract:{},

    // for selected contract detail at manage screen
    contractdata:{},

    // path for user to act on
    contractpath:'',

    recipients:[],
    contractid:'',

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
    },
    getselectedcontract:state=>{
        return state.selectedcontract
    },
    getcontractsource:state=>{
        return state.contractsource
    },
    getrecipient:state=>{
        return state.recipients
    },

    getcontractid:state=>{
        return state.contractid
    },
    getcontractdata:state=>{
        return state.contractdata
    },

    // to get the contract path from the server
    getcontractpath:state=>{
        return "http://localhost:8000/"+state.contractpath || 0
    },

    // to get the contract path from the server
    getsigners:state=>{
        return state.signers || 0
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
    },

    setcontractsource:(state,payload)=>{
        state.contractsource =payload
    },

    setcontractselected:(state,payload)=>{
        state.selectedcontract =payload
    },

    setrecipients:(state,payload)=>{
        state.recipients = payload
    },

    setcontractid:(state,payload)=>{
        state.contractid = payload
    },

    setcontractdata:(state,payload)=>{

        state.contractdata = payload
    },

    setcontractpath:(state,payload)=>{
        state.contractpath = payload
    },
    setsigners:(state,payload)=>{
        state.signers = payload
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
    },
    act_avalible:({commit},payload)=>{

        commit('setavalible',payload)
    },
    act_contractsource:({commit},payload)=>{
        commit('setcontractsource',payload)
    },
    act_selectedcontract:({commit},payload)=>{
        commit('setcontractselected',payload)
    },
    act_recipients:({commit},payload)=>{
        commit('setrecipients',payload)
    },
    act_contractid:({commit},payload)=>{
        commit('setcontractid',payload)
    },
    act_contractdata:({commit},payload)=>{
        commit('setcontractdata',payload)
    },
    act_contractpath:({commit},payload)=>{
        commit('setcontractpath',payload)
    },

    // it saves data of all signers 
    act_signers:({commit},payload)=>{
        commit('setsigners',payload)
    }

};

export default{
    state,
    mutations,
    actions,
    getters
}


