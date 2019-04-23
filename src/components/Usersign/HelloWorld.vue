  <template>
  <div id="app1">
    <div
      class="list"
      id="list"
      :style="{ background: 'url(' + image + ')center no-repeat',backgroundSize:'cover' }"
      style="position: relative; width:900px; height:510px; background-position: center;display: block; background-size: 100% 100%"
    >                                                 
      <!-- <img :src="image" alt> -->

      <small class="text-muted">
      {{getcontractid}}
      </small>
      <!-- {{top}}
      {{left}} -->
      <slot name="default"></slot>
      <slot  name="signature" ></slot>
      <slot  name="initial" ></slot>


    </div>
  </div>
</template>

  <script>
import VueDragResize from "vue-drag-resize";

export default {
  name: "app",

  components: {
    VueDragResize
  },
  props:[
    'top',
    'left'
  ],

  data() {
    return {
      listWidth: 0,
      listHeight: 0,
      display: false,
      backgroundwidth: "61px",
      backgroundheight: "30px"
    };
  },

  methods: {},
  computed: {
    image() {
      let contractdata = this.$store.getters.getcontractdata;
      console.log(contractdata);
      let imgsource =
        "http://localhost:8000/" + contractdata.ContractData.Filepath;
      return imgsource;
    },
      getcontractid:function(){
      return this.$store.getters.getcontractdata.ContractData.ContractID
    },

  }
};
</script>

  <style>

  

.hero-image {
  height: 500px;
  background-position: center;
  background-size: cover;
  position: relative;
}

#grad1 {
  height: 200px;
  background-color: #cccccc;
  background-image: linear-gradient(red, yellow);
}

.block {
  display: block;
}

.none {
  display: none;
}
body {
  height: 100vh;
  width: 100vw;
  background-color: #ececec;
}
#app {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Lato", sans-serif;
}
.filler {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
}
.list {
  position: absolute;
  top: 1px;
  bottom: 10px;
  left: 2px;
  right: 300px;
  box-shadow: 0 0 2px #aaa;
  background-color: white;
}
</style>