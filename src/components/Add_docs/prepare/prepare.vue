<template>
        <div v-if="fileavalible" class="row setback cross"  style="position:relative;" >
            <div class="col-12 set">
                <div class="row">
                
                <div class="col-1" style=" padding-right: 0px;">
                <img src="../../../assets/icons/image.svg" alt="" srcset="">
                </div>

                <div class="col-11" style="padding-left: 0px; padding-right: 0px;">
                    <div class="row setmargin">

                            <!-- //uploading file name  -->
                        <div class="col-12" style="padding-left:0px">
                            <small class="font-weight-bold">
                            
                                {{filestatus[0]}}

                            </small>
                        </div>

                            
                        <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12 set" >
                                <!-- 1 page -->
                                <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="{width: progress +'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progress+'%'}}</div>
                                </div>
                        </div>

                    <!-- drop down -->
                    <div class="col-lg-1 col-md-1" style="padding-right:45px">
                    <i class="fas fa-ellipsis-v circle float-sm-right foldericon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div class="btn-group">                            
                                            <div class="dropdown-menu" style="left:-145px">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <a class="dropdown-item date padding" data-toggle="modal" data-target="#myModal"  href="#">Rename</a>
                                                        <a class="dropdown-item date padding" data-toggle="modal" data-target="#viewdocument"  href="#">View Document</a>
                                                        <a class="dropdown-item date padding" data-toggle="modal" data-target="#deletedocument" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                    </div>
                    </div>

                    </div>
                </div>



                </div>
            </div>
                
            <p v-show="false">{{progressbar}}</p>  



            <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog" style="max-width:800px">

        <!--Rename folder-->
        <div class="modal-content">
            
        <div class="modal-header">
            <h5> Rename </h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <form @submit.prevent="">
            
            <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
            <label for="foldername">Name</label>
            <input type="text" class="form-control" v-model.lazy="filename" id="foldername" aria-describedby="emailHelp" >
            </div>

            <div class="modal-footer">
            <button type="button" @click="Rename" class="btn btn-primary" data-dismiss="modal">Rename</button>
            <button type="button" class="btn" id="cancel" data-dismiss="modal">Cancel</button>
            </div>
        </form>
        
        </div>


        
        

    </div>
    </div> 

        <!-- preview file -->
        <div id="viewdocument" class="modal fade" role="dialog">
        <div class="modal-dialog">
        <div class="modal-content">
            
        <div class="modal-header">
            <h5> {{filename + "filename"}} </h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        
            <img  :src="imagesource" alt="">
        
        </div>
        </div>
        </div> 

        <!-- delete document -->
          <div id="deletedocument" class="modal fade" role="dialog">
        <div class="modal-dialog">
        <div class="modal-content">
            
        <div class="modal-header">
            <h6> Delete Document</h6>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
            <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
            <p>Are you sure you want to delete document</p>
            </div>

            <div class="modal-footer">
            <button type="button" @click="Delete" class="btn btn-primary" data-dismiss="modal">Delete</button>
            <button type="button" class="btn" id="cancel" data-dismiss="modal">Cancel</button>
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
            progress:0,
            filestatus:['Finishing....'],
    
           
           

        }
    },

    computed:{

        fileavalible:function(){
            return this.$store.getters.getavalible
        },

        imagesource:function(){
            return this.$store.getters.getfilesrc;
        },

        filename:function(){
            return localStorage.getItem('filename');
        },

        

        progressbar:function(){
            setInterval(()=>{             
                if(this.progress <= 100){
                    var random =Math.floor(Math.random() * (+10 - +5)) + 9;
                    this.progress +=random;
                    this.progress
                    // to make progress bar still at 100
                    if(this.progress > 100){
                    this.progress = 100
                    // console.log(this.filestatus[0])
                    //updating the file name   
                    this.filestatus[0] = this.filename
                    // console.log("after"+this.filestatus[0])
                    this.$store.dispatch('act_status',this.filestatus[0])
                    return this.progress
                    }
                    else{
                        return this.progress
                    }
                }
            },1000)
        },

        
        
    },
    methods:{
        
        Rename(){
            localStorage.setItem('filename',this.filename)
            this.$store.dispatch('act_filename',this.filename)
            // console.log(this.$store.getters.filename)
            console.log(this.filename)


        },

        ViewDocument(){
            this.showpreview = true;
        },

        Delete(){
             this.$store.dispatch('act_avalible');
            
        }

    }
    }
    </script>

    <style scoped>

            *{
                /* border: 1px solid black; */
            }

            .setback{
                background-color: white;
                border-radius: 2%;
                height: 70px;
                padding: 1%;
                /* margin-right: -15px; */
                margin-left: 2px;
            }

            .set{
                padding-right: 0px;
                padding-left: 0px; 
            }

            .circle{
            color: #868686;
                }

            .foldericon:hover{
                color: #2463d1;
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

            .padding{
                padding: .25rem 1.5rem;
            }

            .progress{
                height: 0.75rem;
            }

            .setmargin{
                margin-right: 0px;
                margin-left: 0px;
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
                /* height: 20rem; */
                /* width: 20rem; */
                /* bottom: 10px; */
                right: -35px;
                z-index: 999;
                font-weight: bold;
                /* background: black; */
                /* padding: 0.25%; */
                display: block;
                /* white-space: nowrap; */
                /* transform: scale(1); */
                /* transition:transform ease-out 150ms, */
                /* bottom ease-out 1500ms; */
            }

            .cross:hover::after{
                /* transform: scale(1); */
                /* bottom: 100%; */
            }

            #cancel:hover{
                color: #2463d1;
            }


        @media only screen and (max-width: 600px)  {
                .modal-dialog {
                max-width: 800px;
                margin: 1.75rem auto;
                }
        }
            
            

    </style>