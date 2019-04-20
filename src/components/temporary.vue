<template>
  <div>
    <Tomato ref="Tomato" @click.native="print('Tomato')"/>
    <Orange ref="Orange" @click.native="print('Orange')"/>
    <DodgeBlue ref="DodgeBlue" @click.native="print('DodgeBlue')"/>
    <hr>
    <img :src="output">
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