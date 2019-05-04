<template>
  <div class="row">
    <div v-if="signers==false" class="col-1 setpadding" style="text-align:center">
      <!--shows signed button if user is gigne  -->
      <button
        class="btn btn-primary btn-sm"
        
        type="button"
      >SIGN</button>
     
    </div>

     <div  v-if="signers==true" class="col-1 setpadding" style="text-align:center">
      <!--shows signed button if user is gigne  -->

      <button
        class="btn btn-success btn-sm"
        type="button"
        :disabled="false"
      >SIGNED</button>

    </div>

    <div class="col-1 setpadding" style="text-align:center">
      <!-- href='filepath' -->
      <button
        class="btn btn-sm apply"
        data-toggle="modal"
        data-target="#movefolder"
        type="button"
      >MOVE</button>
    </div>

    <div class="col-1 col-md-2 col-xs-2 col-sm-2 setpadding" style="text-align:center">
      <button class="btn btn-sm apply" type="button">Export As CSV</button>
    </div>

    <div class="col-1 col-md-2 setpadding" style="text-align:center">
      <button class="btn btn-sm apply" type="button">RESEND</button>
    </div>

    <div class="col-3 setpadding" style="text-align:left">
      <button
        v-if="blockchainstatus==0"
        class="btn btn-md apply green"
        @click="SaveinBlockhchain()"
        type="button"
      >
        Save in Blockchain
        <i
          class="fab fa-bitcoin"
          style="color:green;transform: rotate(-16deg); margin:3px"
        ></i>
      </button>

      <button
        v-if="blockchainstatus==1"
        class="btn btn-success btn-md green"
        style="border:1px solid #ccc"
        @click="SaveinBlockhchain()"
        type="button"
      >
        Verify
        <i
          class="fab fa-bitcoin"
          style="color:orange;transform: rotate(-16deg); margin:3px; "
        ></i>
      </button>
    </div>

    <div class="col-lg-1 col-md-3 col-sm-2 col-xs-12"></div>

    <!-- print and download -->
    <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12 setpadding">
      <div class="row setpadding" style="margin-left:0px; margin-right:0px">
        <div class="col-3 setpadding"></div>

        <div class="col-3 setpadding">
          <div class="btn-group setpadding">
            <button
              class="btn btn-sm apply download"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a :href="imagesoure"></a>
              <i class="fas fa-download circle"></i>
            </button>
          </div>
        </div>

        <div class="col-3 setpadding">
          <button @click="print" class="btn btn-sm apply print" type="button">
            <i class="fas fa-print circle"></i>
          </button>
        </div>
      </div>
    </div>

    <!--Modal-->
    <div class="modal" id="movefolder">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Choose a Folder to move your contract</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <ul>
              <li
                v-for="(i,index) in folders"
                :key="index"
                style="border-top:1px solid #ccc;border-bottom:1px solid #ccc"
              >
                <!-- @click="MoveContract(i.FolderID,contractid)" -->
                <h6 class="movefolder" @click="MoveContract(i.FolderID,contractid)">{{i.FolderName}}</h6>
              </li>
            </ul>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      filepath: localStorage.getItem("filepath")
    };
  },

  // contractid from parent
  props: ["contractid"],

  methods: {
    print() {
      window.print();
      // print(this.$refs.sidecontract)
    },

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
    },

    // move folder around
    MoveContract(arg1, arg2) {
      let token = this.token;
      // alert(aa)
      let contractid = arg2;
      let folderid = arg1;
      console.log(contractid);
      this.$http
        .post(
          "http://localhost:8000/moveContract",
          {
            FolderID: folderid,
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
            console.log(res.bodyText);
            alert("updated");
          }
          return res;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  computed: {
    imagesoure() {
      let contractdata = this.$store.getters.getcontractdata;
      console.log(contractdata);
      let imgsource =
        "http://localhost:8000/DownloadFile?file=" +
        contractdata.ContractData.Filepath;
      return imgsource;
      //
    },
    // getfolder list
    folders: function() {
      return this.$store.getters.getfolder;
    },

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

      let store = this.$store.getters.getuserid;

      for (let i = 0; i < signers.length; i++) {
        if (signers[i].UserID == store && signers[i].SignStatus == "Signed") {
          return true;
        } else {
          return false;
        }
      }
    },

    blockchainstatus() {
      return this.contractdata.ContractData.Blockchain;
    }
  },

  // called when the component is created to get the export as csv file
  created: function() {
    // defining exportfile for sidra
    var exportfile = "sidra";
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
          let path =
            "http://localhost:8000/" +
            res.bodyText.substring(1, res.bodyText.length - 2);
          exportfile = path;
          localStorage.setItem("filepath", path);
          // alert(localStorage.getItem('filepath'))
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

.circle {
  color: #868686;
  /* height: 16px; */
  /* width: 16px; */
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

ul {
  padding-left: 0px;
}

ul li {
  padding: 0px;
  list-style: none;
}

.modal-body {
  max-height: 132px;
  overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  display: none;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
