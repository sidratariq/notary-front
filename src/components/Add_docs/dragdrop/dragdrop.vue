  <template>
  <div class="media-apply" v-if="!fileavalible || routecheck"  :class="{setheight:'idk'}">
    <!-- v-if="!fileavalible" -->
    <form enctype="multipart/form-data">
      <input
        type="file"
        class="drag_input"
        id="file-select"
        @change="showImage($event)"
        accept="image/*"
      >
      
      <label for="file-select" class="img-container dotted-class">
        <img
          style="max-width:80px"
          src="https://docucdn-a.akamaihd.net/olive/18.21.0/img/illustrations/file-add.svg"
          alt="Add File"
        >
        <span class="spanset">Drag documents here to get started</span>
        <button
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button"
          id="start-now" @click="filesChange()"
          
        >{{content}}</button>
      </label>
    </form>

   
  </div>
</template>

       <script>
            import {mapActions} from 'vuex'


            export default {

                name: 'app',
                data() {
                return {
                    file:'',
                    idk:true, 
                    btnvalue:'',

                }
                },

                computed: {
                    content:function(){
                        
                      if(this.$route.path == '/dashboard'){
                          this.btnvalue = 'Start'
                          this.idk = false                    
                          return this.btnvalue
                      }

                        if(this.$route.path == '/adddocs'){
                          this.btnvalue = 'UPload'
                          this.idk = true                 
                          return this.btnvalue
                        }
                    },
                    fileavalible:function(){
                        return this.$store.getters.getavalible
                    },
                    routecheck:function(){
                        if(this.$route.path =='/dashboard'){
                            return true
                        }
                        else {
                            return false
                        }
                    },

                     token() {
                        return this.$store.getters.getToken;
                    }
                },

                methods: {


                        showImage(event){ 
                            let input = event.target;
                            let store = this.$store;

                            if(event.target.files.length > 0){
                                // console.log(event.target.files[0].name) 

                                if(this.$router.path == '/dashboard'){
                                    this.$router.push('/adddocs')
                                }
                                let reader = new FileReader();
                                reader.onload = function(){
                                
                                var dataURL = reader.result;
                                store.dispatch('act_filename',event.target.files[0].name)
                                store.dispatch('act_filesrc',dataURL)
                                store.dispatch('act_selectedcontract',event.target.files[0])
                                store.dispatch('act_avalible',true)        
                                }
                                reader.readAsDataURL(input.files[0])

                               
                                this.$router.push('/adddocs')

                            }
                            }
                    ,

                    filesChange(){
                                this.$router.push('/adddocs')
                    },
                    setstore(){

                    }

                

                
            }}

            </script>

        <style scoped>

.panel-fileDrop {
  border: 1px solid #d9d9d9;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 16px;
  position: absolute;
  top: -10px;
  width: 100%;
  height: 100%;
}
.drag_input {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.img-container {
  display: flex;
  flex-direction: column;
  padding: 6%;
}
.img-container button {
  width: 140px;
}
.img-container img {
  width: 100px;
  height: 100px;
  box-shadow: #ffce00;
  margin: 0.75% 43%;
}
.img-container span {
  width: 300px;
  margin: 0.5% 35%;
  font-size: 18px;
}
.override {
  padding: 0%;
}
.img-container button {
  margin: 0.75% 40%;
}
.dotted-class {
  border: 2px dashed #ccc;
  height: 100%;
}
.dotted-class:hover {
  border-color: #4186ec;
  cursor: pointer;
}
.dotted-class:hover button {
  color: #333;
}
.OliveReact-Button--sizeLarge {
  min-height: 34px;
  padding: 7px 18px;
}
.OliveReact-Button--main {
  background-color: #ffce00;
  border-color: #ffce00;
  color: #333;
}
.OliveReact-Button {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #ccc;
  border-top-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-radius: 2px;
  color: #333;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: Maven Pro, Helvetica Neue, HelveticaNeue, Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 700;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: 0.66px;
  line-height: 1;
  margin: 0;
  min-height: 28px;
  overflow: visible;
  padding: 4px 14px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
}
/* new one */
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}
.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
@media only screen and (max-width: 520px) {

}
</style>