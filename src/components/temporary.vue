<template>
  <div>
    <Tomato ref="Tomato" @click.native="print('Tomato')"/>
    <Orange ref="Orange" @click.native="print('Orange')"/>
    <DodgeBlue ref="DodgeBlue" @click.native="print('DodgeBlue')"/>
    <!-- <p ref="okay"> dkadkja</p> -->
    <hr>
    <img :src="output">

    <div class="sign-container">
      <div class="signby">Signed By</div>

      <span ref="okay" class="font font-style" :style="{'font-family': fontstyles[0]}">{{fullname}}</span>

      <div class="bottom">{{hash}}</div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import Tomato from "@/components/Tomato";
import Orange from "@/components/Orange";
import DodgeBlue from "@/components/DodgerBlue";

export default {
  components: {
    Tomato,
    Orange,
    DodgeBlue
  },
  data: () => ({
    output: "",
    a: 0,
    b: 1,
    color: "",
    gender: "",
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
    display: 1,
    hash: "AE9DB71A4A854B1...",
    fullname: "sidra"
  }),
  methods: {
    async print(name) {
      console.log(name);

      let e21 = this.$refs["okay"];
      let el1 = this.$refs["Tomato"].$el;

      this.output = (await html2canvas(e21)).toDataURL();
      console.log(this.output + "value");
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
