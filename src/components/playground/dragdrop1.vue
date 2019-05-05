  <template>
  <div >
    <img id="list"
      :style="{content:`url(`+image+`)`, position:'relative', background:'no-repeat center', size: 'auto auto'}"
     
    >
    <!--  style="width:200px; height:400px" -->

    <VueDragResize
      v-for="(rect, index) in rects"
      :key="index"
      :w="rect.width"
      :h="rect.height"
      :x="rect.left"
      :y="rect.top"
      :parentW="listWidth"
      :parentH="listHeight"
      :axis="rect.axis"
      :isActive="rect.active"
      :minw="rect.minw"
      :minh="rect.minh"
      :isDraggable="rect.draggable"
      :isResizable="rect.resizable"
      :parentLimitation="true"
      :snapToGrid="rect.snapToGrid"
      :aspectRatio="rect.aspectRatio"
      :z="rect.zIndex"
      v-on:activated="activateEv(index)"
      v-on:deactivated="deactivateEv(index)"
      v-on:dragging="changePosition($event, index)"
      v-on:resizing="changeSize($event, index)"
      @click.native="getindex(index)"
    >
      <div class="filler" :style="{background:rect.color,backgroundSize: '67px',left:0 }">
        {{rect.recipientname}}
        <span
          v-if="rect.text!='Signature' && rect.text!='Initial'"
          style="left:0"
        >{{rect.text}}</span>
        <p
          v-if="rect.text=='Signature' || rect.text=='Initial'"
          style=" margin:45px 12px 0px 12px; left:0"
        >{{rect.text}}</p>
      </div>
    </VueDragResize>
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
      image: this.$store.getters.getcontractpath,
      display: false,
      backgroundwidth: "61px",
      backgroundheight: "30px"
    };
  },
  mounted() {
    let listEl = document.getElementById("list");
    console.log(listEl);
    this.listWidth = listEl.clientWidth;
    console.log(this.listWidth);

    this.listHeight = listEl.clientHeight;
    console.log(this.listHeight);
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

    getindex(index) {
      // alert(index)
      this.$store.state.currentindex = index;
    }
  },
  computed: {
    rects: {
      set(value){
          this.$store.state.rect.rects= value
      },
      get(){
      return this.$store.state.rect.rects;

      }
    },

    show: {
      set(value) {
        this.display = value;
      },
      get() {
        return this.display;
      }
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

.card {
  /* background-size: cover; */
  /* background-repeat: none; */
  /* background-position: center center; */
  color: white;
  /* position: relative; */
  /* background-color: tomato; */
  /* font-family: sans-serif; */
  /* text-align: center; */
  /* width: 900px;
  height: 500px; */
}
</style>