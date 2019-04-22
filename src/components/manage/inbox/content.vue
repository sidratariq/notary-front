        <template>
  <div class="row makescroll">
    <table style="width:100%;">
      <!-- headings side -->
      <tr>
        <!-- 2 -->
        <th style="width:3%;">
          <span></span>
        </th>
        <!-- 3 -->
        <th style="width:40%;">
          <span>Subject</span>
        </th>
        <!-- 4 -->
        <th style="width:15%; padding-left:0px;">
          <span>Status</span>
        </th>

        <th style="width:6%; padding-left:0px;">
          <span>Verify</span>
        </th>

        <!-- 5 -->
        <th style="width:14.5%; padding-left:0px;">
          <span>Last change</span>
        </th>
        <!-- 6 -->
        <th style="width:16.5%; ">
          <span></span>
        </th>
      </tr>

      <!-- list of selected item field from database -->
      <tr
        :for="select.id"
        v-for="(select,key) in usercontracts"
        v-bind:key="key"
        class="setborder"
        :class="{'clicked':checked}"
      >
        <!-- status__2 -->
        <td @click="routechange(select.Creator)" style="padding:2px">
          <span style="padding:4px">
            <i
              :class="{'far fa-clock':select.Status=='In Progress',
                                            'fas fa-ban voided':select.Status=='Voided',
                                            'fas fa-exclamation-circle reqaction':select.Status=='In Progress',
                                            'far fa-edit menuicon':select.Status=='DRAFT',
                                            'fas fa-check sucess':select.Status=='Completed' }"
              style="margin:2px"
            ></i>
          </span>
        </td>

        <!-- status__3 Subject-->
        <td class="setpadding" @click="routechange(select.ContractID)">
          <ul>
            <!-- subject -->

            <li class="setfont">
              <a
                style="color: #1e1e1e; cursor:pointer; font-family: Helvetica Neue,Helvetica,Arial,sans-serif;"
              >{{select.ContractName}}</a>
            </li>

            <!-- recipient -->
            <li>
              <small class="text-muted">{{select.Creator}}</small>
            </li>
          </ul>
        </td>

        <!-- status__4 status  -->
        <td @click="routechange(select.ContractID)">
          <p style="font-size:13px">{{select.Status}}</p>
        </td>

        <!-- status__4 status  -->
        <td @click="routechange(select.ContractID)">
          <!-- {{select.Blockchain}} -->
          <!-- <p style="font-size:13px"> -->
            <i class="fab fa-bitcoin" style="color:green;font-size:23px;transform: rotate(-16deg);"></i>
          <!-- </p> -->
        </td>

        <!-- status__5 Last change  -->
        <td @click="routechange(select.ContractID)">
          <ul style="padding-left:0px">
            <li class="date">{{creationtime(select.ContractcreationTime)[1]}}</li>
            <li>
              <small class="text-muted">{{creationtime(select.ContractcreationTime)[2]}}</small>
            </li>
          </ul>
        </td>

        <!-- drop down__6 -->
        <td style="padding-left: 39px;">
          <div class="btn-group">

            <button 
              class="btn btn-sm dropdown-toggle"
              :class="{'btn-primary':true}"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             <!-- v-if="select.Status=='In Progress'" -->
            Sign</button>

               <button
              class="btn btn-sm dropdown-toggle"
              :class="{'btn-white':true}"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Move
             <!-- v-if="select.Status=='Completed'" -->
            </button>



            <div class="dropdown-menu">
              <div class="row">
                <div class="col-12">
                  <a v-if="avalible==false" class="dropdown-item date padding" href="#">Move</a>
                  <a
                    v-if="avalible==false"
                    class="dropdown-item date padding"
                    href="#"
                  >Export As CSV</a>
                  <a class="dropdown-item date padding" href="#">Save in Blockchain</a>
                  <a v-if="avalible==false" class="dropdown-item date padding" href="#">Delete</a>
                  <a v-if="avalible" class="dropdown-item date padding" href="#">Continue</a>
                  <a class="dropdown-item date padding" href="#">Resend</a>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>


        <script>
export default {
  data() {
    return {
      counter: "",
      checked: false,
      recepient: [
        "To:Ali Ahsan",
        "From:sidra",
        "To:Ali Ahsan",
        "From:sidra",
        "To:Ali Ahsan",
        "From:sidra",
        "From:sidra"
      ],

      
    };
  },

  methods: {
    navigateToHome() {
      this.$router.push("/helloworld");
    },

    routechange(args) {
      let token = this.token;
      let store = this.$store;
      console.log(token);
      let change = "/detail/" + args;
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
          if (res.status == 200) {
            console.log(res.body);
            store.dispatch("act_contractdata", res.body);
            this.$router.push(change);

            alert("code red");
            return res;
          }
          // return res;
        })
        .catch(error => {
          console.log(error);
        });
      console.log(args);
    },

    showdetail(contractid) {
      console.log("contract id" + contractid);
    },

    creationtime(args) {
      let arrayvalue = [];
      if (args != undefined) {
        arrayvalue = args.split(" ");
        return arrayvalue;
      } else {
        return [];
      }
    }
  },
  props: {
    defaultSelects: [Array],
    getselected: [Array],
    fileArray: [Array]
  },

  computed: {
    avalible: function() {
      if (this.$route.query.view == "Delete") {
        return true;
      } else {
        return false;
      }
    },

    usercontracts() {
      let haha = this.$store.getters.getcontractdata;
      return haha;
    },
    token: function() {
      return this.$store.getters.getToken;
    }
  }
};
</script>

 <style scoped>
.sucess {
  color: #008938;
}

.reqaction {
  color: rgb(0, 92, 185);
}

.voided {
  color: #999;
}

.sethidden {
  height: 54px;
}

.padding {
  padding: 0.25rem 1.5rem;
}

#checkbox {
  margin-right: 5px;
}

.container-fluid {
  padding: 0;
}

.setborder {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.setborder:hover {
  background-color: rgb(216, 237, 250);
}

.setborder::selection {
  background: #bad3f8;
  text-shadow: none;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}

.setpadding {
  padding-top: 1%;
  padding-left: 1%;
}

.setinbox {
  font-family: "Maven Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0%;
  bottom: 4px;
  position: absolute;
}

.setfont {
  font-weight: 700px;
  color: black;
  font-size: 15px;
}

.setrelative {
  position: relative;
}

th {
  border-bottom: 1px solid #e9e9e9;
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  padding: 8px 12px;
  text-align: left;
}

.date {
  padding-left: 0px;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-rendering: optimizelegibility;
  font-size: 13px;
  line-height: 18px;
}

td ul li {
  list-style: none;
}

ul {
  padding: 0%;
}

input[type="checkbox"] {
  width: 17px; /*Desired width*/
  height: 17px; /*Desired height*/
  cursor: pointer;
}

.dropdown-menu {
  min-width: 10rem;
}

.searchbar {
  padding-left: 0px;
  padding-right: 0px;
}

.dropdown-item {
  width: 120px;
}

.clicked {
  background-color: rgb(216, 237, 250);
  border-left: 4px solid rgb(8, 123, 238);
}

.btn-white {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

#checkbox {
  margin-right: 5px;
}

.checkbox {
  color: rgba(8, 123, 238);
}

.checkbox:checked {
  box-shadow: 0 1px 4px rgba(8, 123, 238, 0.3),
    0 0 40px rgba(0, 92, 185, 0.1) inset;
  zoom: 1;
}
</style>

