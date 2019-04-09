      <template>
  <div class="outerdiv">
    <div class="maindiv">
      <div class="sig-panel first">
        <div class="box">
          <input
            type="file"
            name="signature"
            id="file-33"
            class="inputfile inputfile-3"
            accept="image/*"
            @change="run($event)"
            data-multiple-caption="{count} files selected"
            multiple>

          <label for="file-33">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
              <path
                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
              ></path>
            </svg>
            <span class="btn btn-secondary setblock">Upload signature&hellip;</span>
          </label>
          <signature :value="user_signature" v-show="showsign"></signature>
        </div>
      </div>

      <div class="sig-panel second">
        <div class="box">
          <input
            type="file"
            name="initial"
            id="file-3"
            @change="run($event)"
            accept="image/*"
            class="inputfile inputfile-3"
            data-multiple-caption="{count} files selected"
            multiple
          >

          <label for="file-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
              <path
                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
              ></path>
            </svg>
            <span class="btn btn-secondary setblock">Upload Initials&hellip;</span>
            <!-- <signature></signature> -->
          </label>
          <signature :value="user_initial" v-show="showinitial"></signature>
        </div>
      </div>
    </div>
    <small class="text-muted">Accepted File Formats: GIF, JPG, PNG, BMP. Max file size 200KB.</small>
  </div>
</template>

      <script>
import signature from "./small_signature.vue";

export default {
  data() {
    return {
      initialFlag: false,
      signatureFlag: false
    };
  },
  components: {
    signature
  },

  methods: {
    userin() {
      return this.initialFlag;
    },
    usersign() {
      return this.signatureFlag;
    },

    run(event) {
      let input = event.target;
      if (event.target.files.length > 0) {
        

        let reader = new FileReader();
        console.log(this.initialFlag + "here 1");
        // console.log(this.signatureFlag + "here S1");

        reader.readAsDataURL(input.files[0]);

        reader.onload = () => {
          var dataURL = reader.result;

          // check whether user has uploaded signature
          if (event.target.name == "signature") {
            console.log(this.signatureFlag + "here 2");
            console.log("In dataurl signature");
            this.user_signature = dataURL;
            console.log("Signature log"+dataURL)
            this.signatureFlag = true;
            this.$emit("avaliblesign",this.signatureFlag)
            return (this.signatureFlag = true);
          }

          // check whether user has uploaded initial
          else {
            // console.log(this.initialFlag + "here 2");
            this.user_initial = dataURL;
            this.initialFlag = true;
            
            this.$emit("avalibleinitial",this.initialFlag)
            // console.log(this.initialFlag + "here 2");


          }

          console.log(this.signatureFlag + "here 3");
          console.log(this.initialFlag + "here 3");
          console.log(dataURL)

        };
      }
    }
  },

  computed: {
    showsign() {
      return this.signatureFlag;
    },
    showinitial() {
      return this.initialFlag;

    },

    user_initial:{
      set(value){
        localStorage.setItem('user_initial',value)
      },
      get(){
      return localStorage.getItem('user_initial')

      }
    },

    user_signature:{
      set(value){
        localStorage.setItem('user_signature',value)
      },

      get(){
      return localStorage.getItem('user_signature')
      }
    },
   
  },

  created() {
    localStorage.setItem("Avalible", false);
  }
};
</script>

      <style scoped>
.outerdiv {
  padding: 2%;
  background-color: #eaeaea;
}

.setblock {
  display: block;
  font-size: 12px;
  border: rgb(204, 204, 204);
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

.maindiv {
  display: flex;
  width: 100%;
  background: #eaeaea;
}

.first {
  width: 60%;
  margin-right: 3%;
}

.second {
  width: 47%;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
}

.no-js .inputfile + label {
  display: none;
}

.inputfile:focus + label,
.inputfile.has-focus + label {
  outline: 1px dotted #000;
  font-weight: bolder;
  outline: -webkit-focus-ring-color auto 5px;
}

.inputfile + label svg {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

/* style 3 */

.inputfile-3 + label {
  color: rgb(51, 51, 51);
}

.inputfile-3:focus + label,
.inputfile-3.has-focus + label,
.inputfile-3 + label:hover {
  color: rgb(51, 51, 51);
}

.box {
  margin: 65px;
  text-align: center;
  text-transform: uppercase;
}

.col-1-3 {
  width: 33%;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>
