<template>
  <div class="container-fluid">
    <div class="row h-25">
      <div class="col-12 col-md-12">
        <div class="dropdown">
          <button
            class="btn btn-sm btn-utility dropdown-none"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span
              class="round-body small"
              style="border:1px solid #f5c431; background-color:#ffd65b; color:#ffd65b; "
            >.</span>
            {{recipients[0].name}}
          </button>

          <div class="dropdown-menu btn-utility" aria-labelledby="dropdownMenuButton">
            
            <a class="dropdown-item" v-for="(recipient,index) in recipients" :key="index" href="#">{{recipients[index].name}}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" >
      <div class="col-2 set-side" style="">
        <div class="scroll-container">
          <ul style="height:100%; padding-left:9px; ">
            <li>
              <button>
                <i class="fas fa-file-signature"></i>
                <span>signature</span>
              </button>
            </li>

            <li>
              <button>
                <i class="fas fa-signature"></i>
                <span>Initials</span>
              </button>
            </li>

            <li>
              <button>
                <i class="far fa-calendar"></i>
                <span>Date Signed</span>
              </button>
            </li>

            <li>
              <hr style="1px solid #ccc">
            </li>

            <li>
              <button>
                <i class="fas fa-user"></i>
                <span>Name</span>
              </button>
            </li>

            <li>
              <button>
                <i class="far fa-envelope"></i>
                <span>Email</span>
              </button>
            </li>

            <li>
              <button>
                <i class="far fa-building"></i>
                <span>Company</span>
              </button>
            </li>

            <li>
              <button>
                <i class="far fa-building"></i>
                <span>Text</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-8" style="padding:0px; height:96%; width:906px;overflow:scroll">
        <helloworld></helloworld>
      </div>

      <div class="col-2" style="padding:0px;">
        <sidebar></sidebar>
      </div>
    </div>

    
    <div class="row" style="border:1px solid green;position:fixed; bottom:45px;z-index:999; background:#ffffff; width:100%">   

      <div class="col" >
           <button
          type="button"
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          style="border:1px solid #ccc; background-color:white"
        >back</button>
        <button
          class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper float-right"
          @click="changeroute"
        >start</button>
      </div>

      
   
    </div>
  </div>
</template>

<script>
import helloworld from "./HelloWorld.vue";
import sidebar from "./filepreview.vue";
export default {
  data: function() {
    return {
     
    };
  },

  components: {
    sidebar,
    helloworld
  },

  methods: {
    changeroute() {
      this.$router.push("/addrecipient");
    }
  },

  computed: {
    recipients: function() {
      let recipinet = this.$store.getters.getrecipient
      return recipinet || false;
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
  width: 225px;
  height: 100%;
  border: 1px solid #cccccc;
  background:#f9f9f9;
  /* z-index: 999; */
  
}

.container-fluid {
  height: 100vh;
  /* background-color: brown; */
}

.set-side{
padding-left:0px; padding-right:0px; background:red;
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
  min-width: 168px;
  text-transform: none;
}

ul li {
  list-style: none;
}

.round-body {
  border-radius: 50%;
}

.small {
  width: 10px;
  height: 10px;
}

.dropdown-none::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.OliveReact-Button--sizeLarge {
  min-height: 44px;
  min-width: 52px;
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
