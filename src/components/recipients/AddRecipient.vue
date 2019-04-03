            <template>
            
                <div class="set-top">

                    <div class="container set-middle padding">

                    <h2 >Add Recipients</h2>

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
                
                        <!-- list of recipinets -->
                        <recipient_box  :index='index'
                          v-for="(key,index) in recipeints"  :key="index" :currentrecipient="recipeints[index]"
                         @DeleteRecipient='Remove(index)'> 
                         </recipient_box>


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
            import recipient_box from './Recipient.vue'
            
            export default {

            data(){
                return{
                recipeints:[{name:'',email:'',NeedtoSign:true,Receiveacopy:false}]
                }
            },

            components:{
                recipient_box
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
                    this.$router.push('/playground')
                }
            },
            computed:{

                
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

            </style>
