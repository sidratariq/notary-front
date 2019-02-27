const state  ={
    Userdata:{
        UserName:'',
        Userid:'',
        UserEmail:'',
        UserProfilepicture:'',
        UserInitials:'',
        UserSignature:'',     
        UserCompany:'',
        UserPhone:'',

        // these should be in the contract module
        Waitingforother:'',
        Tosign:'',  
        Expiringsoon:'' 
    }

    
};

const getters ={

    getusername:state =>{
        return state.Userdata.UserName;
    },

    getuserid: state =>{
        return state.Userdata.Userid;
    },

    getemail: state=>{
        // console.log("chal bhi rhaa hn mein"+state.Userdata.UserEmail)

        return state.Userdata.UserEmail
    },
    
    getprofilepicture:state=>{
        // console.log("chal rhaa hn mein"+state.Userdata.UserProfilepicture)
        return state.Userdata.UserProfilepicture
    },

    getinitials:state=>{
        return state.UserInitials
    },

    getsignature:state=>{
        return state.UserSignature;
    },

    getcompany:state=>{
        return state.UserCompany
    },

    getphone:state=>{
    return state.UserPhone    
    },

    // these should be in the contract
    getwaiting:state=>{
        return state.Waitingforother;
    },

    gertosign:state=>{
        return state.Tosign
    },

    getexpiringsoon:state=>{
        return state.Expiringsoon
    }
};

const mutations = {
    
    setusername: (state,payload) =>{
        // console.log("username:"+payload)
        state.UserName = payload;
    },

    setprofilepicture: (state,payload) =>{
        // console.log(payload)

        state.UserProfilepicture = payload;
    },

    setinitial:(state,payload)=>{
        // console.log(payload)

        state.UserInitials = payload
    },

    setsignature:(state,payload)=>{
        // console.log(payload)

        state.UserSignature = payload
    },

    setcompany:(state,payload)=>{
        // console.log(payload)

        state.UserCompany= payload
    },
};

const actions = {

    change_username: ({commit},payload) => {
        // console.log("mutation running")
        commit('setusername',payload);
    },        

    change_userprofilepic:({commit},payload)=>{
        // console.log("mutation running")
        commit('setprofilepicture',payload);
    },

    changeinitial:({commit},payload)=>{
        // console.log("mutation running")
        commit('setinitial',payload)
    },

    changesignature:({commit},payload)=>{
        // console.log("mutation running")
        commit('setsignature',payload)
    },

    changecompany:({commit},payload)=>{
        // console.log("mutation running")
        
        commit('setcompany',payload)
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}


