<template>
        <div class="setborder"  >
                 <div class="row sethidden"  v-if="!flag">
                <div class="col-lg-7 ">
                    <span class="setinbox set">{{name}}</span>
                </div>
                <div class="col-lg-5 searchbar">
                 <search :searchvalue='searchvalue' ></search>
                </div> 
                </div>
                    
                 <div class=" sethidden topset" style="padding-top:18px" v-if="flag">
                    <div class="row" >    
                    <div class="col-2 topset"> 
                     <input type="checkbox" id="checkbox" v-model="checked" @change="emitchange()" class="checkbox">
                     <span class="">{{nooffilesselected}} Selected</span>
                     
                    </div> 
                    <div class="col-1 topset" style="padding-top:0px; padding-bottom:7px">
                         <button class="btn  btn-sm apply " type="button" >
                           MOVE
                        </button>
                    </div>

                    <div class="col-1 topset" style="padding-top:0px; padding-bottom:7px">
                         <button class="btn  btn-sm apply " type="button" >
                           Continue
                        </button>
                    </div>

                     <div class="col-1 topset" style="padding-top:0px; padding-bottom:7px">
                         <button class="btn  btn-sm apply " type="button" >
                           Resend
                        </button>
                    </div>
                    

                     <div class="col-1">
                        <button class="btn  btn-sm apply " type="button" >
                        Restore
                        </button>
                    </div>


                     <div class="btn-group" style="padding-right: 0px;padding-left: 8px;" >
                       <button class="btn  btn-sm dropdown-toggle apply" style="height:30px;padding-left: 8px; margin-top:0px" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         MORE
                       </button>
                       <div class="dropdown-menu">
                            <a class="dropdown-item date padding" href="#">Export As CSV</a>
                            <a class="dropdown-item date padding" href="#">Delete</a>
                       </div>
                     </div>                                                                  
                     </div>         
                    </div>      
        </div>
     
</template>

<script>
        import search from '../search/search.vue'

export default {
    data(){
        return{
            // flag:this.checked,
            // filesselected:this.nooffilesselected
            // id:"Inbox"

        }
    },
    props:[
        'checked','nooffilesselected'
    ],

    components:{
                search
            },
    
    methods:{
        emitchange(){
            this.$emit('changecheck',this.flag)
        }
    },

    computed:{

        flag:function(){
            return this.checked
        },

        name:function(){
            if( this.$route.query.folder != undefined && this.$route.query.view == undefined){
                return this.$route.query.folder
            }
            else{
                if(this.$route.query.folder == undefined && this.$route.query.view == undefined){
                    return 'Inbox'
                }
                return this.$route.query.view
            }
            
            // }
        },
        
        searchvalue:function(){
            if(this.$route.query.view == undefined){
                return 'Search Inbox and folders'
            }

             if(this.$route.query.view == 'Delete'){
                return 'Search Delete'
            }
            
            if(this.$route.query.view == 'Draft'){
                return 'Search Draft'
            }

             if(this.$route.query.view == 'Sent'){
                return 'Search Sent and folders'
            }

            if(this.$route.query.view == 'Actions Required' || this.$route.query.view == 'Waiting for Others' || this.$route.query.view == 'Expiring Soon' || this.$route.query.view == 'Completed'  ){
                return 'Seach Quick Views'
            }

        }
    }
}
</script>

<style scoped>  

        *{
            /* background-color: green; */
            /* border: 1px solid black; */
        }
                
        .setpadding{
            padding-left: 1%;
        }

        .setborder{
        border-bottom: 1px solid rgba(0,0,0,.1);
        }

           .sethidden{
              max-height: 64px;
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

        .apply{
              color: #000000;
              background-color: #f9f9f9;
              border-color: #ccc;
        }

         .padding{
                padding: .25rem 1.5rem;
            }


         .setinbox{
            font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 20px;
            font-weight: 600;
            margin: 0%;
            bottom:4px;
            position:absolute;
            bottom: 10px;
            left: 34px;
        }


            .makescroll{
                /* overflow-y: auto; */

            }

            .apply{
                color: #000000;
                background-color: #f9f9f9;
                border-color: #ccc;

            }

            #checkbox{
                margin-right: 9px; 
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

                .apply{
                color: #000000;
                background-color: #f9f9f9;
                border-color: #ccc;
            }       


        
</style>
