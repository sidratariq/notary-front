      <template>
  <div class="outerdiv" onselectstart="return false">
    <div class="maindiv">
      <div class="sig-panel first">
        <span class="snap" @click="clear1(okay=1)">clear</span>
        <VueSignaturePad
          width="450px"
          height="230px"
          style="background-color:white"
          ref="signaturePad1"
        />

        <hr>
      </div>

      <div class="sig-panel second">
        <span class="snap1" @click="clear1(okay=undefined)">clear</span>
        <VueSignaturePad width="274px" height="230px" style="background-color:white" ref="pad2"/>

        <hr>
      </div>
    </div>

    <div class="row" style="background-color:#ffffff">
      <div class="col-md-12 col-lg-12">
        <small class="text-muted">Accepted File Formats: GIF, JPG, PNG, BMP. Max file size 200KB.</small>

        <div>
          <small
            class="text-muted"
            style="margin:5px;"
          >By clicking Create, I agree that the signature and initials will be the electronic representation of my signature and initials for all purposes when I (or my agent) use them on envelopes, including legally binding contracts - just the same as a pen-and-paper signature or initial.</small>
        </div>

        <!-- create and cancel signature -->
        <div class="modal-footer" style="padding-top:9px; padding-bottom:9px">
          <button
            type="button"
            :disabled="false"
            class="btn btn-sm btn-outline-info text-right"
            @click="save"
          >Create</button>
          <button
            type="button"
            class="btn btn-sm btn-link btn-black text-right"
            data-dismiss="modal"
            @click="clicked()"
          >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

      <script>
import usersignature from "./usersignature.vue";
import userinitial from "./signatureinitial.vue";
import axios from "axios";

export default {
  data: function() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)"
      }
    };
  },
  components: {
    usersignature,
    userinitial
  },
  methods: {
    clicked() {
      this.$store.dispatch("changeflag");
      localStorage.setItem("Avalible", false);
    },
    save() {
      let token = this.token;
      let store = this.$store;
      const formData = new FormData();

      let b = this.$refs.signaturePad1.saveSignature();
      let a = this.$refs.pad2.saveSignature();

      if (b.isEmpty == false && a.isEmpty == false) {
        formData.append("userSign", a.data);
        formData.append("userInitail", b.data);

        console.log(a.data);
        console.log(b.data);

        axios
          .post("http://localhost:8000/uploadSign", formData, {
            headers: {
              Token: token
            }
          })
          .then(res => {
            if (res.status == 200) {
              console.log(a.data);
              console.log(b.data);
              console.log(res.data.Signpath);
              store.dispatch("changeinitial", res.data.InitialsPath);
              store.dispatch("changeinitial", res.data.changesignature);
              this.clicked();
            } else {
              console.log("go to hell");
            }
          });
      }
    },

    clear1(value) {
      var _this = this;
      if (value != undefined) {
        _this.$refs.signaturePad1.clearSignature();
      } else {
        _this.$refs.pad2.clearSignature();
      }
    }
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    }
  },

  updated() {
    console.log("runrun");
    // Fired every second, should always be true
    this.save();
  }
};
</script>

      <style scoped>
* {
  /* border: 1px solid black; */
}

#mysignature {
  height: 200px;
}

#myinitial {
  height: 200px;
  width: 336px;
}
.outerdiv {
  padding: 2% 2% 0px 2%;
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

.maindiv {
  display: flex;
  width: 100%;
  background: #eaeaea;
  margin: 6px;
}

.first {
  /* width:60%; */
  margin-right: 3%;
  position: relative;
}

.second {
  /* width: 38%; */
  position: relative;
}

.snap {
  position: absolute;
  top: 1%;
  right: 1%;
  color: #005cb9;
  z-index: 999;
}

.snap1:hover,
.snap:hover {
  text-decoration: underline;
}

.snap1 {
  position: absolute;
  right: 4%;
  color: #005cb9;
  z-index: 999;
}
</style>
