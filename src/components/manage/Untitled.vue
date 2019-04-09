 <template>

                    <div class="container-fluid mx-0">

                       <div class="row makescroll text-center" style="height:100%; padding-top:15%">
                                <div class="col-lg-12 col-md-12">
                                        <i :class="{'fas fa-file':fileicon,'fas fa-folder':foldericon}" style="color: #999;font-size: 48px; display:block"></i>
                                        <!-- <i class="far fa-file"  style="color: #999;font-size: 48px; display:block"></i> -->
                                        <!-- <i class="fas fa-folder" style="color: #999;font-size: 48px; display:block"></i> -->

                                    <small class="text-muted" >{{name}}</small>
                               
                                </div>

                        </div>






                    </div>

            </template>

            <script>
            // import search from './search.vue'
            export default {
             
               
                      data(){
                    return{
                    checked:false,
                    nooffilesselected:5,
                    subjectname:'Please Sign: SubjectName',
                    status:['Need to sign','Need to sign'],
                    recepient:['To:Ali Ahsan','From:sidra','To:Ali Ahsan','From:sidra','To:Ali Ahsan','From:sidra','From:sidra'],
                    action:['Sign','Sign','Move','Sign','Move','Sign'],
                    showstatus:["You haven't received any envelopes.",
                                "You haven't sent any envelopes.",
                                "You don't have any draft envelopes.",
                                "You don't have any deleted envelopes.",
                                "You haven't received any envelopes that you need to act on.",
                                "You haven't sent any envelopes that others need to act on.",
                                "You don't have any expiring envelopes.",
                                "You don't have any completed envelopes.",
                                "This folder is empty"
                                
                                ]
                   
                 
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
                    name(){
                          if(this.$route.query.view ==undefined && this.$route.query.folder == undefined ){  
                            return this.showstatus[0]
                          }
                          if(this.$route.query.view =='Sent' ){
                              return this.showstatus[1]
                          }
                          if(this.$route.query.view =='Draft'){
                              return this.showstatus[2]
                          }
                          if(this.$route.query.view =='Delete'){
                              return this.showstatus[3]
                          }
                          if(this.$route.query.view =='Actions Required'){
                              return this.showstatus[4]
                          }
                          if(this.$route.query.view =='Waiting for Others'){
                              return this.showstatus[5]
                          }
                          if(this.$route.query.view =='Expiring Soon'){
                              return this.showstatus[6]
                          }
                           if(this.$route.query.view =='Completed'){
                              return this.showstatus[7]
                          }
                          if(this.$route.query.folder !=undefined){
                              return this.showstatus[8]
                          }                

                    },
                    foldericon(){
                      
                            if(this.$route.query.folder !=undefined){
                              return true
                            }   
                            return false
                    },
                    fileicon(){
                        if(this.$route.query.view !=undefined || this.$route.query.view !='' ){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                },
                components:{
                    // search
                }
            }
            </script>


            <style scoped>
   
                .sethidden{
                    height: 54px;
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
              .btn-white{
        color: #000000;
    background-color: #f9f9f9;
    border-color: #ccc;
    }
            
            .btn-primary{
                background-color: #2463d1;
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
