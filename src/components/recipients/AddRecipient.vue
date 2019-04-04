            <template>
                    
                        <div class="set-top">

                            <div class="container set-middle padding">

                            <h2>Add Recipients</h2>

                            <!-- {{username}} -->
                            {{present}} => i am for email
                            {{validuser}} =>iam for user

                            
                            <transition name="fade">
                            <div  v-if="error" class="alert alert-danger" transition="expand">Please Enter a Valid email address</div>
                            </transition>
    
                            <!-- from here -->
                            <div class="setpadding setborder">
                                
                                {{recipeints}}
                                {{error}}

                                <!-- sender -->
                                <div class="col-md-12 col-xs-12 col-lg-12 setrelative">
                                <p class="text-muted removemargin sizing" >Sender</p>
                                <strong class="sizing to-lower">sidra tariq</strong>
                                <span class="setround">
                                    <i class="far fa-paper-plane inside"></i>
                                </span> 
                                </div>

                                <!--REcipients  -->
                                <div class="col-md-12 col-xs-12 col-lg-12 setrelative setmargin " >
                                <p class="text-muted removemargin sizing" >Recipients</p>
                                <span class="setround">
                                    <i class="fas fa-user inside"></i>
                                </span>
                                </div>
                    

                                <div v-for="(key,index) in recipeints" :key="index" class="col-md-12 col-lg-12 use-extra" >
                                <!--  v-rainbow -->
                                <div  class="row">
                                
                                <!-- email and name of recipient -->
                                <div class="col-sm-12 col-md-6 col-xs-12 col-lg-6 col-xl-6">
                                
                                <form>
                                <div class="form-group crush">
                                    <input type="email" class="form-control" v-model="recipeints[index].email" @keydown="textchange($event)"     id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email*">
                                    <!-- <small v-if="show==false" class="text-muted"> (wrong)show == false{{show}}</small> -->
                                    <small v-if="show == true"> Please enter a valid email address</small>
                                </div>

                                <!-- <slot></slot> -->
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="recipeints[index].name" @keydown="enteruser($event)"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*">
                                </div>

                                </form>

                                </div>

                                    <!--Drop down place  -->
                                <div class="col-sm-12 col-md-6 col-xs-12 col-lg-6 col-xl-6">
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <!-- Drop down for options -->
                                        <div class="col-md-4">
                                        </div>
                                        <div class="col-md-4">
                                        <p style="color:white">dajdkadkj</p>
                                        </div>
                                    </div>   


                                    <!-- 2nd -->
                                    <div class="row">
                                    <div class="col-md-4"></div>
                                    <!-- Drop down for options -->
                                    <div class="col-md-5">
                                        <div class="dropdown">                    
                                    <button class="btn  dropdown-toggle" type="button" style="font-size:13px; " id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-file-signature"></i>                                            
                                    NEEDS TO SIGN
                                    </button>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">

                                    <button class="dropdown-item" type="button" style="font-size:13px; "> 
                                        <span>
                                        <i class="fas fa-file-signature"></i>
                                        </span>
                                        Need to Sign
                                    </button>
                                        
                                            <button class="dropdown-item" style="font-size:13px;" type="button"><span>
                                                <i class="far fa-closed-captioning"></i>
                                                Receives a Copy
                                            </span>
                                            </button>
                                            </div>

                                            
                                        </div>
                                        <!-- end of drop down -->

                                                </div>
                                            
                                            <div class="col-md-3">
                                                        <span class="float-right">
                                                        <i class="fas fa-times-circle" v-on:click="Remove(index)"></i>
                                                        </span>
                                            </div>
                                            </div>

                                        </div>
                                        </div>
                                            
                                    
                                    </div>


                                <div class="btn btn-primary btn-white to-upper" @click="newRecipient()">
                                        <span class="set-color" >
                                                <i class="fas fa-user-plus" ></i>
                                        </span>
                                            Add Recipient
                                </div>
                            
                                <!-- to here -->
                                <div class="col-md-12 col-xs-12 col-lg-12 setrelative set-top">
                                    <p class=" removemargin to-lower"  style="font-weight:400; color:#333" >Once an envelope has been routed to all recipients, and documents signed, each recipient will get a completed copy.</p>
                                    <span class="setround">
                                        <i class="fas fa-check inside"></i>
                                    </span>
                                </div>
                            
                            </div>

                            <div class="row" style="background-color:pink">
                            <div class="col-md-12 col-xs-12 col-sm-12 to-upper">
                            
                            <div class="row">

                                <div class="col-md-4 col-xs-12 col-sm-12">
                                </div>    

                                <div class="col-md-4 col-xs-12 col-sm-12">
                                </div>   

                                <div class="col-md-4 col-xs-12 col-sm-12" style="padding:20px">
                                    
                                    <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                        
                                        <div class="row">
                                        <div class="col-6">
                                        <button type="button" class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper" style="border:1px solid #ccc; background-color:white">back</button>

                                        </div>
                
                                        <div class="col-6">
                                        <button class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper"  @click="changeroute">start</button>

                                        </div>

                                        </div>
                                            
                                        </div>

                                    </div>
                                </div>                                 

                            </div>   
                            </div>
                        </div>
                        

                        </div>

                        
                        </div>
                    </template>

                    <script>
                    import {mapActions} from 'vuex'
                    
                    export default {
                    data(){
                        return{
                            recipeints:[{name:'',email:'',NeedtoSign:true,Receiveacopy:false}],
                            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                            reg2:/[a-zA-Z]/,
                            error:false,
                            show : undefined,
                            username:undefined,
                            length:[]
                            
                        }
                    },
                    components:{
                    },
                    props:{
                        
                    },
                    
                    methods:{

                        newRecipient(recipeint){
                            this.recipeints.push({name:'',email:'',NeedtoSign:false,Receiveacopy:false})
                        },
                        
                        Remove(index){
                            if(this.recipeints.length>1){
                                this.recipeints.splice(index,1);
                            }
                            else{
                                alert("you need to have atleast one recipient")
                            }
                        },
                        
                        changeroute(){
                        // console.log("function started"+this.error)

                           this.recipeints.forEach(element => {
                            this.error = false

                            if ((Object.values(element)[1] == "") || this.reg.test(Object.values(element)[1]) == false){
                                 return this.error = true;
                                 
                            }

                            // if ( this.reg.test(Object.values(element)[1]) == false ) {
                            //     this.error = true
                            // }
                            
                               });


                                if (this.error == false) {
                                this.$router.push('/playground')
                            }
                    
                        //     // console.log(Object.values(element)[1])
                        //     console.log(this.reg.test(Object.values(element)[1])+"value of regec")


                        //     if(Object.values(element)[1] == "" || !this.reg.test(Object.values(element)[1])){
                        //         // console.log("empty check" + "invalid check")
                        //         this.error= true
                        //         // console.log("Loop running"+this.error)
                        //         return this.error;
                        //     }
                            
                        //     console.log("outside the loop"+this.error)
                        //     });

                        // //  alert(this.error)

                        //     if (this.error == false) {      
                        //     this.$router.push('/playground')
                        //     }
                                                
                        },

                        enteruser($event){
                           this.username = false;
                           let username = $event.target.value;

                           console.log(this.reg2.test($event.target.value))
                           console.log(username) 
                           if(username =='' || username.length == 0){
                               this.username = false
                           }

                           if(username.length>100){
                               this.username = false
                           }
                           
                           else{    
                               this.username = true
                           }
                        },

                        textchange($event){
                            this.show = false;
                            let log = $event.target.value;
                            let  show = this.reg.test($event.target.value)
                            if(show == false || show.length >100){
                                this.show = true
                            }
                            else{
                                this.show = false
                            }

                            // console.log('log'+log + 'show' + show)
                        },

                        createderror(){

                        },

                        isEmailValid: function(index) {
                            // console.log( (this.currentrecipients[index].email == "")? "" : (this.reg.test(this.currentrecipients[index].email)) ? 'true' : 'false');
                            console.log( (this.currentrecipients[index].email == "")? "nothing" : (this.reg.test(this.currentrecipients[index].email)) ? 'true' : 'false')
                        },
                    },

                    computed:{

                        present(){
                            return this.show
                        },

                        validuser(){
                            return this.username
                        }
                    },
                    mounted(){
                        // var age = 5;
                        // while(age < 10){
                        //     console.log("Your age is less than 10")
                        //     age++
                        // }
                    }
                    }
                    </script>

                    <style scoped>
                    
                    *{
                            background-color: rgb(244, 244, 244);
                            /* border: 1px solid black; */
                    }
                    
                    .set-middle{
                        /* margin-right: 150px; */
                        margin-left: 200px;
                    }
                    .set-recipient{
                        padding: 30px;
                    }
                    .removemargin{
                        margin-bottom:0px; 
                    }
                    .sizing{
                        text-transform:uppercase;
                        font-weight:bold;
                        font-size:13px
                    }
                    .setround{
                        border:1px solid #ccc;
                        border-radius:50%;
                        position: absolute;
                        left: -58px;
                        top: -1px;
                        z-index: 122;
                    }
                    .to-lower{
                        text-transform: lowercase;
                    }
                    .inside{
                        margin:8px;
                        color: #777;
                    }
                    .setpadding{
                        padding-left: 40px
                    }
                    .padding{
                        padding: 40px;
                    }
                    .setrelative{
                        position: relative;
                    }
                    .setborder{
                        border-left:0.5px solid #ccc;
                        z-index:667
                    }
                    .btn-white{
                        color: black;
                        background-color: #fff;
                        border-color: #ccc;
                        font-weight: bold;
                        font-size: 15px;
                    }
                    .to-upper{
                    text-transform: uppercase;
                    }
                    .set-color{
                        color: #ccc;
                    }
                    .setmargin{
                        margin-top:20px;
                        margin-bottom:20px
                    }
                    .set-top{
                        margin-top:6px;
                    }
                .OliveReact-Button--sizeLarge {
                    min-height: 44px;
                    min-width: 52px;
                    padding: 7px 18px;
                }
                .OliveReact-Button--main {
                    background-color: #ffce00;
                    border-color: #ffce00;
                    color: #333;
                }
                .OliveReact-Button {
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    color: #333;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 700;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    letter-spacing: .66px;
                    line-height: 1;
                    margin: 0;
                    overflow: visible;
                    padding: 4px 14px;
                    text-align: center;
                    text-decoration: none;
                    text-transform: uppercase;
                    vertical-align: middle;
                }


                .fade-enter{
                    opacity: 0;
                }

                .fade-enter-active{
                    transition: opacity 1s;
                }

                .fade-leave-active{
                    transition: opacity 1s ;
                    opacity: 0;
                }

                .cross::after{    
                        content: 'X';
                        border: 1px solid black;
                        background: black;
                        color: white;
                        position: absolute;
                        font-size: .65em;
                        max-width: 20px;
                        max-height: 20px;
                        padding: 3px;
                        border-radius:45%;
                        font-weight: bold;
                        right: -25px;
                        top: 0px;
                        z-index: 999;
                        font-weight: bold;
                        display: block;
                    }
                    .timeline_dot::after {
                        background-color: #ccc;
                        border-radius: 2px;
                        content: '';
                        display: block;
                        height: 10px;
                        width: 10px;
                        position: absolute;
                        top: 60px;
                        left: -46px;
                    }
                    .setpadding{
                        padding-left: 40px;
                        z-index: -1;
                    }
                    .crush{
                        padding-top: 20px;
                        padding-left:0px; 
                    }
                    .use-extra{
                        position:relative;
                        border:1px solid #ccc;
                        background-color:#ffffff;
                        margin-top: 4px;
                        margin-bottom: 6px;
                    }
                    </style>