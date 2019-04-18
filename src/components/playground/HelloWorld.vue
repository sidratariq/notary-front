<template>
  <div id="app1" >
    <div
      id="list" :style="{ background: 'url(' + image + ') no-repeat' }"
      style="position: relative; width:900px; height:513px; background-color:gray; display:block; "
    >
      <VueDragResize :style="{ background: 'url(' + image + ') no-repeat' }"
        id="grad1"
        ref="sign"
        :minw="100"
        :minh="100"
        :aspectRatio="true"
        :parentW="listWidth"
        :parentH="listHeight"
        :parentLimitation="true"
        :isActive="false"
        :w="200"
        :h="200"
        v-on:resizing="resize"
        v-on:dragging="resize"
      >
        <h3>Sign</h3>
        <p>{{ top }} х {{ left }}</p>
        <p>{{ width }} х {{ height }}</p>
      </VueDragResize>

      <!-- <VueDragResize
        id="grad1"
        ref="initial"
        :minw="100"
        :minh="100"
        :aspectRatio="true"
        :parentW="listWidth"
        :parentH="listHeight"
        :parentLimitation="true"
        :isActive="true"
        :w="200"
        :h="200"
        v-on:resizing="resize1"
        v-on:dragging="resize1"
      >
        <h3>Sign</h3>
        <p>{{ top1 }} х {{ left1 }}</p>
        <p>{{ width1 }} х {{ height1 }}</p>
      </VueDragResize> -->
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
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      width1: 0,
      height1: 0,
      top1: 0,
      left1: 0,
      listWidth: 0,
      listHeight: 0,
      image:this.$store.getters.getfilesrc


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
    }
  },
  computed:{
    //   image(){
    //      return this.$store.getters.getfilesrc;
    //   }
  }
};
</script>

<style>
.hero-image {
  background-image: url("./pic.jpg");
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
</style>