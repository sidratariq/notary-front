<template>
  <div>
    <div class="setheight">
      <!-- to show output in the screen -->

      <table class="stylesign">
        <!-- dynamically creating rows with dynamic refs to take image of selected signature  -->
        <tr v-for="(key,index) in 10" :key="index" class="apply">
          <td style="width:10%">
            <span class="heightset displayset">
              <input
                type="radio"
                class="custom-control-input set-visibility"
                id="defaultUnchecked"
                name="defaultExampleRadios"
                @change="run(key)"
                :value="key"
                v-model="selected"
              >
            </span>
          </td>
          <td>
            <div class="sign-container">
              <div class="signby">Signed By</div>

              <span
                :ref="key+'element'+key"
                class="font font-style"
                :style="{'font-family': fontstyles[index]}"
              >{{fullname}}</span>

              <div class="bottom">{{hash}}</div>
            </div>
          </td>

          <!-- Initials -->
          <td style="width:45%; ">
            <div class="sign-container">
              <div class="signby">DS</div>

              <span
                :ref="key+'element'+key+1"
                class="font"
                :style="{'font-family': fontstyles[index]}"
              >{{initial}}</span>

              <!-- <div class="bottom"></div> -->
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div>
      <small class="text-muted" style="margin:5px;">
        <img :src="outputsignature">
        <img :src="outputinitial">
        By clicking Create, I agree that the signature and initials will be the electronic representation of my signature and initials for all purposes when I (or my agent) use them on envelopes, including legally binding contracts - just the same as a pen-and-paper signature or initial.
      </small>
    </div>

    <div class="modal-footer" style="padding-top:9px; padding-bottom:9px">
      <button
        type="button"
        :disabled="outputinitial=='' && outputsignature == ''"
        class="btn btn-sm btn-outline-info text-right"
        @click="save"
      >Create</button>
      <button
        type="button"
        class="btn btn-sm btn-link btn-black text-right"
        data-dismiss="modal"
        @click="clicked"
      >Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import html2canvas from "html2canvas";

export default {
  props: {
    fullname: {
      type: String
    },
    initial: {
      type: String
    }
  },
  data() {
    return {
      display: 1,
      hash: "AE9DB71A4A854B1...",
      fontstyles: [
        "'Ruthie', cursive",

        "'Great Vibes', cursive",
        "'Cookie', cursive",
        "'Sacramento', cursive",
        "'Charmonman', cursive",

        "'Alex Brush', cursive",
        "'Mr Dafoe', cursive",
        "'Condiment', cursive",
        "'Pacifico', cursive",
        "'Homemade Apple', cursive"
      ],
      selected: "",
      outputsignature: "",
      outputinitial: ""
    };
  },
  methods: {
    run(args) {
      // let increase = args+1
      let signature = args + "element" + args;
      let initial = args + "element" + args + 1;
      console.log(signature + "signature");
      console.log(initial + "initial");

      this.takesignatureimage(signature);

      //  outputinitial
      this.takeinitialimage(initial);
    },

    async takesignatureimage(name) {
      console.log(name);
      console.log(this.$refs);
      let el = this.$refs[name][0];
      this.outputsignature = (await html2canvas(el)).toDataURL();
      setInterval(() => {
        this.$emit("signature", this.outputsignature, 3000);
      });
    },
    async takeinitialimage(name) {
      console.log(name);
      console.log(this.$refs);
      let el = this.$refs[name][0];
      this.outputinitial = (await html2canvas(el)).toDataURL();
      setInterval(() => {
        this.$emit("initial", this.outputinitial, 3000);
      });
    },

    clicked() {
      this.$store.dispatch("changeflag");
      localStorage.setItem("Avalible", false);
    },
    save() {
      let token = this.token;
      let store = this.$store;

      axios
        .post(
          "http://localhost:8000/signbase64",
          {
            SignBase64: this.outputsignature,
            InitialsBase64: this.outputinitial
          },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          console.log(res);

          if (res.status == 200) {
            console.log(res);
            // console.log(res.data.Signpath);
            console.log(res.data.InitialsPath);
            console.log(res.data.Signpath);

            store.dispatch("changeinitial", res.data.InitialsPath);
            store.dispatch("changesignature", res.data.Signpath);

            // this.clicked();
          } else {
            console.log("go to hell");
          }
        });
    }
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Alex+Brush|Charmonman|Condiment|Cookie|Great+Vibes|Homemade+Apple|Mr+Dafoe|Pacifico|Ruthie|Sacramento");
.stylesign {
  background: #eaeaea;
  border: 0;
  border-collapse: separate;
  border-spacing: 0 1px;
  color: #1e1e1e;
  width: 100%;
  overflow-y: auto;
}

.setheight {
  height: 220px;
  overflow: scroll;
  overflow-x: hidden;
}

tr {
  margin: 2%;
}

.heightset {
  height: 18px;
}

.displayset {
  display: block;
  min-height: 18px;
  min-width: 18px;
  position: relative;
}

.displayset input {
  margin-left: 50px;
}

.sign-container {
  border-left: 2px solid #005cb9;
  border-radius: 8px;
  display: block;
  height: 55px;
  margin: 4px 0;
  overflow: visible;
  position: relative;
}

.sign-container::before {
  border-top-left-radius: 8px;
  border-top-width: 2px;
  top: -2px;
}

.set-visibility {
  z-index: unset;
  opacity: 1;
  color: #005cb9;
  height: 15px;
  width: 23px;
}

.signby {
  font-weight: 600;
  top: -4px;
  font-size: 8px;
  left: 21px;
  position: absolute;
}

.bottom {
  font-size: 8px;
  font-weight: 600;

  left: 21px;
  position: absolute;
  bottom: 0px;
}

.font {
  font-size: 25px;
  position: absolute;
  left: 18px;
  top: 8px;
  /* font-family: 'Herr Von Muellerhoff', cursive;
              font-family: 'Qwigley', cursive; */
  /* // font-family: 'Allura', cursive; */
  font-family: "Mrs Saint Delafield", cursive;
}

/* // global css */

tr:hover {
  opacity: 0.75;
  background-color: #bbc2c2;
}
</style>
