        <template>
  <div class="text-center">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"></div>
      <div class="col-md-4 col-lg-4 col-sm-4 col-xs-12">

        <transition name="fade">
          <div
            v-if="sucessfull== true"
            class="alert bold alert-info"
            transition="expand"
          >Password Updated sucessfully</div>
        </transition>


        <transition name="fade">
          <div
            v-if="show == true"
            class="alert alert-info"
            transition="expand"
          >Verification code was sent to {{email}}{{flag}}</div>
        </transition>

        <img src="../../assets/icons/esnotary.png">

        <h3>Reset your password</h3>

        <p>
          We want to make sure it's really you. In order to further verify your identity, enter the verification code that was sent to {{email}}
          <br>
        </p>

        <form v-if="newpassword==false">
          <input
            class="form-control globalwidth"
            style="margin-left:15%; font-size:0.85rem"
            type="text"
            placeholder="Enter Verfication code" v-model="VerificationCode"
          >
          <p></p>
          <button @click.prevent="SendVerification()" class="bbutton globalwidth">Confirm</button>
        </form>

        <!-- password -->
        <form v-if="newpassword==true">
          <input
            class="form-control globalwidth"
            style="margin-left:15%; font-size:0.85rem"
            type="password" 
            placeholder="Enter New password"
            v-model="password" @blur="$v.password.$touch()"
          >
          <small class="UI-info" v-if="!$v.password.minLen" :class="{invalid:true}">The password must be 8 character long</small>

          <input
            class="form-control globalwidth"
            style="margin-left:15%;font-size:0.85rem; margin-top:2px; margin-top:2px"
            type="password"
            v-model="confirmPassword" @blur="$v.confirmPassword.$touch()"
            placeholder="Renter your password"
          >

          <small v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$invalid" :class="{invalid:true}">The password does not match</small>


          <p></p>
          <button @click.prevent="ChangePassword()" class="bbutton globalwidth">Confirm</button>
        </form>

        <hr>

        <div>
          <button class="btn btn-link" @click="ResendCode()">Resend Code</button>
        </div>
      </div>

      <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"></div>
    </div>
  </div>
</template>


<script>

    import {
      required,
      email,
      numeric,
      minLength,  
      sameAs,
      maxLength,
      alpha,
      alphaNum,

    } from "vuelidate/lib/validators";




export default {
  data: function() {
    return {
      email: localStorage.getItem("email"),
      flag: false,
      newpassword:false,
      VerificationCode:'',
       password: "", 
       confirmPassword: "",
       sucessfull:false

    };
  },
     // validations
        validations: {
      

        password: {
        required,
        minLen: minLength(8)
        },


        confirmPassword: {
        sameAs: sameAs(vm => {
        return vm.password
        })
        },
      },
  
  methods: {
    resendcode: function() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 5000);
    },

    SendVerification() {
    
      this.$http
        .post("http://localhost:8000/verifyEmail", { "email": this.email,'VerificationCode':this.VerificationCode})
        .then(res => {
          if (res.status == 200) {
            console.log(res.body);
            alert("code red");
            this.newpassword = true;

          
            return res;
          }
          
        })
        .catch(error => {
          console.log(error);
        });
      console.log("chal rhaa hai nae");
    },

    ResendCode(){

     let currentemail = this.email;
      if(this.currentemail!=''){
        this.$http
        .post("http://localhost:8000/sendCode", { "email": currentemail })
        .then(res => {
          if (res.status == 200) {
            console.log(res.body);
            alert("code red");
            this.$router.push("/forget");
            return res;
          }
          
        })
        .catch(error => {
          console.log(error);
        });
        localStorage.setItem('email',currentemail)
        
      }
      else{
        alert("please enter an email address to continue")
      }
      // changes route to forgetpassword

    },

    ChangePassword(){
      let route = this.$router
       this.$http
        .post("http://localhost:8000/updatePass", { "email": this.email,'vcode':this.VerificationCode,"password":this.password})
        .then(res => {
          if (res.status == 200) {
            console.log(res.body);
            alert("code red");
            this.newpassword = true;
            this.sucessfull = true;
            setTimeout(() => {
              this.flag = false;
              this.$router.push("login");
            }, 1000);
            // route.push("/login");
            return res;
          }
          
        })
        .catch(error => {
          console.log(error);
        });
      console.log("chal rhaa hai nae");
    }

  },

  computed: {
   
    show: {
      get() {
        return this.flag;
      },
      set(value) {
        this.value = value;
      }
    }
  }
};
</script>

        <style scoped>
* {
  background-color: white;
}

.alert {
  position: absolute;
  top: -69px;
}

.bold{
  left: 40px;
}

.text-center {
  height: 100vh;
  padding-top: 10%;
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

.globalwidth {
  width: 70%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
