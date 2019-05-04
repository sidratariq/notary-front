<template>
  <div>
    <button class="btn btn-primary" @click="sendrequest()">send</button>

    {{usercontracts}}
    <button class="btn btn-secondary" @click="sendtoinbox()">Inbox</button>

    <button class="btn btn-secondary" @click="sendtodraft()">Draft</button>
    <button class="btn btn-secondary" @click="sendtoactionrequire()">Action Require</button>
    <button class="btn btn-secondary" @click="sendexpire()">Expiring soon</button>
    <button class="btn btn-secondary" @click="sendtowait()">WFO</button>

    <ul>
      <li v-for="(i,j) in usercontracts" :key="j">
        <p>
          <strong>contract id</strong>
          {{i.ContractID}}
        </p>

        <p>
          <strong>file path</strong>

          {{imgsource(i.Filepath) }}
        </p>

        <p>
          <strong>status</strong>
          {{i.Status}}
        </p>

        <p>
          <strong>Creation</strong>
          {{i.ContractcreationTime}}
        </p>

        <p>
          <strong>Creator</strong>
          {{i.Creator}}
        </p>

        <p>{{i.DelStatus}}</p>

        <p>{{i.UpdateTime}}</p>

        <p>{{i.ContractName}}</p>
        <p>{{i.ExpirationTime}}</p>
        <p>{{i.Blockchain}}</p>

        <p>{{i.Message}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contracts: ""
    };
  },
  computed: {
    usercontracts() {
      let haha = this.$store.getters.getcontractdata;
      //   console.log(typeof(haha))
      //   alert(haha)
      return haha;
    },
    token() {
      return this.$store.getters.getToken;
    }
  },
  methods: {

    imgsource(i) {
      return "localhost:8000/" + i;
    },

    sendrequest() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/sent", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          store.dispatch("act_contractdata", contracts);
          console.log(contracts.length);

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },

      //drafts
      sendtoinbox() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/inbox", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          console.log(res);
          //   contracts = JSON.parse(res.bodyText)
          //   alert(typeof(contracts))
          //   store.dispatch('act_contractdata',contracts)
          //   console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },

    sendtodraft() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/drafts", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          // alert(typeof(contracts))
          store.dispatch("act_contractdata", contracts);
          console.log(contracts.length);

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },
    sendtoactionrequire() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/actionReq", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          // alert(typeof(contracts))
          store.dispatch("act_contractdata", contracts);
          // console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },

    sendexpire() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/expSoon", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          // alert(typeof(contracts))
          store.dispatch("act_contractdata", contracts);
          // console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },

    sendtowait() {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000//waitingForOther", {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          // alert(typeof(contracts))
          store.dispatch("act_contractdata", contracts);
          // console.log(contracts.length)

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    }
  }
};
</script>

<style>
</style>
