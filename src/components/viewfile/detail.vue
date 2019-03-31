                        <template>

                                <div class="container-fluid mx-0" style="">
                                    
                                <div class="row mx-0">
                                
                                <!-- detail side -->
                                <div class="col-10 col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 adjustpadding">
                                <div class="row adjustpadding">
                                    

                                                                      
                                    <div class="col-12">
                                        <div class="row">
                                         <p class="setname setmargin">
                                                Please E-Notarize: pdf.pdf
                                                <span style="width:16px; height:16px"><i class="fas fa-exclamation-circle foldericon circle"></i></span>
                                        </p>    
                                        </div>
                                    </div>

                                    <!-- lastchange data -->
                                    <div class="col-12" >
                                        <div class="row">
                                        <small class="text-muted">Last change on 12/29/2018 | 02:12:24 am</small>

                                        </div>
                                    </div>

                                    <!--sent data-->
                                    <div class="col-12">
                                        <div class="row">
                                        <small class="text-muted">Sent on 12/29/2018 | 02:12:24 am </small>

                                        </div>
                                    </div>

                                    <!--status void/complete/waiting for others  -->
                                    <div class="col-12 adjustmargin">
                                        <div class="row">
                                             <div>
                                               <i class="fas fa-check sucess"></i>
                                               <strong>
                                               Completed status
                                               </strong>
                                             </div>
                                        </div>
                                    </div>

                                    <!-- print bar and etc -->
                                    <div class="col-lg-12 col-md-8 col-md-8 col-lg-10 col-sm-8 col-xs-12">

                                    <div class="row options" >

                                        <!-- move and more button dropdown -->
                                            <div class="col-md-8 col-lg-10 col-sm-8 col-xs-12">
                                            
                                            <strip></strip>
                                            </div>
                                        
                                        <!-- print and download -->
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12 setpadding yee wlaa" >

                                            <div class="row setpadding" style="margin-left:0px; margin-right:0px" >
                                                
                                                <div class="col-3 setpadding "  >

                                                </div>

                                                <div class="col-3 setpadding">
                                                   <div class="btn-group setpadding">
                                                     <button class="btn btn-sm apply download" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                       <i class="fas fa-download circle"></i>
                                                     </button>
                                                  
                                                   </div>
                                                </div>


                                                <div class="col-3 setpadding" > 
                                                    <button class="btn btn-sm apply print" type="button" >
                                                    <i class="fas fa-print circle"></i>
                                                    </button>
                                                </div>


                                                

                                            </div>
                                        </div>

                                    </div>

                                    

                                    </div>

                                    


                                </div>

                                <hr>

                                <!-- recipients -->
                                <div class="row">
                                    <div class="col-12">
                                    <h4>Recipients</h4>
                                    <hr>


                                    <recipient v-for="(data,index) in recipient" :key="index" ></recipient>
                            
                                    </div>
                                </div>


                                <!-- Message -->
                                <div class="row">
                                    <div class="col-12">
                                    <h5>Message</h5>

                                    <!-- THIS WILL BE LIST OF MESSAGES -->
                                    <div class="col-12">
                                    <small class="text-muted">No message has been entered.</small>
                                    </div>
                                    
                                    <hr>

                                    <div class="col-12">
                                    <small class="text-muted">No message has been entered.</small>
                                    </div>

                                    </div>
                                </div>


                                </div>

                                <!-- sidebar -->
                                <div class="col-2 col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 setpadding setsidebar" >
                                                                         
                                    <sidebar></sidebar>
                                
                                </div>    
                                
                                </div>                                        
                                </div>

                        </template>

                        <script>

                        import sidebar from './FileSidePreview'
                        import strip from './movestrip.vue'
                        import recipient from './recipients.vue' 


                        export default {
                            data(){
                                return{
                                checked:false,
                                recipient:[{name:'',email:'',receiving_date:'',receiving_time:''},
                                           {name:'',email:'',receiving_date:'',receiving_time:''}]
                                    }
                            },
                            
                            methods:{
                                navigateToHome(){
                                    this.$router.push('/helloworld')
                                }
                            },
                            computed:{
                        
                            },
                            components:{
                                sidebar,
                                strip,
                                recipient
                            }
                        }
                        </script>


                        <style scoped>

                        *{
                            /* border: 1px solid black; */

                        }

                        .actionbar{
                            background-color: #e9e9e9;
                            height: 28px;
                            position: absolute;
                            width: 131px;
                            top: 22%;
                            right: 13%;
                            border:1px solid #ccc;
                        }

                          .dropdown-item{
                                  width: 120px;
                          }

                       
                        .padding{
                          padding: .25rem 1.5rem;
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



                        .menuset{
                            min-width: 20rem;
                        }

                        .mx-0{
                            height:100vh;
                            padding-right:0px;
                            padding-left:0px;  
                        } 

                        .sidedisplay{
                            background: #e9e9e9;
                            overflow: auto;
                        }    

                        .circle{
                            color: #868686;
                            /* height: 16px; */
                            /* width: 16px; */
                        }

                        .apply{
                        color: #000000;
                        background-color: #f9f9f9;
                        border-color: #ccc;
                        }

                    .dropdown-item{
                        width: 120px;
                        }    

                .dropdown-menu{
                        min-width: 10rem;
                        }

                .download::after{
                    content: 'Download';
                    position: absolute;
                     bottom: 10px;
                     padding: 1em 3em;
                     right: 20px;
                     z-index: 999;
                     min-width: 90px;
                     color: white;
                     font-size: .4em;
                     background: black;

                     font-weight: bold;

                     display: block;
                     white-space: nowrap;
                     border-radius:10%; 
                     transform: scale(0);
                     transition:transform ease-out 150ms,
                     bottom ease-out 150ms;
                }

                .print::after{
                    content: 'Print';
                    position: absolute;
                     bottom: 10px;
                     padding: 1em 3em;
                     right: 20px;
                     z-index: 999;
                     min-width: 40px;
                     color: white;
                     font-size: .6em;
                     background: black;
                     border-radius:10%; 
                     font-weight: bold;
                     display: block;
                     white-space: nowrap;
                     transform: scale(0);
                     transition:transform ease-out 150ms,
                     bottom ease-out 150ms;

                }

                .print:hover::after, .download:hover::after {
                   transform: scale(1);
                   bottom: 100%;
                 }

                .setname{
                    font-family: 'Maven Pro','Helvetica Neue',HelveticaNeue,Helvetica,Arial,sans-serif;
                    font-size: 20px;
                    font-weight:bold
                }


                .setpadding{
                    padding-left:0px;
                    padding-right:0px;  
                }

                .setmargin{

                    margin: 0px;
                }

                .adjustmargin{
                    margin-top: 15px;
                    margin-bottom:15px;
                }

                .adjustpadding{
                    padding: 15px;
                    /* padding-left: 35px; */
                }

                i{
                    padding-left: 4px;
                    padding-right: 4px;
                }

               @media screen and (max-width: 644px) {
                .options{

                    display: none;

                }

                .setsidebar{
                    display: none;
                }
                
}
                        </style>
