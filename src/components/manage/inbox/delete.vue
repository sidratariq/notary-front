            <template>

                    <div class="container-fluid mx-0">

                            <div>
                                <head_head :checked="checked" @changecheck="checked = $event" :nooffilesselected="nooffilesselected">Deleted</head_head>
                            </div>

                            <content_bar :fileArray="fileArray" :defautSelects="defaultSelects" @Nooffile="nooffilesselected = $event" :getselected="getselected"></content_bar>                    


                                <!-- im from parent and i am parent {{nooffilesselected}} -->
                    </div>

            </template>

            <script>
            import head_head from './inbox_header.vue'
            import content_bar from './content.vue'

            export default {
                data(){
                    
                    return{
                   
                    nooffilesselected:0,
                    defaultSelects:[],
                    getselected: [],

                    // file information object will come here
                      fileArray: [ 
                        {id: 'automotive', name: 'Automotive', class: 'industry', default: false},
                        {id: 'beauty', name: 'Beauty', class: 'industry', default: true},
                        {id: 'branding', name: 'Branding', class: 'industry', default: true},
                        {id: 'btob', name: 'B to B', class: 'industry', default: false}
                    ]
                        }

                },
                
                methods:{
                   
                   
                
                },
                computed:{
                    checked:function(){
                        if(this.nooffilesselected > 0){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                       } ,
             
                components:{
                    head_head,
                    content_bar
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
                /* overflow-y: auto; */

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
