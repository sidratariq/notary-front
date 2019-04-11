                    <template>
                        <div>
                        <div v-if="globalname" class="row row-set">
                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <!-- {{$v.$invalid}} -->
                        </div>
                          <!-- this is awesome time -->
                        <div  class="col-md-4 col-lg-4 col-sm-6 col-xs-12"  >
                              <div>
                                  <h3>Sign Up</h3>

                                  
                              
                                  <transition v-if="exist" name="fade">
                                  <div   class="alert alert-info" transition="expand">{{u}}</div>
                                  </transition>
                              
                                  <form @submit.prevent="onSubmit">
                                  <div class="row">
                                  <div class="col-6">
                                    <input type="text" class="form-control" @blur="$v.firstname.$touch()"  v-model="firstname" placeholder="First Name" id="firstname"> 
                                    <small v-if="!$v.firstname.alpha" :class="{invalid:!$v.firstname.alpha}">Spaces and numbers are not allowed</small>
                                    </div>
                                  <div class="col-6">
                                    <input type="text" class="form-control" @blur="$v.lastname.$touch()"  v-model="lastname" placeholder="Last Name"> 
                                    <small v-if="!$v.firstname.alpha" :class="{invalid:!$v.firstname.alpha}">Spaces and numbers are not allowed</small>
                                  </div>
                                  
                                  <!-- email validations -->
                                  <div class="col-12">  
                                    <input type="email" id="email" 
                                    v-model="email" 
                                    @blur="$v.email.$touch()" @focus="existchange"
                                    class="form-control" placeholder="Email"> 
                                        <small v-if="flag" class="invalid"> Spaces are not allowed</small>
                                        <small   :class="{invalid: true}" v-if="!$v.email.required">This field must not be empty.</small>
                                        <small v-if="!$v.email.email"  :class="{invalid:true}">Provide a valid email like johndoe@domain.com</small>
                                        </div>

                                        <small class="error-msg" v-if="emailexist">email already exists</small>


                                  <!-- company validation -->
                                  <div class="col-12">
                                    <input type="text" @blur="$v.company.$touch()" v-model="company" id="company" class="form-control" placeholder="Company">
                                    <small v-if="!$v.company.minLen" :class="{invalid: !$v.company.minLen}">Company name must be 3 character long</small>
                                  </div>

                                  <!-- phone no validations -->
                                  <div class="col-12">
                                    <input type="text" class="form-control" @blur="$v.number.$touch()" v-model="number" placeholder="Phone no">
                                    <small v-if="!$v.number.minLen" :class="{invalid:true}">Phone number must be 8 digit long</small>
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
          globalname: true,
          errors:[],
          nextroute:false


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
            minLen: minLength(8),
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
            verification
        },


        // methods
      methods: {

        loginEnter() {
            console.log(this.$v.invalid);
            this.$router.push("/home");
        },
        
        onSubmit() {
              
          if(!this.$v.$invalid){
            this.$http.post('http://localhost:8000/signup', {"email": this.email,
                "password":this.password,
                "name": this.name,
                "company":this.company,
                "phone":this.number
                })
            .then(response => {
                
                if(response.status ==200){
                  console.log(this)
                  this.nextroute = true;
                  this.$router.push("/verify")
                  localStorage.setItem("email",this.email)
                  console.log("chal gyaa code")
                }
                else{
                  console.log(response)
                }
                

                },
               error => {
                 console.log(error.bodyText)
                if(error.body == "EMAIL_ALREADY_EXISTS"){
                    this.email= true;
                    // this.exist = true;
                    setTimeout((()=>this.exist = false),1000)
                }
                this.errors.push(error.body)
                console.log(error.body)

            });
          }
           

          // console.log("mein chal rhaa hn naa mein so rae hn mein")
        


        },

        existchange(){
          this.exist = false;
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
          return this.Fname +" "+  this.Lname;
        },

        showresponse:function(){

        },

        Fname:function(){
          return this.firstname.trim();
        },
        Lname:function(){
          return this.lastname.trim()
        },

        emailexist:function(){
            return this.exist
        }
      },

      // beforeRouteLeave(to,from,next){
      //   console.log(to)
      //   next(false)
      // }

     
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

    .alert{
      position: absolute;
    }

    h3 {
      text-transform: uppercase;
      font-family: "Noto Sans SC", sans-serif;
    }

    .container-fluid{
      height: 100vh;
      /* padding-top: 5%; */
    }

      .error-msg{
                    color: #d03238;
                    display: block;
                    /* margin: 8px 0; */
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