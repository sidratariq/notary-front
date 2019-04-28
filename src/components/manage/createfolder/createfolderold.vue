  <template>
  <div class="envelopclass">
    <div>
      <ul>
        <li id="mylist">
          <!-- caret sign -->
          <span @click="avalible = !avalible" style="padding:4px">
            <i class="fas fa-caret-down menuicon"></i>
          </span>
          <!-- {{foldervalue}} -->
          FOLDERS
          <!-- <button @click="CreateNewFolder()"  class="btn btn-sm btn-primary">+</button> -->

          <button
            type="button"
            class="btn btn-sm setright"
            data-toggle="modal"
            data-target="#myModal"
          >
            <i class="fas fa-plus foldericon plusicon"></i>
          </button>

          <!-- Modal -->
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4>New Folder</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <form @submit.prevent>
                  <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
                    <label for="foldername">Folder name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="foldername"
                      id="foldername"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    >
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      @click="CreateNewFolder()"
                      class="btn btn-primary"
                      data-dismiss="modal"
                    >Create</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- // end of model -->

          <ul style="padding:0px 3px 0px 24px" :class="{hide:avalible}">
            <li class="whenhover" id="subfolder" v-for="(folder,key) in foldervalue" :key="key">
              <router-link
                :to="{name:'manage',query:{folder:foldervalue[key].FolderName}}"
                exact
                active-class="active"
                @click.native="getcontractlist(folder.FolderID)"
              >
                <div class="row">
                  <div class="col-1">
                    <i class="fas fa-folder menuicon" style="padding:4px"></i>
                  </div>
                  <div class="col-7">
                    <span class="setlayout">{{folder.FolderName}}</span>
                  </div>

                  <!-- <div class="col-2">
                    <span class="pull-right">
                      <div class="btn-group">
                        <i
                          data-v-09042f62
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="fas fa-ellipsis-v setright foldericon setdropdown"
                          style="padding: 4px;"
                        ></i>
                        <div class="dropdown-menu">
                          <div class="row">
                            <div class="col-12">
                              <a class="dropdown-item date padding" href="#">Move</a>
                              <a class="dropdown-item date padding" href="#">Export As CSV</a>
                              <a class="dropdown-item date padding" href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>-->
                </div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
        
  <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      avalible: false,
      foldername: "test"
    };
  },

  components: {},

  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    foldervalue() {
      return this.$store.getters.getfolder;
    }
  },

  methods: {
    CreateNewFolder() {
      let foldername = this.foldername;
      let token = this.token;
      if (foldername != "") {
        this.$http
          .post(
            "http://localhost:8000/newFolder",
            { folderName: foldername },
            {
              headers: {
                Token: token
              }
            }
          )
          .then(res => {
            if (res.status == 200) {
              console.log(res);
              // store.dispatch('act_recipients',recipient)
              alert("code red");
            }
            return res;
          })
          .catch(error => {
            alert(error);
          });
      }

      // this.folders.push({ name: this.foldername });
    },

    sendrequest(args) {
      console.log(args);
      let token = this.token;
      console.log(token);
      let store = this.$store;
      let contracts = [];
      this.$http
        .post(
          "http://localhost:8000/ContractDetails",
          { ContractID: args },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          contracts = JSON.parse(res.bodyText);

          if (res.status == 200) {
          store.dispatch("act_contractdata", []);          
          store.dispatch("act_contractdata", contracts);

           
          }
           return res.json();
        })
        .then(error => {
          console.log(error);
        });
    },
    getcontractlist(args) {
      // console.log(args);
      alert(args);
      let token = this.token;
      console.log(token);
      let store = this.$store;
      let contracts = [];
      this.$http
        .post(
          "http://localhost:8000/folderContractList",
          { ContractID: args },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          alert(res.bodyText);

          contracts = JSON.parse(res.bodyText);

          if (res.status == 200) {
            store.dispatch("act_contractdata", contracts);
          }
          return res.json();
        })
        .then(error => {
          console.log(error);
        });
    }
  }
};
</script>

  <style scoped>
* {
  /* border: 1px solid black; */
}

.envelopclass {
  margin-top: 20px;
}

ul {
  padding: 0%;
}

ul li {
  list-style: none;
  padding: 4px 0px 4px 0px;
}

.setright {
  float: right;
}

.menuicon,
.foldericon {
  color: #868686;
}

.setlayout {
  font-size: 14px;
}

.setdropdown,
.plusicon {
  position: relative;
}

.setdropdown::after,
.plusicon::after {
  content: "New Folder";
  position: absolute;
  bottom: 10px;
  padding: 1em 3em;
  right: 20px;
  z-index: 999;
  min-width: 90px;
  color: white;
  font-size: 0.8em;
  background: #333;
  display: block;
  white-space: nowrap;
  transform: scale(0);
  transition: transform ease-out 150ms, bottom ease-out 150ms;
}

.setdropdown:hover::after,
.plusicon:hover::after {
  transform: scale(1);
  bottom: 100%;
}

.setdropdown::after {
  content: "Actions";
}

.btn-white {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

.hide {
  display: none;
}

.dropdown {
  height: 200px;
  width: 100px;
  border: 1px solid black;
  position: absolute;
  z-index: 200;
  right: -1px;
  top: 525px;
  left: 74px;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  float: none;
  cursor: pointer;
}

.container-fluid {
  height: 100vh;
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

a:hover {
  text-decoration: none;
}

a:focus {
  font-weight: bolder;
}

a:active {
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
