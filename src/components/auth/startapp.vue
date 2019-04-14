              <template >
  <div class="text-center">
    <div class="row" style="margin-top:10%">
      <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
        <ul class="list-group">
          <li class="list-group-item" v-for="(u,key) in user" :key="key">{{u}}{{key}}</li>
        </ul>
      </div>

      <!-- here the main login things happen -->
      <div class="col-md-4 col-lg-4 col-sm-4 col-xs-12">
        <img src="../../assets/icons/esnotary.png">
        <h4>Please log in to your account</h4>
        <login
          v-if="flag"
          :flag="flag"
          @gotclicked="flag = $event"
          @childemail="currentemail = $event"
        ></login>
        <p></p>

        <!--Login password  -->
        <div v-show="!flag">
          <p>{{currentemail}}</p>
          <!-- asdkjbhbalhbafh -->
          <form class="btn-set">
            <div class="form-group">
              <input
                type="password"
                autocomplete="on"
                @focus="setvalues"
                v-model="password"
                @blur="$v.password.$touch()"
                class="form-control"
                style="width:90%"
                aria-describedby="emailHelp"
                placeholder="Enter password"
              >
              <!-- <input class="form-control" type="password" placeholder="Enter password"> -->
              <small
                class="UI-info"
                v-if="!$v.password.minLen"
                :class="{invalid:true}"
              >The password must be 6 character long</small>
              <small v-if="show" class="error-msg">Invalid email or password</small>
              <small v-if="validpassword" class="error-msg">Invalid password please try again</small>
              <small
                v-if="validemail"
                class="error-msg"
              >Invalid email!! Please sign in as a different user</small>
            </div>
            <button class="bbutton btn-width" @click.prevent="login">Log IN</button>
          </form>
          <button class="btn btn-link" @click="forgetpassword">
            <small>Forgot password</small>
          </button>
        </div>

        <hr>

        <!-- for email -->
        <div v-if="!flag" @click="change">
          <button class="btn btn-link">
            <small>Sign in as a different user</small>
          </button>
        </div>

        <!--for password  -->
        <div v-if="flag" style="margin-top:10%;">
          <h6>Or log in via:</h6>
          <img
            @click="commingsoon()"
            class="commingsoon"
            src="../../assets/icons/socialsupport.png"
            alt
          >
        </div>
      </div>

      <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"></div>
    </div>

    <foot_footer></foot_footer>
  </div>
</template> 

    <script>
import { required, minLength } from "vuelidate/lib/validators";

import login from "./login.vue";
import foot_footer from "../footer/footer.vue";
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      flag: true,
      currentemail: "",
      password: "",
      user: [],
      errors: [],
      show: false,
      invalid_password: false,
      invalid_email: false,
      Userdata: {}
    };
  },
  components: {
    login,
    foot_footer
  },
  methods: {
    // use logic to disable and enable the button
    enteremail: function() {
      this.flag = !this.flag;
    },

    forgetpassword: function() {
      // changes route to forgetpassword
      this.$router.push("/forget");
    },

    login: function() {
      // *** this function sends the post request and if users shows if there is mistake in client side ***///
      // *** this function sends the post request and if users shows if there is mistake in client side ***///
      let storesetup = this.$store.state.userdata.Userdata;
      let store = this.$store;

      if (!this.$v.password.$invalid) {
        this.$http
          .post("http://localhost:8000/login", {
            email: this.currentemail,
            password: this.password
          })
          .then(res => {
            console.log(res)
            let Userdata = res.body;
            alert(res.body)
            // alert(typeof(res.body))
            
            if (res.status == 200) {
              this.$router.push("/dashboard");

              // settingup user credentials
              store.dispatch("change_username", Userdata.Userdata.Name);
              store.dispatch("change_id", Userdata.Userdata.Userid);
              store.dispatch("change_email", Userdata.Userdata.Email);
              store.dispatch(
                "change_userprofilepic",
                Userdata.Userdata.Picture
              );
              store.dispatch("changeinitial", Userdata.Userdata.Initials);
              store.dispatch("changesignature", Userdata.Userdata.Sign);
              store.dispatch("changecompany", Userdata.Userdata.Company);
              store.dispatch("changephone", Userdata.Userdata.Phone);
              store.dispatch("changeWaitingforother", Userdata.WaitingOther);
              store.dispatch("changeTosign", Userdata.WaitingME);
              store.dispatch("changeExpiringsoon", Userdata.ExpiringSoon);
              store.dispatch("changeToken", Userdata.Token);
              console.log('token',this.$store.getters.getToken)
      // return this.$store.getters.getToken;
              // 

              return res.json();
            }
          })
          .then(error => {
            if (error.body == "INVALID PASSWORD") {
              this.invalid_password = true;
            }

            if (error.body == "INVALID EMAIL") {
              this.invalid_email = true;
            }

            this.errors.push(error.status);
            this.errors.push(error.body);
            // this.show =true
          });
      }
    },

    change: function() {
      // ***this function runs when user clicks sign in as a different user ***//
      this.currentemail = "";
      this.errors = [];
      this.password = "";
      this.flag = !this.flag;
    },

    commingsoon() {
      //runs for upgrade sevices
      this.$router.push("/commingsoon");
    },

    setvalues() {
      // onfoucs when ever clicked sets the alets to false
      this.invalid_password = false;
      this.invalid_email = false;
    }
  },

  validations: {
    password: {
      required,
      minLen: minLength(6)
    }
  },

  computed: {
    // showing responses on the screen
    validpassword: function() {
      return this.invalid_password;
    },
    validemail: function() {
      return this.invalid_email;
    },
    userdata() {
      return this.$store.state.userdata;
    }
  }
};
</script>

              <style >
@import url("https://fonts.googleapis.com/css?family=Roboto");

* {
  /* border: 1px solid black; */
}

.text-center {
  height: 100vh;
  overflow: hidden;
}

.disable {
  cursor: not-allowed;
  pointer-events: none;
  color: #c0c0c0;
  background-color: #ffffff;
}

.error-msg {
  color: #d03238;
  display: block;
  /* margin: 8px 0; */
}

h5 {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

img + h4,
h4 + div {
  margin-top: 5%;
}

.form-group:first-child {
  padding-left: 10%;
}

.bbutton {
  background-color: #ffc820;
  color: #333;
  font-family: "Maven Pro", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial,
    sans-serif;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.66px;
  line-height: 20px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 6px 18px;
  border: none;
}

.btn-width {
  width: 80%;
}

.form-group:first-child {
  padding-left: 10%;
}

.commingsoon:hover {
  box-shadow: 0 1px 4px rgba(0, 91, 201, 0.3),
    0 0 40px rgba(0, 92, 201, 0.1) inset;
}

.invalid {
  text-align: left;
  color: #d03238;
  font-size: 12px;
  display: block;
}
</style>
