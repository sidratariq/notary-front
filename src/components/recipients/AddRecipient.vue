        <template>
                            
                                <div class=" setbackground">

                                    <div class="container set-middle padding">

                                    <h2 >Add Recipients</h2>

                                    
                                    <transition name="fade">
                                    <div  v-if="error" class="alert alert-danger w-75 setplace" transition="expand">Please Enter a Valid email address<span class="pull-left" style="position:absolute; right:7px; font-size:0.8em; font-wight:bold" @click="error=false">x</span></div>
                                    </transition>

                                    <transition name="fade">
                                    <div  v-if="errorname" class="alert alert-danger w-75 changeplace" transition="expand">Please Enter a Valid user name<span class="pull-left" style="position:absolute; right:7px; font-size:0.8em; font-wight:bold" @click="errorname=false">x</span></div>
                                    </transition>

                                    <transition name="fade">
                                        <div  v-if="norecipient" class="alert alert-danger w-75 changeplace" style="color:#b22b31"  transition="expand">To continue, add a name and email for each recipient.</div>
                                    </transition>
            
                                    <!-- from here -->
                                    <div class="setpadding setborder">
                                        
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
                            

                                        <div v-for="(key,index) in recipeints"  style="background-color:#fffff"  :key="index" class="col-md-12 col-lg-12 use-extra foreground" >
                                        <!--  v-rainbow -->
                                        <div  class="row foreground">
                                        
                                        <!-- email and name of recipient -->
                                        <div class="col-sm-12 col-md-6 col-xs-12 col-lg-6 col-xl-6">
                                        
                                        <form>
                                        <div class="form-group crush">
                                            <input type="email" class="form-control" v-model="recipeints[index].email"     id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email*">
                                        </div>
                                        <!-- <slot></slot> -->
                                        <div class="form-group">
                                            <input type="text" class="form-control" v-model="recipeints[index].name"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*">
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
                                                        <p style="color:white">.</p>
                                                        </div>
                                                    </div>   

                                                        <!-- 2nd -->
                                                        <div class="row">
                                                        <div class="col-md-4"></div>
                                                    
                                                        <!-- Drop down for options -->
                                                        <div class="col-md-5">
                                                        <div class="dropdown">                    
                                                        <button class="btn  dropdown-toggle seteffect" type="button" style="font-size:13px; " id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i  :class="{'fas fa-file-signature seteffect':signclass(index),'far fa-closed-captioning seteffect':copyclass(index)}"></i>                                            
                                                        
                                                        <!-- {{(signclass(index)==true)? 'Need To Sign'  }} -->
                                                        <!-- {{copyclass(index)+ "i am copy"}} -->
                                                        {{(signclass(index)==true)? 'Need to Sign':'Receives a Copy'}}

                                                        </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <button class="dropdown-item seteffect" @click="UserSign(index)" type="button" style="font-size:13px; "> 
                                                        <span>
                                                        <i class="fas fa-file-signature"></i>
                                                        </span>
                                                        Need to Sign
                                                    </button>
                                                    <button class="dropdown-item" style="font-size:13px;" @click="ReceiveaCopy(index)" type="button"><span>
                                                        <i class="far fa-closed-captioning seteffect"></i>
                                                        Receives a Copy
                                                    </span>
                                                    </button>
                                                    </div>
                                                </div>
                                                <!-- end of drop down -->
                                                </div>
                                                    
                                                    <div class="col-md-3">
                                                        <span class="float-right" v-if="onecheck">
                                                        <i class="fas fa-times-circle" v-on:click="Remove(index)"></i>
                                                        </span>
                                                    </div>
                                                    </div>

                                                </div>
                                                </div>
                                                    
                                            
                                            </div>


                                        <div class="btn btn-primary btn-white to-upper" @click="newRecipient()">
                                                <span class="set-color" >
                                                        <i class="fas fa-user-plus seteffect" ></i>
                                                </span>
                                                    Add Another
                                        </div>
                                    
                                        <!-- to here -->
                                        <div class="col-md-12 col-xs-12 col-lg-12 setrelative set-top">
                                            <p class=" removemargin to-lower"  style="font-weight:400; color:#333" >Once an envelope has been routed to all recipients, and documents signed, each recipient will get a completed copy.</p>
                                            <span class="setround">
                                                <i class="fas fa-check inside seteffect"></i>
                                            </span>
                                        </div>
                                    
                                    </div>

                                    <div class="row">
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
                                                <button type="button" class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper" @click="oldroute" style="border:1px solid #ccc; background-color:white">back</button>

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
                                    errorname:false,
                                    norecipient:false
                                    
                                }
                            },
                            components:{
                            },
                            props:{
                                
                            },
                            
                            methods:{
                                newRecipient(recipeint){
                                    this.recipeints.push({name:'',email:'',NeedtoSign:true,Receiveacopy:false})
                                },
                                
                                Remove(index){
                                
                                    if( this.recipeints.length>1){
                                        this.recipeints.splice(index,1);
                                    }
                                    else{
                                        console.log("do nothing")
                                    }

                                   
                                },

                                UserSign(index){
                                    this.recipeints[index].NeedtoSign= true;
                                    this.recipeints[index].Receiveacopy= false
                                },

                                ReceiveaCopy(index){
                                    this.recipeints[index].Receiveacopy= true;
                                    this.recipeints[index].NeedtoSign= false
                                },

                                changeroute(){

                                let validemail =[];
                                let validusername=[];
                                let validname=[];
                                let validarray =[];

                                this.error = false

                                // get all the email in an array 
                                this.recipeints.forEach(element =>{
                                    validemail.push(Object.values(element)[1]);
                                    validusername.push(Object.values(element)[0])
                                    
                                });


                                // check the regex of array make and array containing true or false[true,true,false]
                                validemail.forEach(element =>{
                                validarray.push(this.reg.test(element)) 
                                })

                                // check for valid username
                                validusername.forEach(element=>{
                                    if(element.length > 0 && element.length<100 && this.reg2.test(element)){
                                        validname.push(true)
                                    }
                                    else{
                                        validname.push(false)
                                    }
                                })

                                // check for invalid username error message
                                var j = 0;
                                var count1 = 0

                                while(j<validname.length){
                                    if(validname[j] == false){
                                        count1 ++
                                    }
                                    j++
                                }

                                if(count1 >0){
                                    this.errorname = true
                                    setInterval(()=>this.errorname=false,3000)
                                }


                                // if array contain false means there is an error we can't move
                                    var i = 0
                                    var count = 0

                                    while ( i < validarray.length) {
                                        if (validarray[i] == false) {
                                            count ++
                                        }
                                        i++
                                    }



                                    if(count >0){
                                        this.error = true;

                                        setInterval(()=>this.error=false,2000)
                                    }

                                    //  check for valid user name and email
                                    if (count == 0 && count1 ==0) {
                                        localStorage.setItem('recipients',JSON.stringify(this.recipeints))
                                        console.log(this.recipeints)
                                        this.$router.push('/playground')
                                    }
                            
                                                                            
                                },

                                oldroute(){
                                        this.$router.push('/adddocs')

                                },
                            
                                createderror(){
                                },

                                Receiveacopy(){
                                    this.NeedtoSign = false;
                                    this.Receiveacopy = true;
                                },

                                isEmailValid: function(index) {
                                    // console.log( (this.currentrecipients[index].email == "")? "nothing" : (this.reg.test(this.currentrecipients[index].email)) ? 'true' : 'false')
                                },

                                copyclass:function(index){
                                return this.recipeints[index].Receiveacopy
                                },

                                signclass:function(index){
                                    return this.recipeints[index].NeedtoSign
                                },
                            },

                            computed:{
                                
                               check:{
                                   set:function(newvalue){

                                   },
                                   get:function(){

                                   }
                               },
                               
                               onecheck:function(){
                                    if(this.recipeints.length ==1){
                                        return false;
                                    }
                                    else{
                                        return true;
                                    }
                               }
                               

                            }                        
                            }

                            </script>

                            <style scoped>
                            
                            *{
                                    /* background-color: rgb(244, 244, 244); */
                            }


                            .seteffect:hover{
                                background-color: transparent;
                                border-color: transparent;
                                color: #1951b8;
                            }

                            .setbackground{
                                background-color: rgb(244, 244, 244);
                                margin: 0px;
                                
                            }

                            .foreground{
                                background-color: #ffffff!important;
                            }

                            .alert{
                                position: absolute!important;
                                z-index: 9999;
                            }

                            .changeplace{
                                top:60px!important;
                            }

                            .setplace{
                                top:120px!important;
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
                                background-color: rgb(244, 244, 244);
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