      <template>
        <div class="outerdiv" onselectstart="return false">
                <div class="maindiv">
                  
                  
                  <div class="sig-panel first">
                      <span class="snap" @click="clear1(okay=1)">clear</span>
                       <VueSignaturePad width="509px"  height="230px" style="background-color:white" ref="signaturePad1" />

                      <hr>

                      
                  </div>


                  <div class="sig-panel second ">
                       <span class="snap1" @click="clear1(okay=undefined)">clear</span>
                          <VueSignaturePad width="322px"  height="230px" style="background-color:white" ref="pad2"  />
                      
                      <hr>
                  </div>

                


          </div>
          <small class="text-muted">
            Accepted File Formats: GIF, JPG, PNG, BMP. Max file size 200KB.

                  </small>


        </div>
          

      </template>

      <script>
        import usersignature from './usersignature.vue'
        import userinitial from './signatureinitial.vue'


      export default {
          data:function(){
            return{
              option:{
                  penColor:"rgb(0, 0, 0)",
                  backgroundColor:"rgb(255,255,255)"
              }
            }
          },
          components:{
            usersignature,
            userinitial
          },
          methods:{
             save() {
                let b=  this.$refs.signaturePad1.saveSignature();
                let a = this.$refs.pad2.saveSignature();
        
                if(b.isEmpty ==false && a.isEmpty ==false){
                    console.log(a.data)
                    console.log(b.data)
                    localStorage.setItem("initial",a.data)
                    localStorage.setItem('signature',b.data)
                }
      },  

        clear1(value){
            var _this = this;
            console.log(value)
            if(value != undefined){
            _this.$refs.signaturePad1.clearSignature();
            console.log("i have cleared one")
            }
            else{
            _this.$refs.pad2.clearSignature();

            }
        }
        
        

        
         

          }
      }
      </script>

      <style scoped>

        #mysignature{
            height: 234px;
        }

        #myinitial{
            height: 234px;
            width: 336px;

            
        }
      .outerdiv{
        padding: 2%;
        background-color: #eaeaea;

      }

      

      .sig-panel {
          border: 1px dashed #ccc;
          cursor: default;
          height: 234px;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }

      .maindiv{
        display:flex;
        width:100%; 
        background: #eaeaea; 
      }

      .first{
        width:60%;
        margin-right:3%;
        position: relative;

      }

      .second{
        width: 38%;
        position: relative;
      }

      .snap{
        position: absolute;
        top:1%;
        right:1%;
        color: #005cb9;
            z-index: 999;
      }

      .snap1:hover, .snap:hover{
        text-decoration: underline;
      }

      .snap1{
        position: absolute;
        right: 4%;
        color: #005cb9;
        z-index: 999;

      }
      </style>
