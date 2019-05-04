const state = {
    Userdata: {
        UserName: '',
        Userid: '',
        UserEmail: '',
        UserProfilepicture: '',
        UserInitials: '',
        UserSignature: '',
        UserCompany: '',
        UserPhone: '',
        UserToken: '',
        // these should be in the contract module
        Waitingforother: '1',
        Tosign: '1',
        Expiringsoon: '1'
    },

    signaturesrc: '',
    initialsrc: ''


};

// getters for all user data 
const getters = {

    getusername: state => {
        return state.Userdata.UserName;
    },

    getuserid: state => {
        return state.Userdata.Userid;
    },

    getemail: state => {
        // console.log("chal bhi rhaa hn mein"+state.Userdata.UserEmail)

        return state.Userdata.UserEmail
    },

    getprofilepicture: state => {
        // console.log("chal rhaa hn mein"+state.Userdata.UserProfilepicture)
        //   return this.$store.getters.getprofilepicture || 0

        return "http://localhost:8000/" + state.Userdata.UserProfilepicture

    },

    getinitials: state => {
        return state.Userdata.UserInitials
    },

    getsignature: state => {
        return state.Userdata.UserSignature;
    },

    getcompany: state => {
        return state.Userdata.UserCompany
    },

    getphone: state => {
        return state.Userdata.UserPhone
    },

    // these should be in the contract
    getwaiting: state => {
        return state.Userdata.Waitingforother;
    },

    getosign: state => {
        return state.Userdata.Tosign
    },

    getexpiringsoon: state => {
        return state.Userdata.Expiringsoon
    },
    getToken: state => {
        return state.Userdata.UserToken
    },

    getsignsrc: state => {
        return state.signaturesrc
    },

    getinitialsrc: state => {
        return state.initialsrc
    }
};


// setters for all user data
const mutations = {

    setusername: (state, payload) => {
        // console.log("username:"+payload)
        state.Userdata.UserName = payload;
    },

    setuserid: (state, payload) => {
        state.Userdata.Userid = payload;
    },

    setuseremail: (state, payload) => {
        state.Userdata.UserEmail = payload;

    },

    setprofilepicture: (state, payload) => {
        state.Userdata.UserProfilepicture = payload;
        // window.location.reload()
    },

    setinitial: (state, payload) => {
        console.log(payload+"inside setsignature")
        state.Userdata.UserInitials = payload
    },

    setsignature: (state, payload) => {
        console.log(payload+"inside setsignature")

        state.Userdata.UserSignature = payload;
        // window.location.reload();

    },

    setcompany: (state, payload) => {
        // console.log(payload)

        state.Userdata.UserCompany = payload
    },
    setphone: (state, payload) => {
        state.Userdata.UserPhone = payload
    },

    setWaitingforother: (state, payload) => {
        state.Userdata.Waitingforother = payload
    },

    setTosign: (state, payload) => {
        state.Userdata.Tosign = payload
    },

    setExpiringsoon: (state, payload) => {
        state.Userdata.Expiringsoon = payload
    },

    setToken: (state, payload) => {
        state.Userdata.UserToken = payload
    },

    setisignsrc: (state, payload) => {
        state.signaturesrc = payload;
    },
    setinitialsrc: (state, payload) => {
        state.initialsrc = payload
    }
};

const actions = {

    change_username: ({ commit }, payload) => {
        // console.log("mutation running")
        commit('setusername', payload);
    },

    change_id: ({ commit }, payload) => {
        commit('setuserid', payload)
    },
    change_email: ({ commit }, payload) => {
        commit('setuseremail', payload)
    },

    change_userprofilepic: ({ commit }, payload) => {
        // console.log("mutation running set profile picsture")
        commit('setprofilepicture', payload);
    },

    changeinitial: ({ commit }, payload) => {
        console.log(payload)
        commit('setinitial', payload)
    },

    changesignature: ({ commit }, payload) => {
        console.log(payload)
        commit('setsignature', payload)
    },

    changecompany: ({ commit }, payload) => {
        commit('setcompany', payload)
    },

    // setphone
    changephone: ({ commit }, payload) => {
        commit('setphone', payload)
    },

    // setWaitingforother
    changeWaitingforother: ({ commit }, payload) => {
        commit('setWaitingforother', payload)
    },

    // setTosign
    changeTosign: ({ commit }, payload) => {
        commit('setTosign', payload)
    },
    // setExpiringsoon
    changeExpiringsoon: ({ commit }, payload) => {
        commit('setExpiringsoon', payload)
    },

    changeToken: ({ commit }, payload) => {
        commit('setToken', payload)
    },

    changesignsrc: ({ commit }, payload) => {
        commit('setisignsrc', payload)
    },

    changeinitialsrc: ({ commit }, payload) => {
        commit('setinitialsrc', payload)
    }


};

export default {
    state,
    mutations,
    actions,
    getters
}


