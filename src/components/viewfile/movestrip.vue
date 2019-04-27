<template>
  <div class="row">
    <div class="col-2 setpadding">
      <button
        class="btn btn-primary btn-sm"
        v-if="signers==true"
        type="button"
        @click="gotoSignscreen()"
      >SIGN</button>
      <button
        class="btn btn-primary btn-sm"
        v-if="signers==false"
        type="button"
        @click="gotoSignscreen()"
      >SIGNED</button>
    </div>

    <div class="col-1 setpadding">
      <!-- href='filepath' -->
      <button
        class="btn btn-sm apply"
        data-toggle="modal"
        data-target="#movefolder"
        type="button"
      >MOVE</button>
    </div>
    <!-- {{filepath}} -->

    <div class="col-1 col-md-2 col-xs-2 col-sm-2 setpadding">
      <a class="btn btn-sm apply" type="button">Export As CSV</a>
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
        if (signers[i].UserID == store) {
          return true;
        } else {
          return false;
        }
      }
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

ul{
padding-left:0px; 
}

ul li {
  padding: 0px;
  list-style: none;
}

.modal-body{
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
