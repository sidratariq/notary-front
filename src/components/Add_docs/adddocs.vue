<template>
  <div class="main">
    <div class="container">
      <h2 class="setpadding">Add Documents</h2>

      <uploadfile @buttonenable="enable=$event" v-if="fileavalible ==true"></uploadfile>
      <dragdrop v-if="fileavalible ==false"></dragdrop>
      <div class="row set">
        <div class="col-10" style="padding-left:-15px, padding-right:-15px"></div>
        
        <div class="col-2" style="padding-left:-15px, padding-right:-15px">
          <button
            class="btn-main btn-large btn btn-primary btn-sm float-right"
            :class="{'cursor':enable<100}"
            
            @click="AddDoc()"
          >NEXT</button>
          <!-- :disabled="enable<100" -->
        </div>
      </div>
    </div>
  </div>
</template>

        <script>
import axios from "axios";
import { mapActions } from "vuex";
import dragdrop from "./dragdrop/dragdrop.vue";
import uploadfile from "./prepare/prepare.vue";

export default {
  data() {
    return {
      file: {
        name: "",
        filesrc: ""
      },
      noofdocs: [],
      allow: 0
    };
  },

  components: {
    dragdrop,
    uploadfile
  },
  props: {},
  methods: {
    AddDoc() {
      let store = this.$store;
      let token = this.token;
      // console.log(token )
      //   console.log(this.selectedFile);

      const formData = new FormData();
      formData.append("contractName", this.contractname);
      formData.append("contractFile", this.selectedFile);

      axios
        .post("http://localhost:8000/newContract", formData, {
          headers: {
            Token: token
          }
        })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            console.log(res)

            store.dispatch("act_contractid", res.data.ContractID);
            store.dispatch("act_contractpath", res.data.Path);

            this.$router.push("/addrecipient");
          }
        })
        .then(error => {});
    }
  },
  computed: {
    fileavalible: function() {
      return this.$store.getters.getavalible;
    },
    token() {
      return this.$store.getters.getToken;
    },

    setimage: function() {
      if (localStorage.getItem("imgsource") != null) {
        return true;
      } else {
        return false;
      }
    },

    // responsible for enabling and disabling the button
    enable: {
      set(value) {
        this.allow = value;
      },
      get() {
        return this.allow;
      }
    },
    selectedFile() {
      return this.$store.getters.getselectedcontract;
    },
    contractname() {
      return this.$store.getters.getfilename;
    }
  }
};
</script>

        <style scoped>
* {
  background-color: rgb(244, 244, 244);
}

.main {
  height: 100vh;
}

.set {
  margin-right: 0px;
  margin-left: 0px;
}

.container {
  padding-left: 0px;
  padding-right: 0px;
}

button {
  border-radius: 0 2px 2px 0;
  border: none;
  margin: 28px 20px 20px 20px;
  text-align: center;
}

.setpadding {
  padding-top: 15px;
  padding-bottom: 15px;
}

button:hover {
  cursor: pointer;
}

.btn-main {
  background-color: #ffce00;
  color: #1e1e1e;
}

.btn-large {
  font-size: 13px;
  min-height: 34px;
  font-weight: bolder;
}

.cursor{
  cursor: not-allowed
}
</style>