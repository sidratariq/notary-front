 <template>
        
                        <div class="col-md-12 col-lg-12 use-extra" >
                                    <!--  v-rainbow -->
                                    <div  class="row">
                                        <!-- email and name of recipient -->
                                        <div class="col-sm-12 col-md-6 col-xs-12 col-lg-6 col-xl-6">
                                        <form>
                                                <slot></slot>
                                           
                                                {{currentrecipients.name}}
                                                {{currentrecipients.email}}
                                                {{currentrecipients.NeedtoSign}}
                                                {{currentrecipients.Receiveacopy}}

                                            <div class="form-group crush">
                                                <input type="email" class="form-control" v-model="currentrecipients.email"   :keyup="logEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email*">
                                            </div>
                                            <!-- <slot></slot> -->

                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="currentrecipients.name" :keyup="logName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*">
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

                                            <!-- if i say ky user validate kray aur phir increment kray array size ko  -->

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
                                                    <i class="fas fa-times-circle" v-on:click="remove(index)"></i>
                                                    </span>
                                        </div>
                                        </div>

                                    </div>
                                    </div>
                                        
                                
                                </div>

                                    
    </template>

    <script>
    import {required,minLength} from "vuelidate/lib/validators";
    export default {
        data(){
                    return{
                    recipeints:this.currentrecipient,
                     currentrecipients:{
                            name:this.currentrecipient.name,
                            email:this.currentrecipient.email,
                            NeedtoSign:this.currentrecipient.NeedtoSign,
                            Receiveacopy:this.currentrecipient.Receiveacopy
                        }
                    }
                },
        props:{
            currentrecipient:{
            },
            index:{
                type:Number
            }
            },
    
        methods:{
            remove(id) {
                this.$emit('DeleteRecipient',id)
            },
            logEmail(){
                console.log()
            },
            logName(){
            }
        },
        mounted: function(){
            console.log(Object.keys(this.recipeints))
            // console.log(Object.values(this.recipeints))
        }
    }
    </script>

    <style scoped>
        *{
            /* border: 1px solid black; */
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