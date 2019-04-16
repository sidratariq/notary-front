const state  ={
    filename:'',
    filesrc:'',
    status:['Finishing...'],
    contractdata:[],
    fileavalible:false,
    contractsource:'',
    // for tareget selectd contract
    selectedcontract:{},

    // for selected contract detail at manage screen
    contractdata:{},

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
        console.log(payload)
        state.recipients = payload
    },

    setcontractid:(state,payload)=>{
        state.contractid = payload
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
        console.log(payload)
        commit('setrecipients',payload)
    },
    act_contractid:({commit},payload)=>{
        commit('setcontractid',payload)
    }

};

export default{
    state,
    mutations,
    actions,
    getters
}


