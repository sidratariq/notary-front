            <template>

                    <div class="container-fluid mx-0">

                        <div class="row setborder setpadding"  v-if="checked">
                        
                                <div class="col-lg-8 sethidden topset" style="padding-top:18px">

                                    <div class="row" >
                                    
                                       
                                        <div class="col-3 topset">
                                        <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">

                                        <span class="">{{nooffilesselected}}  Selected</span>
                                        </div>

                                        <div class="col-3">
                                            <button class="btn  btn-sm apply" style="margin-right:8px" type="button" >
                                            MOVE
                                            </button>
                                     

                                        <div class="btn-group" >
                                        <button class="btn  btn-sm dropdown-toggle apply" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            MORE
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Export As CSV</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                        </div>
                                           </div>

                                        
                                        
                                    </div>
                                        

                                        
                                    
                                            

                                    
                                </div>
                        </div>  

                        <div class="row setborder setpadding"  v-if="!checked">
                        

                                <div class="col-lg-8 sethidden">
                                    <span class="setinbox set" style="" >Sent</span>
                                </div>
                                <div class="col-lg-4 searchbar">
                                <search></search>
                                </div>           
                        </div>  


                        <div class="row makescroll">
                                    <table style="width:100%;">
                                
                                        <tr>
                                        <th style="width:5%; "><span></span></th>
                                        <th style="width:2%; "><span></span></th>
                                        <th style="width:50%;" ><span >Subject</span></th>
                                        <th style="width:20%; padding-left:0px;" ><span >Status</span></th>
                                        <th style="width:14.5%; padding-left:0px;"><span >Sent</span></th>
                                        <th style="width:16.5%; "><span></span></th> 
                                        </tr>

                                        <!-- <rowset v-for="(key,index) in 10" :key="index"></rowset> -->
                                        <tr v-for="(key,index) in 10" :key="index" class="setborder" :class="{'clicked':checked}"  >
                                            <td style="text-align:center; padding:5px">
                                                <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
                                                <!-- (0,92,185) -->
                                            </td>
                                            <td @click="routechange">

                                            <i :class="{'far fa-clock':status[index]=='Waiting for others',
                                            'fas fa-ban voided':status[index]=='Voided',
                                            'fas fa-exclamation-circle reqaction':status[index]=='Need to sign',
                                            'fas fa-check sucess':status[index]=='Completed'}" 
                                            ></i>
                                            
                                            </td>
                                            <td class="setpadding" @click="routechange">
                                                <ul ><li class="setfont ">
                                                    <strong>
                                                    {{subjectname}}

                                                    </strong>
                                                </li>
                                                <li>
                                                <small class="text-muted">{{recepient[index]}}</small>
                                                </li></ul>
                                            </td>
                                            <td @click="routechange">
                                                <p style="font-size:13px">
                                                {{status[index]}}

                                                </p>
                                                </td>
                                            
                                            <td @click="routechange">
                                                <ul style="padding-left:0px;">
                                                    
                                                    <li class="date">
                                                    11/29/2018
                                                    </li>
                                                    <li>
                                                        <small class="text-muted">12:21:23 pm</small>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>

                                        <div class="btn-group" >
                                            <button class="btn  btn-sm dropdown-toggle" :class="{'btn-primary':action[index]=='Sign','btn-white':action[index]=='Move'}" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             {{action[index]}}
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item date padding" href="#">Forward</a>
                                                <a class="dropdown-item date padding" href="#">Create a Copy</a>
                                                <a class="dropdown-item date padding" href="#">Export As CSV</a>
                                                <a class="dropdown-item date padding" href="#">Delete</a>
                                            </div>
                                        </div>

                                            </td>

                                        </tr>
                                    </table>

                            </div>

                       



                            
                    </div>

            </template>

            <script>

            import search from './search.vue'

            export default {
             
               
                      data(){
                    return{
                    checked:false,
                    nooffilesselected:5,
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
                    }
                },
                computed:{
            
                },
                components:{
                    search
                }
            }
            </script>


            <style scoped>
   

                .sethidden{
                    height: 54px;
                }

                .btn-primary{
                background-color: #2463d1;
            }


            .makescroll{
                overflow-y: auto;

            }

            .apply{
                color: #000000;
                background-color: #f9f9f9;
                border-color: #ccc;

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

            .row{
                margin-left: 0px;
                margin-right:0px; 
            }

            .setpadding{
                /* padding-top:1%; */
                padding-left: 1%;
            }

            .padding{
                padding: .25rem 1.5rem;
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
                color: #1e1e1e;
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

                .sucess{
                color:#008938;
            }

            .reqaction{
                color: rgb(0,92,185);
            }

            .voided{
                color: #999;
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


    .date{
        padding-left:0px; 
        color: rgb(51, 51, 51);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: normal;
        text-rendering: optimizelegibility;
        font-size: 13px;
        line-height: 18px;
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



            .topset{
                padding-top:7px; 
            }

            </style>
