                    <template>
                        <div>
                        <head_head></head_head>
                        <div v-if="globalname" class="row row-set">
                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            {{$v.$invalid}}
                        </div>
                          <!-- this is awesome time -->
                        <div  class="col-md-4 col-lg-4 col-sm-6 col-xs-12"  >
                              <div>
                                  <h3>Sign Up</h3>

                                  <transition name="fade">
                                      <div class="alert alert-info" transition="expand">Verification code was sent to {{email}}</div>
                                  </transition>
                                  <form @submit.prevent="onSubmit">
                                  <div class="row">
                                  <div class="col-6">
                                    <input type="text" class="form-control" @blur="$v.firstname.$touch()"  v-model="firstname" placeholder=" Name" id="firstname"> 
                                    <small v-if="!$v.firstname.alpha" :class="{invalid:!$v.firstname.alpha}">Please Enter a valid first name </small>
                                    </div>
                                  <div class="col-6">
                                    <input type="text" class="form-control" @blur="$v.lastname.$touch()"  v-model="lastname" placeholder="Last Name"> 
                                    <small v-if="!$v.lastname.alpha" :class="{invalid:!$v.lastname.alpha}">Please Enter a valid lastname </small>
                                  </div>
                                  
                                  <!-- email validations -->
                                  <div class="col-12">  
                                    <input type="email" id="email" 
                                    v-model="email" 
                                    @blur="$v.email.$touch()"
                                    class="form-control" placeholder="Email"> 
                                        <small v-if="flag" class="invalid"> Spaces are not allowed</small>
                                        <small   :class="{invalid: true}" v-if="!$v.email.required">This field must not be empty.</small>
                                        <small v-if="!$v.email.email"  :class="{invalid:true}">Provide a valid email like johndoe@domain.com</small>
                                        <small v-if="exist">email already exists</small>
                                        </div>

                                  <!-- company validation -->
                                  <div class="col-12">
                                    <input type="text" @blur="$v.company.$touch()" v-model="company" id="company" class="form-control" placeholder="Company">
                                    <small v-if="!$v.company.minLen" :class="{invalid: !$v.company.minLen}">Company name must be 3 character long</small>
                                  </div>

                                  <!-- phone no validations -->
                                  <div class="col-12">
                                    <input type="text" class="form-control" @blur="$v.number.$touch()" v-model="number" placeholder="Phone no">
                                    <small v-if="!$v.number.minLen" :class="{invalid:true}">Phone number must be 11 digit long</small>
                                  </div>

                                  <!-- password validation regex required -->
                                  <div class="col-12"> 
                                    <input class="form-control" v-model="password" @blur="$v.password.$touch()" type="password" placeholder="Enter new password">
                                    <small class="UI-info" v-if="!$v.password.minLen" :class="{invalid:true}">The password must be 8 character long</small>
                                  </div>

                                  <!-- confirm password validations -->
                                  <div class="col-12">
                                    <input type="password" v-model="confirmPassword" @blur="$v.confirmPassword.$touch()" class="form-control" placeholder="Confirm password">
                                    <small v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$invalid" :class="{invalid:true}">The password does not match</small>
                                  </div>

                                  <!-- terms and condition validation -->
                                  <div class="col-12 form-check" :class="{termcondition:!$v.terms.$model}" >
                                    <input type="checkbox" id="terms" v-model="terms" @change="$v.terms.$touch()"   class="form-check-input">Accept Terms and Conditions
                                  </div>
                                              
                                  </div>
                                  <button  :class="{disabled:$v.$invalid}" type="submit" >Create Your account</button>
                                  <!--   -->
                                  </form>                      
                                  </div>

                                    </div>                                    
                                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"> </div>
                                </div>  

                                   <!-- hdahjdajd -->
                                  <verification v-if="!globalname"></verification>

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

    import head_head from '../header/header.vue'
    import verification from './verficationscreen.vue'


    export default {

      // data and variables
      data() {
        return {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          company: "",
          terms:false,
          number:'',
          exist: false,
          globalname: true
        };
      },


        // validations
        validations: {
        email: {
          required,
          email,  
        },

        password: {
        required,
        minLen: minLength(8)
        },

        company:{
            required,
            minLen:minLength(3)
        },

        confirmPassword: {
        sameAs: sameAs(vm => {
        return vm.password
        })
        },

        terms: {
        required
        },

        number: {
            required,
            numeric,
            minLen: minLength(11),
            maxLen: maxLength(15)
            
          },

        firstname:{
          required,
          alpha
        },

        lastname:{
          required,
          alpha
        }
      },

        // components
        components:{
            head_head,
            verification
        },


        // methods
      methods: {

        loginEnter() {
            console.log(this.$v.invalid);
            this.$router.push("/home");
        },
        
        onSubmit() {
           this.$http.post('http://192.168.10.7:8000/signup', {"email": this.email,
                "password":this.password,
                "name": this.name,
                "company":this.company,
                "phone":this.number
                })
            .then(response => {
                console.log(response)},
            error => {
                console.log(error);
            });

          // console.log("mein chal rhaa hn naa mein so rae hn mein")
        


        }
      },
      computed:{
        flag:function(){
          if (/\s/.test(this.$v.email.$model)) {
            return true
            }
          else{
            return false
          }
          
        },

        name:function(){
          return this.firstname +" "+  this.lastname;
        },

        showresponse:function(){

        }
      }
    };
    </script>

                    <style scoped>
    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+SC");

    *{
      scroll-behavior: unset;
    }

    .row {
      text-align: center;
      overflow: hidden;
      margin: 0%;
    }

    h3 {
      text-transform: uppercase;
      font-family: "Noto Sans SC", sans-serif;
    }

    .container-fluid{
      height: 100vh;
      /* padding-top: 5%; */
    }


    button {
      background-color: #ffce00;
      border: #ffce00;
      height: 3rem;
      width: 15rem;
      border-radius: 4px;
      font-weight: bolder;
      text-transform: uppercase;
    }

    form img, 
    form h3 {
      text-align: center;
    }

    .termcondition{
      color: #d03238;
    }

    .invalid {
      text-align: left;
      color: #d03238;
      font-size: 12px;
      display: block;
    }

    .disabled{
        cursor: not-allowed;
        background-color: #cccccc;
    }

    .inline{
      text-align: left;
      margin-left: 10%;

    }

    form div{
      margin-top: 7px;
      margin-bottom: 7px;

    }

    .invalid_checkbox{
      color: red;
    }

    .row-set{
     margin: 10px;
    }



    

    </style>