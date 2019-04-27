<template>
  <div class="row">
    <div class="col-2 setpadding">
      <button class="btn btn-primary btn-sm" v-if="signers==true" type="button" @click="gotoSignscreen()">SIGN</button>
      <button class="btn btn-primary btn-sm" v-if="signers==false" type="button" @click="gotoSignscreen()">SIGNED</button>

    </div>

    <div class="col-1 setpadding">
      <button class="btn btn-sm apply" type="button">MOVE</button>
    </div>

    <div class="col-1 col-md-2 col-xs-2 col-sm-2 setpadding">
      <button class="btn btn-sm apply" @click="ExportAsCsv(contractid)" type="button">Export As CSV</button>
    </div>



    <div class="col-1 col-md-2 setpadding">
      <button class="btn btn-sm apply" type="button">RESEND</button>
    </div>

    <div class="col-3 setpadding">
      <button class="btn btn-md apply green" @click="SaveinBlockhchain()" type="button">
        Save in Blockchain
        <i
          class="fab fa-bitcoin"
          style="color:green;transform: rotate(-16deg); margin:3px"
        ></i>
      </button>
    </div>


  </div>
</template>

<script>
export default {
  data: () => {
    return {
      filepath: null,
    };
  },
  

  // contractid from parent 
  props: ["contractid"],
  
  methods: {
    // save in blockchain
    SaveinBlockhchain() {
      let token = this.token;
      let store = this.$store;
      console.log(this.contractid);

      this.$http
        .post(
          "http://localhost:8000/SaveinBlockchain",
          { ContractID: this.contractid },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          if (res.status == 200) {
            console.log(token);
            console.log(this.contractid);

            let value = JSON.parse(res.bodyText);
            // console.log(value)

            store.dispatch("updateContracthash", value);

            this.$router.push("/saveinblockchain");
          }
          return res;
        })
        .catch(error => {
          console.log(error);
        });
    },

    //sign screen route
    gotoSignscreen() {
      this.$router.push("/signscreen");
    },

    // print function for printing of current contract
    click() {
      this.print();
    }

  },
  computed: {

    // getting usertoken
    token: function() {
      return this.$store.getters.getToken;
    },

    // getting contractdata 
    contractdata() {
      return this.$store.getters.getcontractdata;
    },

    // return status for signed contract and not signed contract
    signers() {
      let signers = this.contractdata.Signers;
     
      let store = this.$store.getters.getuserid

      for (let i = 0; i < signers.length; i++) {
        if (signers[i].UserID == store) {
          return  true
        }
        else{
          return  false
        }
      }
    }
  },

  // called when the component is created to get the export as csv file
  created: function() {
    // defining exportfile for sidra
    var exportfile = 'sidra';
    let token = this.token;
    let contractid = this.contractid;
    this.$http
      .post(
        "http://localhost:8000/ExportCSV",
        {
          ContractID: contractid
        },
        {
          headers: {
            Token: token
          }
        }
      )
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          let path = "http://localhost:8000/" + res.bodyText.substring(1, res.bodyText.length - 2);
          exportfile = path
          // alert(exportfile)
        }
        return res;
      })
      .catch(error => {
        alert(error);
      });

      // alert(exportfile+"not acessable")

  }
};
</script>



<style scoped>
.dropdown-item {
  width: 120px;
}

.sucess {
  color: #008938;
}

.padding {
  padding: 0.25rem 1.5rem;
}

.date {
  /* padding-left:0px;  */
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-rendering: optimizelegibility;
  font-size: 13px;
  line-height: 18px;
}

.apply {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

.green {
  /* background: #008938; */
  font-size: 14px;
}

.dropdown-item {
  width: 120px;
}

.dropdown-menu {
  min-width: 10rem;
}

.setpadding {
  padding-left: 0px;
  padding-right: 0px;
}

.setmargin {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
