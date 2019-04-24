<template>
  <div class="container-fluid">
    <div class="row h-25">
      <div class="col-12 col-md-12" style="padding-left:0px">
        <div class="row">
          
          <div class="col-2">
            <div class="col-3"></div>
          </div>
        </div>
      </div>
    </div>

    

     <Tomato ref="Tomato" @click.native="print('Tomato')" value="i am from the parent">
      <img height="20px" width="20px" class="run" src="./easy.png">
    </Tomato>

    <hr>
    <img :src="output">
    


  </div>
</template>

<script>
import html2canvas from "html2canvas";
import Tomato from "./components/Tomato";

export default {
  components: {
    Tomato
  },
  data: () => ({
    output: ""
  }),
  methods: {
    async print(name) {
      let el = this.$refs[name].$el;
      this.output = (await html2canvas(el)).toDataURL();
    }
  },
  computed: {
    space() {
      return "url(./easy.png)";
    }
  }
};
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.scroll-container {
  display: block;
  width: 230px;
  height: 100%;
  border: 1px solid #cccccc;
  background: #f9f9f9;
  /* z-index: 999; */
}

.border {
  border: 2px solid rgb(82, 23, 23);
}

.fullwidth {
  width: 100%;
  height: 50px;
  margin-bottom: 3px;
  margin-top: 2px;
  margin-right: 2px;
  background-color: #f9f9f9;
}

.set {
  padding: 10px;
  color: #868686;
}

.setpadding {
  margin: 7px;
}

.buttonmargin {
  margin-right: 12px;
}

.container-fluid {
  height: 100vh;
  /* background-color: brown; */
}

.set-side {
  padding-left: 0px;
  padding-right: 0px;
  /* background: red; */
}

.h-25 {
  height: 6% !important;
  border-bottom: 1px solid #ccc;
  /* background-color: #ccc; */
  background-color: rgb(233, 233, 233);
  /* #d9d9d9; */
}

.h-75 {
  height: 70% !important;
}

.h-15 {
  height: 24% !important;
  background: #fff;
  border: 1px solid #eeeeee;
}

.btn-utility {
  background-color: #fff;
  border-color: #ccc;
  color: #1e1e1e;
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  padding-bottom: 5px;
  padding-top: 5px;
  text-decoration: none;
  min-width: 220px;
  text-transform: none;
}

ul li {
  list-style: none;
}

.round-body {
  border-radius: 50%;
}

.small {
  width: 20px;
  height: 20px;
  padding: 3px;
}

.small-main {
  margin-left: -40px;
}

.small-main span {
  color: red;
}

.dropdown-none::after {
  display: inline-block;
  margin-left: 6.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.OliveReact-Button--sizeLarge {
  min-height: 30px;
  min-width: 50px;
  padding: 7px 18px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 7px;
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
  border-radius: 2px;
  color: #333;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: 0.66px;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 4px 14px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
}

.to-upper {
  text-transform: uppercase;
}
</style>

