              <template >
                <div class="text-center">

                  <div class="row" style="margin-top:10%">
                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12" >
                      <!-- {{password}} -->
                      <!-- {{currentemail}} -->
                      <!-- {{ -->
                        <!-- $v.password.$invalid -->
                      <!-- }} -->

                    <ul class="list-group">
                    <li class="list-group-item" v-for="(u,key) in user" :key="key">
                      {{u}}{{key}}

                      
                    </li>
                    </ul>

                    </div>


                    <!-- here the main login things happen -->
                    <div  class="col-md-4 col-lg-4 col-sm-4 col-xs-12" >
                      <img src="../../assets/icons/esnotary.png"  >
                      
                      <h4>Please log in to your account</h4>
                      <login v-if="flag" :flag="flag" @gotclicked="flag = $event" @childemail="currentemail = $event"> </login>                  
                    <p>
                    </p>

                    <!--Login password  -->
                    <div v-show="!flag">                
                       
                        <p>{{currentemail}}</p>
                      <!-- asdkjbhbalhbafh -->
                        <form class="btn-set">
                          <div class="form-group" > 
                            <input type="password" autocomplete="on" @focus="setvalues" v-model="password" @blur="$v.password.$touch()" class="form-control" style="width:90%"  aria-describedby="emailHelp" placeholder="Enter password">
                            <!-- <input class="form-control" type="password" placeholder="Enter password"> -->
                            <small class="UI-info" v-if="!$v.password.minLen" :class="{invalid:true}">The password must be 6 character long</small>
                            <small v-if="show" class="error-msg">
                              Invalid email or password
                            </small>
                            <small v-if="validpassword" class="error-msg">
                              Invalid password please try again
                            </small>
                            <small v-if="validemail" class="error-msg">
                              Invalid email!! Please sign in as a different user
                            </small>
                            </div>
                            <button class="bbutton btn-width" @click.prevent="login"> Log IN</button>
                        </form>
                        <button class="btn btn-link"   @click="forgetpassword"><small>Forgot password</small></button>
                        
                      </div>

                      <hr>
                  
                      <!-- for email -->
                      <div v-if="!flag" @click="change" >
                          <button class="btn btn-link"><small> Sign in as a different user</small></button>
                      </div>

                      <!--for password  -->
                      <div v-if="flag" style="margin-top:10%;">
                        <h6>Or log in via:</h6>
                        <img @click="commingsoon()" class="commingsoon" src="../../assets/icons/socialsupport.png" alt="">
                      </div>

                    </div>

                    <div  class="col-md-4 col-lg-4 col-sm-6 col-xs-12">     </div>

                  </div>

                <foot_footer></foot_footer>
                
                </div>

              </template> 

    <script>

        import {required,minLength} from "vuelidate/lib/validators";

        import login from "./login.vue"
        import foot_footer from "../footer/footer.vue"
        import { mapActions } from "vuex";

              
          export default {
            data() {
              return {
                flag:true,
                currentemail:'',
                password:'',
                user:[],
                errors:[],
                show:false,
                invalid_password:false,
                invalid_email:false,
                Userdata:{},

              
              };
            },  
            components:{
              login,
              foot_footer
            }, 
            methods:{

              // use logic to disable and enable the button
              enteremail:function(){
                this.flag=!this.flag;
              },


              forgetpassword:function(){
                // changes route to forgetpassword
                this.$router.push('/forget')
              },

              login:function(){ 
                  // *** this function sends the post request and if users shows if there is mistake in client side ***///
                  // *** this function sends the post request and if users shows if there is mistake in client side ***///
                if(!this.$v.password.$invalid){

                   this.$http.post('http://localhost:8000/login', {
                                	"email": this.currentemail,
                                  "password":this.password})
                                  .then(res => {
                                    // console.log(res.bodyText)
                                    if(res.status == 200){
                                          this.$router.push('/dashboard')                                    
                                      }
                                    return res.json()
                                  })
                                  .then(response => {

                                    this.Userdata = response;
                                    console.log(this.Userdata)

                                    // setting local data for future use
                                    localStorage.setItem("user_name",this.Userdata.Userdata.Name);
                                    localStorage.setItem("user_email",this.Userdata.Userdata.Email);
                                    localStorage.setItem("user_image",this.Userdata.Userdata.Picture);
                                    localStorage.setItem("user_initial",this.Userdata.Userdata.Initials);
                                    localStorage.setItem("user_signature",this.Userdata.Userdata.Sign);
                                    localStorage.setItem("user_company",this.Userdata.Userdata.Company);
                                    localStorage.setItem("user_token",this.Userdata.Token);
                                    localStorage.setItem("user_signto",this.Userdata.WaitingME);
                                    localStorage.setItem("user_waiting",this.Userdata.WaitingOther);
                                    localStorage.setItem("user_expire",0)

                                    console.log(localStorage.getItem("user_name"));
                                    console.log(localStorage.getItem("user_email"));
                                    console.log(localStorage.getItem("user_image"));
                                    console.log(localStorage.getItem("user_initial"));
                                    console.log(localStorage.getItem("user_signature"));
                                    console.log(localStorage.getItem("user_company"));
                                    console.log(localStorage.getItem("use_token"));
                                    console.log(localStorage.getItem("user_signto"));
                                    console.log(localStorage.getItem("user_waiting"));
                                    console.log(localStorage.getItem("user_expire"));



                                    // setting up store values
                                    this.$store.dispatch("change_username",this.Userdata.Userdata.Name);
                                    this.$store.dispatch("change_userprofilepic",this.Userdata.Userdata.Picture);
                                    this.$store.dispatch("changeinitial",this.Userdata.Userdata.Initials);
                                    this.$store.dispatch("changesignature",this.Userdata.Userdata.Sign);
                                    this.$store.dispatch("changecompany",this.Userdata.Userdata.Company);
                                    
                                    // console.log(this.Userdata.Userdata.Company)
                                    // console.log(this.Userdata.Userdata.CreationTime)
                                    // console.log(this.Userdata.Userdata.Email)
                                    // console.log(this.Userdata.Userdata.Initials)
                                    // console.log(this.Userdata.Userdata.Name)
                                    // console.log(this.Userdata.Userdata.Phone)
                                    // console.log(this.Userdata.Userdata.Picture)
                                    // console.log(this.Userdata.Userdata.Sign)
                                    // console.log(this.Userdata.Userdata.Userid)
                                    


                                    // CreationTime
                                    // Email
                                    // Initials
                                    // Name
                                    // Phone
                                    // Picture
                                    // Sign
                                    // Userid
                                    
                                  //  console.log(typeof(response))

                                  // console.log('======= Object.keys ==========');    
                                  // Object.keys(response).map(e => {
                                  //     // iterate through object
                                  //     if(typeof(response[e])=="object"){
                                  //       let userdata = Object.entries(response[e]);
                                  //       console.log("object keys"+userdata+typeof(userdata))
                                  //       for(let key in userdata){
                                  //         console.log(userdata[key])
                                  //       } 
                                  //     }
                                  //     console.log(`key= ${e} value = ${response[e]}`)
                                  // });


                                  // Object.entries(response).forEach(([key, value]) => {
                                  //   console.log(`key= ${key} value = ${value}`)
                                  // })
                                  
                                  
                                //  let userdata = Object.entries(response);
                                  // for( let outer in userdata){
                                      // for(let inner in userdata[outer]){
                                        // console.log("outer"+outer+"inner"+inner+userdata[outer][inner])                                     
                                      // }
                                  // }

                                    // _____________
                                    // console.log(response)
                                    // const resultArray = [];
                                    // for (let key in response){
                                    //   console.log(key)
                                    //   resultArray.push(key);
                                    // }
                                    // this.user = resultArray
                                    // console.log(this.user)
                                    // console.log(resultArray)
                                    },
                                error => {
                                    if(error.body =='INVALID PASSWORD'){
                                      this.invalid_password = true
                                    }

                                    if(error.body =="INVALID EMAIL"){
                                      this.invalid_email = true
                                    }

                                    this.errors.push(error.status)
                                    this.errors.push(error.body)
                                    // this.show =true
                                });


                }
              },

              change:function(){
                // ***this function runs when user clicks sign in as a different user ***//
                this.currentemail = '';
                this.errors = [];
                this.password = '';
                this.flag = !this.flag;
              },

              commingsoon(){
                //runs for upgrade sevices
                this.$router.push('/commingsoon');
              },
              
              setvalues(){
                // onfoucs when ever clicked sets the alets to false
                this.invalid_password = false;
                this.invalid_email = false;
              }
            },

            validations:{
               password: {
                   required,
                   minLen: minLength(6)
               },
            },

            computed:{
                // showing responses on the screen
                validpassword:function(){
                  return this.invalid_password;
                },
                validemail:function(){
                  return this.invalid_email;
                }
            }


         

          
          };
          </script>

              <style >
              @import url('https://fonts.googleapis.com/css?family=Roboto');

              

              *{
                /* border: 1px solid black; */
              }
              

              .text-center{
                height: 100vh;
                overflow:hidden
              }
            

            
              .disable{
                  cursor: not-allowed;
                  pointer-events: none;
                  color:#c0c0c0;
                  background-color: #ffffff;
              }

              .error-msg{
                    color: #d03238;
                    display: block;
                    /* margin: 8px 0; */
              }
      
          
              h5{
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
              }

              img + h4,h4 + div{
                margin-top: 5%;
              }

              .form-group:first-child{
                padding-left:10%;
              }

                  .bbutton{
                  background-color:  #ffc820;
                  color: #333;
                  font-family: "Maven Pro","Helvetica Neue","HelveticaNeue",Helvetica,Arial,sans-serif;
                  font-size: 13px;
                  font-weight: bold;
                  letter-spacing: .66px;
                  line-height: 20px;
                  text-decoration: none;
                  text-transform: uppercase;
                  padding: 6px 18px;
                    border: none;
                }


              .btn-width{
                width: 80%;
              }

              .form-group:first-child{
                padding-left:10%;
              }

          
            .commingsoon:hover{
              box-shadow:0 1px 4px rgba(0, 91, 201, 0.3), 0 0 40px rgba(0, 92, 201, 0.1) inset;

            }

            .invalid {
              text-align: left;
              color: #d03238;
              font-size: 12px;
              display: block;
              }

          </style>
