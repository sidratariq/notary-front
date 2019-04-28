<template>
  <div class="container-fluid mx-0" style>
    <div class="row mx-0">
      <!-- detail side -->
      <div class="col-10 col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 adjustpadding">
        <div class="row adjustpadding">
          <div class="col-12">
            <div class="row">
              <p class="setname setmargin">
                Please E-Notarize: {{contractdata.ContractData.ContractName}}{{signers}}
                <br>

                <span style="width:16px; height:16px">dadad
                  <i
                    :class="{'far fa-clock':contractstatus=='In Progress',
                           'fas fa-ban voided':contractstatus=='Voided',
                           'fas fa-exclamation-circle reqaction':contractstatus=='In Progress',
                           'far fa-edit menuicon':contractstatus=='DRAFT',
                           'fas fa-check sucess':contractstatus=='Completed' }"
                    style="margin:2px"
                  ></i>
                </span>
              </p>
            </div>
          </div>

          <!-- lastchange data -->
          <div class="col-12">
            <div class="row">
              <small class="text-muted">Last change on {{creationtime[1]}} | {{creationtime[2]}}</small>
            </div>
          </div>

          <!--sent data-->
          <div class="col-12">
            <div class="row">
              <small class="text-muted">Sent on {{updatetime[1]}} | {{updatetime[2]}}</small>
            </div>
          </div>

          <!--status void/complete/waiting for others  -->
          <div class="col-12 adjustmargin">
            <div class="row">
              <div>
                <i
                  :class="{'far fa-clock':contractstatus=='In Progress',
                           'fas fa-ban voided':contractstatus=='Declined',
                           'fas fa-exclamation-circle reqaction':contractstatus=='In Progress',
                           'far fa-edit menuicon':contractstatus=='DRAFT',
                           'fas fa-check sucess':contractstatus=='Completed' }"
                  style="margin:2px"
                ></i>
                <strong>{{contractstatus}}</strong>
              </div>
            </div>
          </div>

          <!-- print bar and etc -->
          <div class="col-lg-12 col-md-8 col-md-8 col-lg-10 col-sm-8 col-xs-12">
            <div class="row options">
              <!-- move and more button dropdown -->
              <div class="col-md-10 col-lg-12 col-sm-10 col-xs-12">
                <strip :contractid="contractdata.ContractData.ContractID"></strip>
              </div>

            
            </div>
          </div>
        </div>

        <hr>

        <!-- recipients -->
        <div class="row">
          <div class="col-12">
            <h4>Recipients</h4>
            <hr>
            <!-- Signers -->
            <recipient
              v-for="(data,index) in contractdata.Signers"
              :date="updatetime[1]"
              :time="updatetime[2]"
              :value="data"
              :key="index"
            >{{data}}</recipient>
          </div>
        </div>

      
      </div>
      <!-- sidebar -->
      <div class="col-2 col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 setpadding setsidebar">
        <sidebar ref="sidecontract"></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./FileSidePreview";
import strip from "./movestrip.vue";
import recipient from "./recipients.vue";

export default {
  data() {
    return {
      checked: false,
      creator: this.$store.getters.getuserid,
      status: true
    };
  },

  methods: {

    navigateToHome() {
      this.$router.push("/helloworld");
    }
  },
  computed: {
    contractdata() {
      return this.$store.getters.getcontractdata;
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
    },

    signers() {
      let signers = this.contractdata.Signers;
      let currentuser = this.creator;
      var value = false;
      for (let i = 0; i < signers.length; i++) {
        // 127a82c9-8397-4191-92d4-f3a8ca05255c
        if (signers[i].UserID == currentuser) {
          return (value = true);
        } else {
          return (value = false);
        }
      }
    }

    // ContractcreationTime
  },
  components: {
    sidebar,
    strip,
    recipient
  }
};
</script>


<style scoped>


.voided {
  color: #999;
}

.sucess {
  color: #008938;
}

.reqaction {
  color: rgb(0, 92, 185);
}

.actionbar {
  background-color: #e9e9e9;
  height: 28px;
  position: absolute;
  width: 131px;
  top: 22%;
  right: 13%;
  border: 1px solid #ccc;
}

.dropdown-item {
  width: 120px;
}

.date[data-v-c78c0eee] {
  /* padding-left: 0px; */
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-rendering: optimizelegibility;
  font-size: 13px;
  line-height: 18px;
}

.menuset {
  min-width: 20rem;
}

.mx-0 {
  height: 100vh;
  padding-right: 0px;
  padding-left: 0px;
}

.sidedisplay {
  background: #e9e9e9;
  overflow: auto;
}

.circle {
  color: #868686;

}

.apply {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

.dropdown-item {
  width: 120px;
}

.dropdown-menu {
  min-width: 10rem;
}

.download::after {
  content: "Download";
  position: absolute;
  bottom: 10px;
  padding: 1em 3em;
  right: 20px;
  z-index: 999;
  min-width: 90px;
  color: white;
  font-size: 0.4em;
  background: black;

  font-weight: bold;

  display: block;
  white-space: nowrap;
  border-radius: 10%;
  transform: scale(0);
  transition: transform ease-out 150ms, bottom ease-out 150ms;
}

.print::after {
  content: "Print";
  position: absolute;
  bottom: 10px;
  padding: 1em 3em;
  right: 20px;
  z-index: 999;
  min-width: 40px;
  color: white;
  font-size: 0.6em;
  background: black;
  border-radius: 10%;
  font-weight: bold;
  display: block;
  white-space: nowrap;
  transform: scale(0);
  transition: transform ease-out 150ms, bottom ease-out 150ms;
}

.print:hover::after,
.download:hover::after {
  transform: scale(1);
  bottom: 100%;
}

.setname {
  font-family: "Maven Pro", "Helvetica Neue", HelveticaNeue, Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.setpadding {
  padding-left: 0px;
  padding-right: 0px;
}

.setmargin {
  margin: 0px;
}

.adjustmargin {
  margin-top: 15px;
  margin-bottom: 15px;
}

.adjustpadding {
  padding: 15px;
  /* padding-left: 35px; */
}

i {
  padding-left: 4px;
  padding-right: 4px;
}

@media screen and (max-width: 644px) {
  .options {
    display: none;
  }

  .setsidebar {
    display: none;
  }
}
</style>
