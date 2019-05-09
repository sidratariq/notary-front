  <template>
  <div class="container-fluid">
    <!-- header name -->
    <div class="row h-25">
      <div class="col-12 col-md-12" style="padding-left:0px">
        <div class="row">
          <div class="col-2">
            <div class="col-3"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- alerts -->
    <div
      v-if="contractsigned==true"
      class="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      Your Contract has been signed <strong> Contract Name</strong>
      <button type="button" class="" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- alerts -->

    <div v-if="declined==true" class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>CONTRACT DECLINED</strong> You have success fully declined the contract.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="row">
      <div class="col-2 set-side"></div>

      <!-- child screen part -->
      <div class="col-8" style="padding:0px; height:500px; width:906px;overflow:scroll">
        <signatureInitial ref="name">
          <div v-for="(i,index) in coordinated" :key="index">
            <!-- for signature field -->

            <div v-if="i.Text =='Signature'" class="setsignature" slot="signature">
              <img
                :style="{content:'url('+start(i)+')',position:'absolute',top:i.Top+'px',left:i.Left+'px',width:widthset,height:heightset}"
              >
            </div>

            <!-- for initial field -->
            <div v-if="i.Text =='Initial'" slot="initial">
              <img
                :style="{content:'url('+start(i)+')',position:'absolute',top:i.Top+'px',left:i.Left+'px',width:widthset,height:heightset}"
              >
            </div>

            <!-- for other fields of contract -->
            <div
              v-if="i.Text!='Initial' && i.Text!='Signature'"
              :style="{position:'absolute',top:i.Top+'px',left:i.Left+'px',width:widthset,height:heightset}"
              name="default"
            >{{start(i)}}</div>
          </div>
        </signatureInitial>
      </div>

      <div class="col-2"></div>
    </div>

    <!-- footer -->
    <div
      class="row"
      style="position:fixed;z-index:999;bottom:0px; border-top:1px solid #ccc; background:#ffffff; width:100%; min-height:54px;"
    >
      <div class="col">
        <!-- :disabled="pass==true" -->
        <button
          type="button"
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="border:1px solid #ccc; margin-top:12px; background-color:white"
          @click="copy(),SignContract()"
        >Sign</button>

        <button
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="margin-top:12px;"
          @click="setcoordinates()"
        >Place Fields</button>

        <!-- when decline call decline  -->
        <button
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="margin-top:12px;"
          @click="DeclineContract()"
        >Decline</button>
      </div>
    </div>
  </div>
</template>

  <script>
import signatureInitial from "./signatureInitial.vue";
import html2canvas from "html2canvas";

export default {
  components: {
    signatureInitial
  },

  data: function() {
    return {
      output: "",
      responsedata: "",
      set: false,
      declinedvalue: false,
      SignSuccess: false
    };
  },

  computed: {
    // disabling the user sign button user should first place fields to show user
    // where he will sign
    pass: {
      set(value) {
        this.set = value;
      },
      get() {
        return this.set;
      }
    },

    contractsigned: {
      set(value) {
        this.SignSuccess = value;
      },
      get() {
        return this.SignSuccess;
      }
    },

    // Deline the contractalert
    declined: {
      set(value) {
        this.declinedvalue = value;
      },
      get() {
        return this.declinedvalue;
      }
    },

    //current contract path
    image() {
      console.log(this.$store.getters.getcontractpath);
      return this.$store.getters.getcontractpath;
    },

    //token of the user
    token: function() {
      return this.$store.getters.getToken;
    },

    // getting current contract id
    getcontractid: function() {
      return this.$store.getters.getcontractdata.ContractData.ContractID;
    },

    getcontract: function() {
      return this.$store.getters.getcontractdata.ContractData
        .ContractcreationTime;
    },

    // coordinates set for setting the name,email etc
    coordinated: {
      set(value) {
        alert(value);
        this.responsedata = value;
      },
      get() {
        return this.responsedata;
      }
    },

    //Current User data
    Userdata() {
      console.log(this.$store.state.userdata);
      return this.$store.state.userdata;
    },

    heightset() {
      return "70px";
    },
    widthset() {
      return "170px";
    }
  },

  methods: {
    async print(name) {
      let el = this.$refs[name].$el;
      this.output = (await html2canvas(el)).toDataURL("image/png");
    },

    setcoordinates() {
      // /playgroundinput
      let creator = this.Userdata;
      let token = this.token;

      this.$http
        .post(
          "http://localhost:8000/serveCoordinates",
          { ContractID: this.getcontractid },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          if (res.status == 200) {
            alert("inside");
            console.log(res);
            this.coordinated = JSON.parse(res.bodyText);
            this.pass = true;
          }
          return res;
        })
        .catch(error => {
          this.request = error.bodyText;
          console.log(error.bodyText);
        });
    },

    // it returns user contract field on every loop iteration what it should return
    start(args) {
      let creator = this.Userdata;
      var date = this.getcontract;

      if (args.Text == "Signature") {
        return "http://localhost:8000/" + creator.Userdata.UserSignature;
      }

      if (args.Text == "Initial") {
        return "http://localhost:8000/" + creator.Userdata.UserInitials;
      }

      if (args.Text == "DateSigned") {
        let contractdate = date.split(" ");
        return contractdate[1];
      }
      // for showing user name
      if (args.Text == "Name") {
        return creator.Userdata.UserName;
      }

      // for showing user email
      if (args.Text == "Email") {
        return creator.Userdata.UserEmail;
      }

      // for showing usercompnay
      if (args.Text == "Company") {
        return creator.Userdata.UserCompany;
      }
      // for showing usercompnay
      if (args.Text == "Phone") {
        return creator.Userdata.UserPhone;
      }
    },

    async copy() {
      let el = this.$refs.name.$el;
      // alert(this.image+"if i am undergined")
      this.$refs.name.innerHTML = this.image;
      this.output = (await html2canvas(el)).toDataURL();
      console.log(this.output);
    },

    //decline contract method
    DeclineContract() {
      let token = this.token;
      let contractid = this.getcontractid;
      console.log(contractid);
      this.$http
        .post(
          "http://localhost:8000/DeclineContract",
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
            console.log(res.bodyText);
            this.declined = true;
            setTimeout(() => {
              this.declined = false;
              this.$router.push("/dashboard");
            }, 3000);
          }

          return res;
        })
        .catch(error => {
          alert(error);
        });
    },

    // send request to SIgn the contract
    SignContract() {
      let token = this.token;
      let contractid = this.getcontractid;
      let base = this.output;
      this.$http
        .post(
          "http://localhost:8000/signContract",
          {
            FileBase: base,
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
            this.contractsigned = true;
            setTimeout(() => {
              this.contractsigned = false;
              this.$router.push("/manage");
            }, 3000);
          }

          return res;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

  <style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.scroll-container {
  display: block;
  width: 230px;
  height: 100%;
  border: 1px solid #cccccc;
  background: #f9f9f9;
  /* z-index: 999; */
}

.border {
  border: 2px solid rgb(82, 23, 23);
}

.fullwidth {
  width: 100%;
  height: 50px;
  margin-bottom: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: #f9f9f9;
}

.alert {
  position: absolute;
  z-index: 1000;
  left: 50vh;
}

.set {
  padding: 10px;
  color: #868686;
}

.setpadding {
  margin: 7px;
}

.buttonmargin {
  margin-right: 12px;
}

.container-fluid {
  height: 100vh;
  /* background-color: brown; */
}

.set-side {
  padding-left: 0px;
  padding-right: 0px;
  /* background: red; */
}

.h-25 {
  height: 6% !important;
  border-bottom: 1px solid #ccc;
  /* background-color: #ccc; */
  background-color: rgb(233, 233, 233);
  /* #d9d9d9; */
}

.h-75 {
  height: 70% !important;
}

.h-15 {
  height: 24% !important;
  background: #fff;
  border: 1px solid #eeeeee;
}

.btn-utility {
  background-color: #fff;
  border-color: #ccc;
  color: #1e1e1e;
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  padding-bottom: 5px;
  padding-top: 5px;
  text-decoration: none;
  min-width: 220px;
  text-transform: none;
}

ul li {
  list-style: none;
}

.round-body {
  border-radius: 50%;
}

.small {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.small-main {
  margin-left: -40px;
}

.small-main span {
  color: red;
}

.dropdown-none::after {
  display: inline-block;
  margin-left: 6.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.OliveReact-Button--sizeLarge {
  min-height: 30px;
  min-width: 50px;
  padding: 7px 18px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 7px;
}

.OliveReact-Button--main {
  background-color: #ffce00;
  border-color: #ffce00;
  color: #333;
}

.OliveReact-Button {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #333;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: 0.66px;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 4px 14px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
}

.to-upper {
  text-transform: uppercase;
}
</style>
