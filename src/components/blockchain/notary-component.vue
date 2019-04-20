<template>
  <div class="notary container-fluid">
    <div class="row setmargin">
      <div class="col-md-12 col-lg-12 col-sm-12">
        <h3 class="text-left">Save Your contract in blockchain</h3>
      </div>
    </div>

    <div class="row setmargin">
      <div class="col-md-9 col-sm-6 col-lg-9">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-3 text-right">
            <strong>Contract Name:</strong>
          </div>
          <div
            class="col-md-9 col-lg-9 col-sm-9 text-left"
          >{{contractdata.ContractData.ContractName}}</div>
        </div>

        <div class="row setmargin">
          <div class="col-md-3 col-lg-3 col-sm-3 text-right">
            <strong>Contract ID:</strong>
          </div>
          <div class="col-md-9 col-lg-9 col-sm-9 text-left">{{contractdata.ContractData.ContractID}}</div>
        </div>

        <div class="row setmargin">

           <div class="col-md-1 col-lg-1 col-sm-1 text-right"></div>
          <div class="col-md-9 col-lg-9 col-sm-9 text-left">
            <strong class="setmargin">
              <strong>
                <h4>Recipients</h4>
              </strong>
            </strong>
          </div>
          <div class="col-md-2 col-lg-2 col-sm-2 text-right"></div>
        </div>

        <div class="row">

           <div class="col-md-1 col-lg-2 col-sm-1 text-right"></div>
          <div
            class="col-md-9 col-lg-9 col-sm-9 text-left"
            style="height:180px; overflow-y:scroll; border:1px solid #ccc"
          >
            <recipient
              v-for="(data,index) in contractdata.Signers"
              :date="updatetime[1]"
              :time="updatetime[2]"
              :value="data"
              :key="index"
            >{{data}}</recipient>
          </div>

          <div class="col-md-2 col-lg-2 col-sm-2 text-right"></div>
        </div>
      </div>

      <div class="col-md-3 col-sm-6 col-lg-3">
        <a :href="profilepic" target="_blank" rel="noopener noreferrer">
          <div style="position:relative">
            <img
              :src="profilepic"
              style=" border:1px solid #ccc; z-index;111"
              width="100%"
              height="100%"
              alt="preview"
            >
          </div>
        </a>
      </div>
    </div>
    <!-- file show -->

    <div class="col-12 text-center">
      <!-- Contract hash value
      <input v-model="calculatehash" placeholder="hash value">
      Check Owner:
      <input v-model="checkOwner" placeholder="hash value">-->
      <!-- <button v-on:click="FindOwner" class="btn btn-sm btn-secondary">Check Owner</button> -->

      <hello-metamask/>

      <button v-on:click="saveHash" class="btn btn-sm btn-primary">Save Hash</button>
    </div>
  </div>
</template>

<script>
import HelloMetamask from "./hello-metamask";
import recipient from "../viewfile/recipients.vue";

export default {
  name: "notary",
  data() {
    return {
      amount: null,
      pending: false,
      winEvent: null,
      calculatehash: "",
      checkOwner: ""
    };
  },
  methods: {
    clickNumber(event) {
      console.log(
        "BETTING ON NUMBER, AMOUNT",
        event.target.innerHTML,
        this.amount
      );
      this.winEvent = null;
      this.pending = true;
      this.$store.state.contractInstance().bet(
        event.target.innerHTML,
        {
          gas: 300000,
          value: this.$store.state.web3
            .web3Instance()
            .toWei(this.amount, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log(err);
            this.pending = false;
          } else {
            let Won = this.$store.state.contractInstance().Won();
            Won.watch((err, result) => {
              if (err) {
                console.log("could not get event Won()");
              } else {
                this.winEvent = result.args;
                this.winEvent._amount = parseInt(result.args._amount, 10);
                this.pending = false;
              }
              console.log();
            });
          }
        }
      );
    },
    FindOwner(event) {
      console.log("hash = ", this.checkOwner);
      this.$store.state.contractInstance().getContractOwner(
        this.checkOwner,
        {
          gas: 500000,
          value: this.$store.state.web3.web3Instance().toWei(0, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log("error :", err);
          } else {
            console.log(result);
          }
        }
      );
    },

    saveHash(event) {
      console.log("hash = ", this.calculatehash);
      this.$store.state.contractInstance().saveHash(
        this.calculatehash,
        {
          gas: 500000,
          value: this.$store.state.web3.web3Instance().toWei(0.1, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log("error :", err);
          } else {
            console.log("result :", result);
          }
        }
      );
    }
  },

  computed: {
    profilepic: function() {
      let value = this.$store.getters.getcontractforhash.ContractData.Filepath;
      return "http://localhost:8000/" + value;
    },

    contractdata() {
      // console.log(this.$store.getters.getcontractforhash+"whateber")
      return this.$store.getters.getcontractforhash;
    },

    contractstatus() {
      return this.$store.getters.getcontractdata.ContractData.Status;
    },

    creationtime() {
      let creationtime = this.$store.getters.getcontractdata.ContractData
        .ContractcreationTime;
      let changetime = creationtime.split(" ");
      return changetime;
    },
    updatetime() {
      let updatetime = this.$store.getters.getcontractdata.ContractData
        .UpdateTime;
      let creationtime = this.$store.getters.getcontractdata.ContractData
        .ContractcreationTime;
      let changetime = [];
      if (updatetime == "") {
        changetime = creationtime.split(" ");
        return changetime;
      } else {
        changetime = updatetime.split(" ");
        return changetime;
      }
    }

    // ContractcreationTime
  },
  mounted() {
    console.log("dispatching getContractInstance");
    this.$store.dispatch("getContractInstance");
  },

  components: {
    HelloMetamask,
    recipient
  }
};
</script>

<style scoped>
.setmargin {
  margin-top: 15px;
}

.notary {
  /* margin-top: 50px; */
  text-align: center;
}
#loader {
  width: 150px;
}

* {
  color: #444444;
}
</style>
