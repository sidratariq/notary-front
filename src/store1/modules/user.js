const state  ={
    Userdata:{
        UserName:'sidra',
        Userid:'pidra',
        UserEmail:'okay',
        UserProfilepicture:'akjdakjdkh',
        UserInitials:'adadad',
        UserSignature:'dadada',     
        UserCompany:'dadad',
        UserPhone:'dadada',
        UserToken:'dadada',

        // these should be in the contract module
        Waitingforother:'1',
        Tosign:'1',  
        Expiringsoon:'1' 
    }

    
};

// getters for all user data 
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


// setters for all user data
const mutations = {
    
    setusername: (state,payload) =>{
        // console.log("username:"+payload)
        state.Userdata.UserName = payload;
    },

    setuserid:(state,payload)=>{
        state.Userdata.Userid = payload;

    },

    setuseremail:(state,payload)=>{
        state.Userdata.UserEmail= payload;

    },

    setprofilepicture: (state,payload) =>{
        // console.log(payload)

        state.Userdata.UserProfilepicture = payload;
    },

    setinitial:(state,payload)=>{
        // console.log(payload)

        state.Userdata.UserInitials = payload
    },

    setsignature:(state,payload)=>{
        // console.log(payload)

        state.Userdata.UserSignature = payload
    },

    setcompany:(state,payload)=>{
        // console.log(payload)

        state.Userdata.UserCompany= payload
    },
    setphone:(state,payload)=>{
        state.Userdata.UserPhone = payload
    },

    setWaitingforother:(state,payload)=>{
        state.Userdata.Waitingforother = payload   
    },
    
    setTosign:(state,payload)=>{
        state.Userdata.Tosign = payload
    },

    setExpiringsoon:(state,payload)=>{
        state.Userdata.Expiringsoon = payload
    }



    // Tosign:'',  
    // Expiringsoon:'

};

const actions = {

    change_username: ({commit},payload) => {
        // console.log("mutation running")
        commit('setusername',payload);
    }, 

    change_id:({commit},payload)=>{
        commit('setuserid',payload)
    },   
    change_email:({commit},payload)=>{
        commit('setuseremail',payload)
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
        commit('setsignature',payload)
    },

    changecompany:({commit},payload)=>{
        commit('setcompany',payload)
    },

    // setphone
    changephone:({commit},payload)=>{
        commit('setphone',payload)
    },

    // setWaitingforother
    changeWaitingforother:({commit},payload)=>{
        commit('setWaitingforother',payload)
    },

    // setTosign
    changeTosign:({commit},payload)=>{
        commit('setTosign',payload)
    },
    // setExpiringsoon
    changeExpiringsoon:({commit},payload)=>{
        commit('setExpiringsoon',payload)
    },
};

export default{
    state,
    mutations,
    actions,
    getters
}


