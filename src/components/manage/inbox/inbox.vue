            <template>

                    <div class="container-fluid mx-0">

                            <div>
                                <head_head :checked="checked" :nooffilesselected="nooffilesselected"></head_head>
                            </div>
                    

                            <div class="row makescroll">
                                       <table style="width:100%;">
                                
                                        <!-- headings side -->
                                        <tr>
                                            <!-- 1 -->
                                        <th style="width:5%;"><span></span></th>
                                            <!-- 2 -->
                                        <th style="width:2%;"><span></span></th>
                                            <!-- 3 -->
                                        <th style="width:50%;" ><span>Subject</span></th>
                                            <!-- 4 -->
                                        <th style="width:20%; padding-left:0px;" ><span >Status</span></th>
                                            <!-- 5 -->
                                        <th style="width:14.5%; padding-left:0px;"><span >Last change</span></th>
                                            <!-- 6 -->
                                        <th style="width:16.5%; "><span></span></th> 

                                        </tr>


                                        <!-- list of selected item field from database -->
     
                                        <tr v-for="(key,index) in 10" :key="index" class="setborder" :class="{'clicked':checked}"  >

                                            <!-- checkbox colum__1 -->
                                            <!-- error @click="return startx()" -->
                                            <td style="text-align:center; padding:5px">
                                                <input type="checkbox" id="checkbox" name="lists"   v-model="checked" class="checkbox">
                                            </td>

                                            <!-- status__2 -->
                                            <td @click="routechange">
                                            <i :class="{'far fa-clock':status[index]=='Waiting for others',
                                            'fas fa-ban voided':status[index]=='Voided',
                                            'fas fa-exclamation-circle reqaction':status[index]=='Need to sign',
                                            'fas fa-check sucess':status[index]=='Completed'}" ></i>
                                            </td>

                                            <!-- status__3 Subject-->
                                            <td class="setpadding" @click="routechange">
                                                <ul>

                                                <!-- subject -->
                                                <li class="setfont ">    
                                                    <a style="color: #1e1e1e; cursor:pointer; font-family: Helvetica Neue,Helvetica,Arial,sans-serif;">
                                                    {{subjectname}}
                                                    </a>
                                                </li>

                                                <!-- recipient -->
                                                <li>
                                                <small class="text-muted">{{recepient[index]}}</small>
                                                </li>
                                                
                                                </ul>
                                            </td>

                                            <!-- status__4 status  -->
                                            <td @click="routechange">
                                               
                                                <p style="font-size:13px">
                                                {{status[index]}}
                                                </p>

                                            </td>

                                            <!-- status__5 Last change  -->
                                            <td @click="routechange">
                                                <ul style="padding-left:0px" >
                                                    
                                                    <li class="date">
                                                    11/29/2018
                                                    </li>

                                                    <li>
                                                        <small class="text-muted">12:21:23 pm</small>
                                                    </li>

                                                </ul>
                                            </td>
                                       
                                            <!-- drop down__6 -->
                                            <td>
                                            <div class="btn-group" >
                                                <button class="btn btn-sm dropdown-toggle" :class="{'btn-primary':action[index]=='Sign','btn-white':action[index]=='Move'}" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                 {{action[index]}}
                                                </button>
                                                <div class="dropdown-menu">
                                                    <div class="row">
                                                        <div class="col-12">
                                                           <a class="dropdown-item date padding" href="#">Move</a>
                                                           <a class="dropdown-item date padding" href="#">Export As CSV</a>
                                                           <a class="dropdown-item date padding" href="#">Delete</a>
                                                        </div>
                                                  </div>
                                                </div>
                                            </div>
                                            </td>

                                            </tr>
                                    </table>

                            </div>
                        


                            
                    </div>

            </template>

            <script>
            import head_head from './inbox_header.vue'

            export default {
                data(){
                    return{
                    checked:false,
                    nooffilesselected:0,
                    subjectname:'Please Sign: SubjectName',
                    status:['Need to sign','Completed','Voided','Need to sign','Completed','Voided','Waiting for others'],
                    recepient:['To:Ali Ahsan','From:sidra','To:Ali Ahsan','From:sidra','To:Ali Ahsan','From:sidra','From:sidra'],
                    action:['Sign','Move','Sign','Move','Sign','Move','Sign'],
                   
                 
                        }
                },
                
                methods:{
                    
                    navigateToHome(){
                        this.$router.push('/helloworld')
                    },

                    routechange(){
                        this.$router.push('/detail/something')
                    },

                    // startx(){
                        // var checkboxes = document.getElementsByName("lists");   
                        // for(var i =0; i<document.checkboxes.length; i++){
                        // } 
                    // }
                },
                computed:{

                    isComplete:function(){
                        
                        if(this.status.values=='Need to sign'){
                            return true
                        }
                    },
                    needsign:function(){
                        if(this.status=='Completed'){
                            return true
                        }
                    },
                    iswaiting:function(){
                        if(this.status =='Waiting for others'){
                            return true
                        }
                    },
                    isVoided:function(){
                         if(this.status =='Voided'){
                            return true
                        }
                    }

                }
                ,
             
                components:{
                    head_head
                }
            
            }
            </script>


            <style scoped>

          


            .sucess{
                color:#008938;
            }

            .reqaction{
                color: rgb(0,92,185);
            }

            .voided{
                color: #999;
            }
         
                .sethidden{
                height: 54px;
                }

            .padding{
                padding: .25rem 1.5rem;
            }

            .makescroll{
                overflow-y: auto;

            }


            #checkbox{
                margin-right: 5px; 
            } 
            

            .container-fluid{
                padding: 0;
            }

            .setborder{
            border-bottom: 1px solid rgba(0,0,0,.1);
            }

            .setborder:hover{
              background-color:  rgb(216, 237, 250);
            }

            .setborder::selection{
                    background: #bad3f8;
                    text-shadow: none;
            }

            .row{
                margin-left: 0px;
                margin-right:0px; 
            }

            .setpadding{
                padding-top:1%;
                padding-left: 1%;
            }

            .setinbox{
                font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 20px;
                font-weight: 600;
                margin: 0%;
                bottom:4px; position:absolute;
            }

            .setfont{
                font-weight: 700px;
                color: black;
                font-size: 15px;
            }

            .setrelative{
            position:relative;
            }

            th{
                border-bottom: 1px solid #e9e9e9;
                font-size: 12px;
                font-weight: 900;
                line-height: 16px;
                padding: 8px 12px;
                text-align: left;
            }

             .date{
        padding-left:0px; 
        color: rgb(51, 51, 51);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: normal;
        text-rendering: optimizelegibility;
        font-size: 13px;
        line-height: 18px;
    }


        
            td ul li{
                list-style: none;
            }

            ul{
                padding: 0%;

            }

            input[type="checkbox"]{
            width: 17px; /*Desired width*/
            height: 17px; /*Desired height*/
            cursor: pointer;
            }

    .dropdown-menu{
        min-width: 10rem;
    }

    .searchbar{
        padding-left:0px;
        padding-right: 0px; 
    }

    .dropdown-item{
            width: 120px;
    }

    .clicked{
    background-color:  rgb(216, 237, 250);
    border-left: 4px solid rgb(8, 123, 238)
    }

    .btn-white{
        color: #000000;
    background-color: #f9f9f9;
    border-color: #ccc;
    }



            #checkbox{
                margin-right: 5px; 
            } 

            .checkbox{
                color: rgba(8, 123, 238)
            }

            .checkbox:checked{
                box-shadow:0 1px 4px rgba(8, 123, 238,0.3), 0 0 40px rgba(0,92,185, 0.1) inset;
                zoom: 1;
            }


            </style>
