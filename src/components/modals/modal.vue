<template>
      <transition name="modal">
        <div class="modal">
          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <!-- heading of the content -->
            <div>
                <h3  style="margin-bottom:0px" class="modal_title">Create Your own signature</h3>
                <span class="btn-cross" @click="clicked()" >x</span>
            </div>
            <hr>

            <!-- form for initials and fullname -->
            <form @submit.prevent="onSubmit">
              <div class="row">
               <div class="col-lg-8 col-md-6">
               <div class="row">
               <!-- full name entry -->
               <div class="col-6">
                <div class="row">
                <label style="margin-top:2%;" for="fullname" class="col-4">Name</label>
                <input type="text"  class="form-control col-8"  v-model="fullname" placeholder="Full Name" id="fullname"> 
               
                 </div>

               </div>
                <!-- Initials entry -->
               <div class="col-6">   
               <div class="row">
               <label style="margin-top:2%;" for="initials" class="col-4">Initials</label>
               <input type="text" class="form-control col-8"  v-model="initials" placeholder="Initials" id="initials"> 
               </div>
                </div>
                </div>
                </div>
              </div>
            </form>
            <hr>

          <!-- nav bar for choose,draw and upload -->
          <nav>
              <ul class="nav">
                  <li class="nav-link" id="choose" exact ><a @click="display =1"> CHOOSE</a></li>
                  <li class="nav-link" id="draw" exact ><a @click="display=2">Draw</a></li>
                  <li class="nav-link" id="upload" exact ><a @click="display=3">Upload</a></li>
              </ul>
          </nav>


            <div>
              <!--upload signature via style choose option -->
              <stylemodal :fullname="fullname" :initial="initials" v-if="display ==1"></stylemodal>

              <!-- style choose via draw option  -->
              <drawmodal v-if="display == 2" class="overflow:scroll">draw</drawmodal>
              
              <!-- style choose via signature upload -->
              <uploadmodal @avaliblesign="uploadSignature = $event" @avalibleinitial="uplaodedInitial = $event" v-if="display == 3">upload</uploadmodal>

            </div>


                <small class="text-muted" style="margin:5px;">
                  By clicking Create, I agree that the signature and initials will be the electronic representation of my signature and initials for all purposes when I (or my agent) use them on envelopes, including legally binding contracts - just the same as a pen-and-paper signature or initial.
                </small>
              
              <!-- create and cancel signature -->
              <div class="modal-footer">
                  <button type="button" :disabled="uploadSignature==false && uplaodedInitial == false" class="btn btn-outline-info" @click="clicked()" > Create </button>
                  <button type="button" class="btn btn-link btn-black" data-dismiss="modal"  @click="clicked()" >Cancel</button>
              </div>


            </div>
          </div>
        </div>
        </transition> 
        </template>

        <script>

        import stylemodal from './stylemodal.vue'
        import uploadmodal from './uplaodmodal.vue'
        import drawmodal from './drawmodal.vue'

        export default {
          data(){
            return {
              display:1,
              fullname: localStorage.getItem("user_name"),
              hash:'AE9DB71A4A854B1...',
              initials:'',
              signdisable:false,
              initialdisable:false
            }
          },
            
            props:['showModal'],
            methods:{
                
            clicked(){
                this.$store.dispatch('changeflag') 
                localStorage.setItem('Avalible',false)   
                console.log(localStorage.getItem('Avalible'))              
            },
            },
            components:{
              stylemodal,
              uploadmodal,
              drawmodal
            },
            computed:{
              
              uploadSignature:{
                  set(value){
                    this.signdisable=value
                  },
                  get(){
                    return this.signdisable
                  }
              },

              uplaodedInitial:{
                set(value){
                  this.initialdisable=value
                },
                get(){
                  return this.initialdisable
                }
              }


            }
        }
        </script>

        <style scoped>
        @import url('https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff|Mrs+Saint+Delafield|Qwigley');
        @import url('https://fonts.googleapis.com/css?family=Allura');
       
        .modal{
          display: block;
          background: rgba(30, 30, 30, 0.5);
        }
         form{
          margin: 10px;
        }
        hr {
            border: 0;
            border-top: 1px solid rgba(0,0,0,.1);
            margin-top: 0%;
            margin-bottom:0%; 
        }

        .modal-content{
          width:900px; 
          opacity: 1;
          position:relative
        }

        .modal-header h3 {
          margin-top: 0;
          color: #42b983;
        }

        .set-margin{
            margin-right:5px;
        }

        .modal-body {
          margin: 20px 0;
        }

        .modal-default-button {
          float: right;
        }

        .modal-enter {
          opacity: 0;
        }
        .modal-leave-active {
          opacity: 0;
        }

        .nodisplay{
          display: none;
        }

        .modal-dialog{
          margin-left:17%; 
          margin-top:2%;
        }

        .modal_title{
            border-bottom: 1px solid #e9e9e9;
            overflow: hidden;
            padding: 20px 24px;
            position: relative;
        }
        input{
        border-radius: 2px; 
        }
        
        .first-input{
          padding-left:1%;
           width:40%; 
           float:left
        }

        .second-input{
          width:50%;
          float:right;
        }
        input:focus{
          border: blue;
        }
        
        .btn-cross{
          position:absolute;
          top:6px;
          right:6px;
          height:16px;
          width: 16px;
          cursor:pointer;
          color: #868686;
        }
        .btn-cross:hover{
          color: #005cb9;
        }
          nav{
            all: unset;
            height: 50px;
            border-top:1px solid silver;
            border-bottom:1px solid silver; 
              }
                .nav li a{
                  background: 0 0;
              border: 0;
              border-bottom: 3px solid transparent;
              border-radius: 0;
              color: #666;
              display: block;
              font-family: "Maven Pro","Helvetica Neue",HelveticaNeue,Helvetica,Arial,sans-serif;
              font-size: 14px;
              font-weight: 700;
              line-height: 1;
              padding: 0 0 16px 0;
              text-transform: uppercase;
                }
                                
              /*yee uraw full py ay gaa  */
              nav a{
                opacity: 1;
                position: relative;
              }
              nav ul{
                  display: flex;
                  margin-top: 4px;
              }
              .nav li{
                  margin-bottom: 0;
                  width: 81px;
              }
              .nav a::after{
                  content: '';
                  display: block; 
                  height: 2px;
                  background: white;
                  background-color: #005cb9;
                  text-decoration: none;
                  position: absolute;
                  bottom: -.75em;
                  left: 0;
                  right: 0;
                  transform: scale(0,1);
                  transform-origin: left;
                  transition: transform ease-in-out 250ms;      
              }
              .nav a:hover{
                  border-bottom-color: #2463d1;
                  transition: transform ease-in-out 250ms;      
                  color: #2463d1;
              }
              nav a:hover::after{
                  transform: scale(1,1);
              }
              .stylesign{
                background: #eaeaea;
                border: 0;
                border-collapse: separate;
                border-spacing: 0 1px;
                color: #1e1e1e;
                width: 100%;
                overflow-y: auto;
              }
              tr{
              margin: 2%;
              }
              .heightset{
                  height: 18px;
              }
              .displayset{
                    display: block;
                    min-height: 18px;
                    min-width: 18px;
                    position: relative;
              }
              /* .first-input label{
                
              } */
              .displayset input{
                margin-left: 50px;
              }
              .sign-container{
                    border-left: 2px solid #005cb9;
                    border-radius: 8px;
                    display: block;
                    height: 55px;
                    margin: 4px 0;
                    overflow: visible;
                    position: relative;
             }
              
              .sign-container::before{
                    border-top-left-radius: 8px;
                    border-top-width: 2px;
                    top: -2px;
              }
        .signby{
              font-weight: 700;
              top: -8px;
              font-size: 10px;
              left: 21px;
              position: absolute;
        
        }
        
        .bottom {
              font-size: 10px;
              font-weight: 700;
              left: 21px;
              position: absolute;
              bottom: 0px;
          }
        .font{
          font-size: 25px;
          position: absolute;
          left: 18px;
          top: 8px;
          /* font-family: 'Herr Von Muellerhoff', cursive;
          font-family: 'Qwigley', cursive; */
          /* // font-family: 'Allura', cursive; */
          font-family: 'Mrs Saint Delafield', cursive;
        }
      .modal-footer{
            justify-content: start;
            margin-left:5px;
             margin-right:5px;
      }
    /* // global css */
          
          tr:hover{
            opacity: 0.75;
            background-color: #BBC2C2;
          }
          table{
                height:550px;
          }
          .btn-black:hover{
            text-decoration: none;
            color: #2463d1;
          }
          .btn-black{
            color: black;
          }
        </style>