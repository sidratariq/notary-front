<template>
  <div class="main" :class="{modalavalible:flag}">
    <!-- header  -->

    <!--signatures and styles  -->
    <modal class="col-lg-12 col-md-12 col-sm-12 col-sm-12" v-if="flag"></modal>
  
    <uploadphoto v-if="uploadflag"></uploadphoto>

    <div class="outer-container">
      <div class="container-flex">
        <!-- unordered list for user image upload and signature upload -->
        <ul class="first">
          <!-- user image image from server database -->
          <li>
            

             <span @click="getclick">
            <img :src="profilepic" class="OliveReact-Avatar" alt="">
            </span>

          </li>

          <li class="signature">
            <!-- component here -->
            <signature></signature>
          </li>
        </ul>

        <!-- unordered list for quick actions -->
        <ul class="second">
          <!-- user actions from database -->
          <li @click="routechange()">
            <a class="userAction" href>
              <span class="userAction_number large-screen">{{ActionRequired}}</span>
              <span class="userAction_status">Action Required</span>
              <span class="userAction_number small-screen">{{ActionRequired}}</span>
            </a>
          </li>

          <!--waiting for others from database  -->
          <li @click="routewaitchange()">
            <a class="userAction" href>
              <span class="userAction_number large-screen">{{WaitingOthers}}</span>
              <span class="userAction_status">Waiting for Others</span>
              <span class="userAction_number small-screen">{{WaitingOthers}}</span>
            </a>
          </li>

          <!-- expiring soon from database -->
          <li @click="routeexpirechange()">
            <a class="userAction" href>
              <span class="userAction_number large-screen">{{expiring}}</span>
              <span class="userAction_status">Expiring Soon</span>
              <span class="userAction_number small-screen">{{expiring}}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- drag and drop file here -->
      <div class="container-flex drag_drop">
        <div class="panel-fileDrop">
          <dragdrop></dragdrop>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import dragdrop from "../dragdrop/dragdrop.vue";
    import modal from "../modals/modal.vue";
    import uploadphoto from "../modals/photoupload.vue";
    import signature from "./signature.vue";
    import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      showModal: false,
      fileavalible: this.$store.getters.getavalible,
      userdata:{
      }
    };
  },

  methods: {
    ...mapActions([
      // 'changeflag'
    ]),

    clicked() {
      this.$store.dispatch("changeflag");
    },

    getclick() {
      this.$store.dispatch("changephoto");
    },

    escapeKeyListener: function(evt) {
      if (evt.keyCode === 27 && this.showModal) {
        this.showModal = false;
      }
    },

    routechange() {
      this.$router.push({name:'manage',query:{view:'Action Required'}});
    },
    routewaitchange() {
      this.$router.push({name:'manage',query:{view:'Waiting for Others'}});
    },
    routeexpirechange() {
      this.$router.push({name:'manage',query:{view:'Expiring Soon'}});
    }
  },

  computed: {
    flag() {
      return this.$store.getters.getflag;
    },

    uploadflag() {
      return this.$store.getters.getupload;
    },

    profilepic:function(){
      return this.$store.getters.getprofilepicture || 0
    },

    ActionRequired:function(){
      return this.$store.getters.getosign || 0
      
    },
                                    
    WaitingOthers(){
      return this.$store.getters.getwaiting || 0
    },

    expiring(){
      return this.$store.getters.getexpiringsoon || 0
    }
  },
  mounted(){

  }
  ,
  components: {
    dragdrop,
    modal,
    uploadphoto,
    signature
  },

  created() {
    document.addEventListener("keyup", this.escapeKeyListener);
  },

  destroyed() {
    document.removeEventListener("keyup", this.escapeKeyListener);
  },
  
};
</script>


<style scoped>

@import url("https://fonts.googleapis.com/css?family=Roboto");

* {
  position: relative;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  /* border: 1px solid black; */
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row;
}

a {
  cursor: pointer;
}

ul li {
  list-style: none;
  /* width: 150px; */
  height: 80px;
  margin: 8px;
}

.container-flex {
  width: 85%;
  display: flex;
  padding-top: 30px;
}

.first {
  justify-content: flex-start;
  width: 50%;
  flex-wrap: wrap;
}

.small-screen {
  display: none;
}

.second {
  justify-content: flex-end;
  width: 50%;
  min-width: 150px;
}

.second li {
  border-radius: 5%;
}

.outer-container {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  background: url(../../assets/icons/sc.jpg) repeat top left,
    linear-gradient(to right, #4b9aaf 51%, #4b9aaf 100%);
  border: none;
  position: relative;
}

.signatureChrome::before {
  border-bottom: 2px solid #005cb9;
  border-left: 2px solid #005cb9;
  border-radius: 5px 0 0 5px;
  border-top: 2px solid #005cb9;
  content: "";
  display: block;
  height: 50px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 20px;
}

.signatureChrome_signature {
  height: 52px;
  left: -12px;
  margin: -8px 0;
  max-width: 244px;
  position: relative;
}

.main {
  background-color: rgb(244, 244, 244);
  height: 100vh;
}

.signatureChrome-inverse::before {
  border-color: #fff;
}

.signatureChrome-inverse {
  color: #fff;
}

.signatureChrome {  
  background: 0 0;
  border: none;
  font-size: 11px;
  font-weight: 700;
  line-height: 11px;
  min-width: 140px; 
  padding: 0 0 0 25px;
  position: relative;
  text-align: left;
}

.signature{
  color: #999;
}

.signature:hover{
  color: #fff;
}

.sizeXlarge {
  font-size: 22px;
  height: 72px;
  line-height: 72px;
  width: 72px;
}

.OliveReact-Avatar {
  background-color: #e8edf7;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 50%;
  color: #555;
  display: inline-block;
  font-size: inherit;
  font-weight: 700;
  height: 66px;
  letter-spacing: 0.5px;
  line-height: 66px;
  padding-right: 0;
  text-align: center;
  vertical-align: middle;
  width: 66px;
  /* margin-top: -6px; */
  margin-left: 54px;
  cursor: pointer;
}

.userAction {
  background: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 3px;
  color: #fff;
  min-width: 150px;
  text-align: left;
  text-decoration: none;
}

.userAction_number {
  display: block;
  font-size: 35px;
  line-height: 40px;
  padding: 0px 32px;
  min-width: 150px;
}

.userAction_status {
  color: #fff;
  text-align: left;
  line-height: 16px;
  font-size: 15px;
}

.userActions .userAction + .userAction {
  margin-left: 24px;
}

.userAction::before {
  background: #fff;

  bottom: 0;
  content: "";
  display: block;
  left: -12px;
  margin: 8px 0;
  position: absolute;
  top: 0;
  width: 1px;
}

.userAction[data-v-6492da79]::before {
  background: #fff;
  bottom: 0;
  display: none;
  left: -12px;
  margin: 8px 0;
  position: absolute;
  top: 0;
  width: 1px;
}

.container-flex .drop_drop {
  position: relative;
  width: 100%;
}

.panel-fileDrop {
  border: 1px solid #d9d9d9;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 16px;
  position: absolute;
  top: -10px;
  width: 100%;
  padding: 2%;
}

.invalid-checkbox {
  color: red;
}

.modalavalible {
  background: rgba(38, 38, 38, 0.3);
  overflow: hidden;
}

.small-screen {
  display: none;
}

.signature{
  cursor: pointer;
}

@media only screen and (max-width: 948px) {
  * {
    border: none;
  }

  .first {
    display: none;
  }

  .second {
    width: 80%;
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 520px) {
  .container-flex {
    padding: 0px;
  }

  .second {
    width: 100%;
    /* border: 1px solid red; */
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul li {
    width: 100%;
    display: flex;
  }

  .userAction {
    width: 100%;
    display: flex;
    align-content: space-evenly;
  }

  .small-screen {
    display: block;
    align-items: center;
    justify-content: right;
  }

  .userAction_status {
    font-weight: bold;
    font-size: 15px;
  }

  .userAction_number {
    padding: 0px;
    font-size: 15px;
    font-weight: bold;
  }

  .large-screen {
    display: none;
  }

  .panel-fileDrop{
      display: none;
  }
}
</style>
