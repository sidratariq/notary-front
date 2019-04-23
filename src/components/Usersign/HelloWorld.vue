  <template>
  <div id="app1">

    <div
      class="list"
      id="list"
      :style="{ background: 'url(' + image + ')center no-repeat',backgroundSize:cover }"
      style="position: relative; width:900px; height:510px; background-position: center;display: block; background-size: 100% 100%"
    >
    <img :src='image' alt="">

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

  data() {
    return {
      listWidth: 0,
      listHeight: 0,
      // image: this.$store.getters.getcontractpath,
      display: false,
      backgroundwidth:'61px',
      backgroundheight:'30px'

    };
  },
  mounted() {
    let listEl = document.getElementById("list");
    this.listWidth = listEl.clientWidth;
    this.listHeight = listEl.clientHeight;
    window.addEventListener("resize", () => {
      this.listWidth = listEl.clientWidth;
      this.listHeight = listEl.clientHeight;
    });
  },
  methods: {
    activateEv(index) {
      this.$store.dispatch("rect/setActive", { id: index });
    },
    deactivateEv(index) {
      this.$store.dispatch("rect/unsetActive", { id: index });
    },
    changePosition(newRect, index) {
      this.$store.dispatch("rect/setTop", { id: index, top: newRect.top });
      this.$store.dispatch("rect/setLeft", { id: index, left: newRect.left });
      this.$store.dispatch("rect/setWidth", {
        id: index,
        width: newRect.width
      });
      this.$store.dispatch("rect/setHeight", {
        id: index,
        height: newRect.height
      });
    },
    changeSize(newRect, index) {
      this.$store.dispatch("rect/setTop", { id: index, top: newRect.top });
      this.$store.dispatch("rect/setLeft", { id: index, left: newRect.left });
      this.$store.dispatch("rect/setWidth", {
        id: index,
        width: newRect.width
      });
      this.$store.dispatch("rect/setHeight", {
        id: index,
        height: newRect.height
      });
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },

    resize1(newRect) {
      this.width1 = newRect.width;
      this.height1 = newRect.height;
      this.top1 = newRect.top;
      this.left1 = newRect.left;
    },
    getindex(index){
      // alert(index)
      this.$store.state.currentindex = index;
    }
    
  },
  computed: {
    rects() {
      return this.$store.state.rect.rects;
    },

    show: {
      set(value) {
        this.display = value;
      },
      get() {
        return this.display;
      }
    },
    image(){
      let contractdata = this.$store.getters.getcontractdata;
      console.log(contractdata);
      let imgsource =
        "http://localhost:8000/" + contractdata.ContractData.Filepath;
      return imgsource; 
    }
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