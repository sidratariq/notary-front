<template>
  <div>
    <Tomato ref="Tomato" @click.native="print('Tomato')"/>
  
    <hr>
    <img :src="output">
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import Tomato from "./Tomato";
import Orange from "./Orange";
import DodgeBlue from "./DodgerBlue";

export default {
  components: {
    Tomato,
    Orange,
    DodgeBlue
  },
  data: () => ({
    output: ""
  }),
  methods: {
    async print(name) {
      let el = this.$refs[name].$el;
      this.output = (await html2canvas(el)).toDataURL();
    }
  }
};
</script>