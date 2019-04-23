<template>
  <div class="container-fluid">
    <div class="row h-25">
      <div class="col-12 col-md-12" style="padding-left:0px">
        <div class="row">
          <div class="col-2">
              <img :src="output" alt="">
          </div>

          <div class="col-2"></div>

          <div class="col-2">
            <!-- {{rects}} -->
          </div>
          <div class="col-2">
            <button class="btn btn-sm"></button>
            <!-- <i class="far fa-trash-alt"></i> -->

            <button class="btn btn-sm"></button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-2 set-side" style>
        <!-- <choosebar></choosebar> -->
      </div>

      <div class="col-8" style="padding:0px; height:96%; width:906px;overflow:scroll">
        <helloworld ref="name"></helloworld>
      </div>

      <div class="col-2" style="padding:0px;">
        <!-- <sidebar></sidebar> -->
      </div>
    </div>

    <div
      class="row"
      style="position:fixed; bottom:45px;z-index:999; border-top:1px solid #ccc; background:#ffffff; width:100%; min-height:54px;"
    >
      <div class="col">
        <button
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="margin-top:12px;"
        >Place Fields</button>

        <button
          type="button"
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="border:1px solid #ccc; margin-top:12px; background-color:white"
          @click="print('name')"
        >Sign</button>
      </div>
    </div>
  </div>
</template>

<script>
import helloworld from "./HelloWorld.vue";
// import sidebar from "./filepreview.vue";
import html2canvas from "html2canvas";

// import choosebar from "./choosebar.vue";
export default {
  components: {
    // sidebar,
    helloworld
    // choosebar
  },

  data: function() {
    return {
        output:''
    };

  },

  computed: {
    recipients: function() {
      let recipientlist = [];
      let recipient = this.$store.getters.getrecipient;
      recipient.forEach(element => {
        recipientlist.push(element.name);
      });
      return recipient || recipientlist;
    },
    image() {
      console.log(this.$store.getters.getcontractpath);
      return this.$store.getters.getcontractpath;
    },

    signers() {
      return this.$store.getters.getsigners;
    },
    status: {
      set(value) {
        this.$store.state.currentreipientname = value;
      },
      get() {
        return this.$store.state.currentreipientname;
      }
    }
  },

  methods: {
    async print(name) {
      let el = this.$refs[name].$el;
      this.output = (await html2canvas(el)).toDataURL();
    
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
