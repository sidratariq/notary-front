<template>
  <div class="notary container setpadding">
    <div class="row setmargin">
      <div class="col-5 col-md-5 col-lg-5 col-sm-5">
        <p style="font-size:1.75rem" class="text-left">Save Your contract in blockchain</p>
      </div>
      <hello-metamask/>
    </div>

    <div class="row setmargin">
      <div class="col-md-9 col-sm-6 col-lg-9">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-3 text-left">
            <strong>Contract Name:</strong>
          </div>
          <div
            class="col-md-9 col-lg-9 col-sm-9 text-left"
          >{{contractdata.ContractData.ContractName}}</div>
        </div>

        <div class="row setmargin">
          <div class="col-md-3 col-lg-3 col-sm-3 text-left">
            <strong>Contract ID:</strong>
          </div>
          <div class="col-md-9 col-lg-9 col-sm-9 text-left">{{contractdata.ContractData.ContractID}}</div>
        </div>

        <div class="row">
          <div
            class="col-md-1 col-lg-2 col-sm-1 text-left"
            style="padding:1.75rem 1.75rem 1.75rem 0rem"
          >
            <h4>Recipients</h4>
          </div>
          <div
            class="col-md-9 col-lg-9 col-sm-12 text-left"
            style="height:180px; overflow-y:scroll; border:1px solid #ccc; background-color:#ffffff"
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

    <div class="col-12">
      <div class="row pull-right">
        <button
          :disabled="able"
          v-on:click="saveHash"
          class="btn btn-sm btn-primary"
        >Save in Blockchain</button>
        <!-- <small class="text-muted">(0.1 ethers will be deducted from your account)</small> -->
      </div>
      <div class="clearfix"></div>
      <div class="row pull-right">
        <small class="text-muted">(0.1 ethers will be deducted from your account)</small>
      </div>
      <button
        :disabled="able"
        v-on:click="FindOwner"
        class="btn btn-sm btn-primary"
      >Verify from blockchain</button>
    </div>
  </div>
</template>

<script>
import recipient from "../viewfile/recipients.vue";
import { NETWORKS } from "../../util/constants/networks";
import { mapState } from "vuex";
import HelloMetamask from "@/components/blockchain/hello-metamask";

export default {
  name: "notary",
  data() {
    return {
      value: "",
      amount: null,
      pending: false,
      winEvent: null,
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
      this.$store.state.contractInstance().getContractOwner(
        this.contracthash,
        {
          gas: 500000,
          value: this.$store.state.web3.web3Instance().toWei(0, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            alert("File not Found in Blockchain");
          } else {
            console.log(result);
            this.$http
              .post(
                "http://localhost:8000/verifyContract",
                {
                  PublicAddress: result
                },
                {
                  headers: {
                    Token: this.token
                  }
                }
              )
              .then(
                response => {
                  if (response.status == 200) {
                    alert("Contract saved in blockchain by: " + response.body);
                  }
                },
                error => {
                  alert("CONTRACT NOT FOUND");
                }
              );
          }
        }
      );
    },

    saveHash(event) {
      this.$store.state.contractInstance().saveHash(
        this.contracthash,
        {
          gas: 500000,
          value: this.$store.state.web3.web3Instance().toWei(0.1, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log("error :", err);
          } else {
            let address = this.$store.state.web3.coinbase;
            console.log("address is :" + address);
            this.$http
              .post(
                "http://localhost:8000/updateBlockchainstatus",
                {
                  ContractID: this.ContractID,
                  userid: this.userid,
                  publicAddress: address
                },
                {
                  headers: {
                    Token: this.token
                  }
                }
              )
              .then(
                response => {
                  if (response.status == 200) {
                    alert("CONTRACT IS SUCCESSFLLY SAVED IN BLOCKCHAIN");
                  }
                },
                error => {
                  console.log(error);
                  // console.log(response.bodyText)
                }
              );
          }
        }
      );
    }
  },

  computed: {
    able: function() {
      if (this.isInjected == true && this.network == "Rinkeby test network") {
        return true;
      } else {
        return false;
      }
    },
    //  isInjected: state => state.web3.isInjected,
    isInjected: function() {
      let value = this.$store.state.web3.isInjected;
      return value;
    },
    networkID: function() {
      let network = NETWORKS[this.$store.state.web3.networkId];
      return network;
    },
    contracthash: function() {
      let value = this.$store.getters.getcontractforhash.ContractHash;
      return value;
    },
    token() {
      return this.$store.getters.getToken;
    },
    ContractID: function() {
      return this.$store.getters.getcontractid;
    },
    userid: function() {
      return this.$store.getters.getuserid;
    },
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
    "hello-metamask": HelloMetamask,
    recipient
  }
};
</script>

<style scoped>
.row {
  margin-top: 25px;
}

.setpadding {
  padding-left: 0px;
  padding-right: 0px;
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
  /* background-color:rgb(244, 244, 244); */
  /* background-color: blueviolet */
}

#has-metamask {
  color: green;
}
#no-metamask {
  color: red;
}
</style>