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

    <Tomato
      ref="Tomato"
      @click.native="print('Tomato')"
      value="i am from the parent"
      thumbnail="http://theurbanrecipes.com/wp-content/uploads/2016/12/shrimp-with-broccoli.jpg"
      title="Sidra"
      previewtext="awesome pizza"
      topspace="20"
      bottomspace="80"
    >
      <div v-for="(i,index) in output" :key="index">
      
        <img
          :style="{content:'url('+space+')',position:'absolute',top:i.Topcord+'px',left:i.Leftcord+'px',width:widthset,height:heightset}"
        >
      </div>
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
    output: [
      {
        ContractID: "5c1c5ccf-529c-42da-b96e-65fbee2de18e",
        UserID: "",
        Name: "Signature",
        Topcord: 20,
        Leftcord: 210
      },
      {
        ContractID: "5c1c5ccf-529c-42da-b96e-65fbee2de18e",
        UserID: "",
        Name: "Initial",
        Topcord: 20,
        Leftcord: 426
      },
      {
        ContractID: "5c1c5ccf-529c-42da-b96e-65fbee2de18e",
        UserID: "",
        Name: "Name",
        Topcord: 0,
        Leftcord: 316
      }
    ]
  }),
  methods: {
    async print(name) {
      let el = this.$refs[name].$el;
      this.output = (await html2canvas(el)).toDataURL();
    }
  },
  computed: {
    space() {
      return "http://theurbanrecipes.com/wp-content/uploads/2016/12/ensaladang-lechon-kawali-3.jpg";
    },
    topspace() {
      return "20px";
    },
    leftspace() {
      return "70px";
    },
    heightset() {
      return "20px";
    },
    widthset() {
      return "30px";
    },

    token: function() {
      return this.$store.getters.getToken;
    },
    getcontractid: function() {
      return this.$store.getters.getcontractdata.ContractData.ContractID;
    },
    coordinated: {
      set(value) {
        alert(value);
        this.responsedata = value;
      },
      get() {
        return this.responsedata;
      }
    },
    Userdata() {
      console.log(this.$store.state.userdata);
      return this.$store.state.userdata;
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

.content {
  content: url("http://theurbanrecipes.com/wp-content/uploads/2016/12/ensaladang-lechon-kawali-3.jpg");
  width: 30px;
  height: 30px;
}
</style>

