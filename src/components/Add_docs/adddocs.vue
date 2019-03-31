<template>
        
            <div class="main" >
                <div class="container">
                <h2 class="setpadding">Add Documents</h2>

                    <uploadfile v-if="fileavalible"></uploadfile>

                    <dragdrop v-if="!fileavalible" ></dragdrop>

                    <div class="row set">
                            <div class="col-10" style="padding-left:-15px, padding-right:-15px" ></div>
                            
                            <div class="col-2 " style="padding-left:-15px, padding-right:-15px">
                            <button class="btn-main btn-large btn btn-primary btn-sm float-right" @click="$router.push('/addrecipient')">NEXT</button>
                            </div>
                    </div>

                    </div>

                


                </div>

        </template>

        <script>

        import {mapActions} from 'vuex'

        
        import dragdrop from '../dragdrop/dragdrop.vue'
        import uploadfile from './prepare/prepare.vue'

        export default {

        data(){
            return{
                file:{
                    name:'',
                    filesrc:''
                },
                // fileavalible:this.$store.getters.getavalible,
                noofdocs:[
                
                ]
            }
        },

        components:{
            dragdrop,
            uploadfile
        },
        props:{
            
        },
        methods:{

        
        },
        computed:{

            fileavalible:function(){
                return this.$store.getters.getavalible;
            },
            
            setimage:function(){
                
                if(localStorage.getItem('imgsource') != null){
                    return true
                }

                else{
                    return false
                }
            }
        }
        }
        </script>

        <style scoped>
        *{
                    background-color: rgb(244, 244, 244);

        }

        .main{
            height: 100vh;
        }

        .set{
            margin-right: 0px; 
            margin-left: 0px; 
        }

        .container{

        padding-left: 0px;
        padding-right: 0px;

        }


        button{
        border-radius: 0 2px 2px 0;
        border: none;
        margin:28px 20px 20px 20px;
        text-align: center;
        }

        .setpadding{
            padding-top: 15px;
            padding-bottom:15px;  
        }

        button:hover{
            cursor: pointer;
        }

        .btn-main{
            background-color: #ffce00;
            color: #1e1e1e;    
        }

        .btn-large{
            font-size: 13px;
            min-height: 34px;
            font-weight: bolder;
        }
        
        </style>