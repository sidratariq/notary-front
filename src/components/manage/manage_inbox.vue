    <template>
  <div class="container-fluid" style>
    <div class="row">
      <div class="col-2 col-xs-0 content-bar">
        <btn_btn></btn_btn>
        <div>
          <h6 class="text-centerr">ENVELOPES</h6>
         
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/inbox')"
            active-class="active"
            :to="{name:'manage'}"
            exact
            tag="li"
          >
            <i class="fas fa-box-open menuicon"></i>
            <span class="setlayout">Inbox</span>
          </router-link>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/sent')"
            active-class="active"
            :to="{name:'manage',query:{view:'Sent'}}"
            exact
            tag="li"
          >
            <i class="far fa-paper-plane menuicon"></i>
            <span class="setlayout">Sent</span>
          </router-link>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/drafts')"
            active-class="active"
            :to="{name:'manage',query:{view:'Draft'}}"
            tag="li"
            exact
          >
            <i class="far fa-edit menuicon"></i>
            <span class="setlayout">Draft</span>
          </router-link>
          <!-- no route avalible -->
          <router-link
            class="nav-link menuitem"
            ctive-class="active"
            :to="{name:'manage',query:{view:'Delete'}}"
            tag="li"
            exact
          >
            <i class="fas fa-trash menuicon"></i>
            <span class="setlayout">Delete</span>
          </router-link>
        </div>
        <!-- // @click="sendtoactionrequire
            @click="sendexpire
        @click="sendtowait-->
        <div class="envelopclass">
          <h6 class="text-centerr">quick views</h6>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/actionReq')"
            active-class="active"
            :to="{name:'manage',query:{view:'Actions Required'}}"
            exact
            tag="li"
          >
            <i class="fas fa-exclamation-circle menuicon"></i>
            <span class="setlayout">Actions Required</span>
          </router-link>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/waitingForOther')"
            active-class="active"
            :to="{name:'manage',query:{view:'Waiting for Others'}}"
            exact
            tag="li"
          >
            <i class="far fa-clock menuicon"></i>
            <span class="setlayout">Waiting for Others</span>
          </router-link>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/expSoon')"
            active-class="active"
            :to="{name:'manage',query:{view:'Expiring Soon'}}"
            exact
            tag="li"
          >
            <i class="fas fa-exclamation-triangle menuicon"></i>
            <span class="setlayout">Expiring Soon</span>
          </router-link>
          <router-link
            class="nav-link menuitem"
            @click.native="sendrequest(current ='/completed')"
            active-class="active"
            :to="{name:'manage',query:{view:'Completed'}}"
            exact
            tag="li"
          >
            <i class="fas fa-check menuicon"></i>
            <span class="setlayout">Completed</span>
          </router-link>
        </div>

        <folders></folders>
      </div>
      <div class="col-10 col-lg-10 col-md-10 col-xs-12 content-area">
        <inbox></inbox>
      </div>
    </div>
  </div>
</template>

    <script>
import btn_btn from "./button.vue";
import folders from "./createfolder/createfolderold.vue";
import inbox from "./inbox/inbox.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      id: this.$route.params.id,
      foldername: ""
    };
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    
  },

  components: {
    btn_btn,
    // inner_header,
    folders,
    inbox
    // test
  },
  methods: {
    InlineButtonClickHandler: function() {
      alert("i am running");
    },

    sendrequest(args) {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/" + args, {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          store.dispatch("act_contractdata", contracts);

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

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
* {
  /* border:1px solid green */
}

.container-fluid {
  height: 100vh;
  /* overflow: scroll; */
}

.setlayout {
  font-size: 14px;
}

.row {
  height: auto;
}

.content-bar {
  background-color: #f4f4f4;
  width: 100%;
  padding: 0px;
}

.text-centerr {
  height: auto;
  padding-left: 22px;
  font-weight: 600;
  font-family: "Maven Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
}

.nav-link {
  line-height: 10px;
  margin: 4px 0px 4px 0px;
  padding-left: 20px;
}

.envelopclass {
  margin-top: 20px;
}

a {
  color: #1e1e1e;
  font-weight: normal;
  font-size: 15px;
  padding: 5px 0px 5px 0px;
}

.nav-link:hover {
  background: #e9e9e9;
}

.haha::before {
  content: "\EA4F";
}

.seconddiv li a {
  padding-top: 5px;
  cursor: pointer;
  padding-bottom: 5px;
}

.menuitem {
  padding-top: 7px;
}

li:hover {
  text-decoration: none;
}

li:focus {
  font-weight: bolder;
}

li:active {
  font-weight: bolder;
}

.menuitem:focus {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.content-area {
  background-color: white;
  padding: 0;
}

.setright {
  float: right;
}

.foldericon,
.menuicon {
  color: #868686;
}

.hide {
  display: none;
}

.foldericon:hover {
  color: #2463d1;
}

.active {
  background: #e9e9e9;
}

i {
  padding-left: 4px;
  padding-right: 8px;
}

@media screen and (max-width: 631px) {
  .content-bar {
    display: none;
  }
}
</style>
