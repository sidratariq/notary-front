<template>
    <div>
        <button class="btn btn-primary" @click="sendrequest()"> send</button>

        {{usercontracts}}
       
        <button class="btn btn-secondary" @click="sendtoinbox()"> Inbox</button>

        <button class="btn btn-secondary" @click="sendtodraft()">Draft</button>

        <button class="btn btn-secondary" @click="sendtoactionrequire()">Action Require</button>
        <button class="btn btn-secondary" @click="sendexpire()">Expiring soon</button>
        <button class="btn btn-secondary" @click="sendtowait()">WFO</button>


    </div>
</template>

<script>
export default {
    data(){
        return{
            contracts:''
        }
    },
computed:{
    usercontracts(){
      let haha =  this.$store.getters.getcontractdata;
    //   console.log(typeof(haha))
    //   alert(haha)
      return haha

    },
    token() {
      return this.$store.getters.getToken
    },
},
methods:{
      sendrequest() {
      let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000/sent", {
          headers: {
            Token: token
          }
        })
        .then(res => {

          contracts = JSON.parse(res.bodyText)
          alert(typeof(contracts))
          store.dispatch('act_contractdata',contracts)
          console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    },
// /drafts
    sendtoinbox(){
      let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000/inbox", {
          headers: {
            Token: token
          }
        })
        .then(res => {
            console.log(res)
        //   contracts = JSON.parse(res.bodyText)
        //   alert(typeof(contracts))
        //   store.dispatch('act_contractdata',contracts)
        //   console.log(contracts.length)

          if (res.status == 200) {
            return res
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    },

    sendtodraft(){
      let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000/drafts", {
          headers: {
            Token: token
          }
        })
        .then(res => {

          contracts = JSON.parse(res.bodyText)
          alert(typeof(contracts))
          store.dispatch('act_contractdata',contracts)
          console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    },
    sendtoactionrequire(){
      let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000/actionReq", {
          headers: {
            Token: token
          }
        })
        .then(res => {

          contracts = JSON.parse(res.bodyText)
          alert(typeof(contracts))
          store.dispatch('act_contractdata',contracts)
          console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    },

    sendexpire(){
         let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000/expSoon", {
          headers: {
            Token: token
          }
        })
        .then(res => {

          contracts = JSON.parse(res.bodyText)
          alert(typeof(contracts))
          store.dispatch('act_contractdata',contracts)
          console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    },


    sendtowait(){
           let token= this.token;
      let store = this.$store
      let contracts = []
      this.$http
        .get("http://localhost:8000//waitingForOther", {
          headers: {
            Token: token
          }
        })
        .then(res => {

          contracts = JSON.parse(res.bodyText)
          alert(typeof(contracts))
          store.dispatch('act_contractdata',contracts)
          console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }

        }).then(

        )
        .then(
            error => {
            
          }
        );
    }

}

  


}
</script>

<style>

</style>
