<template>
  <div>
    <!-- <Tomato ref="Tomato" @click.native="print('Tomato')"/> -->
  
    <hr>
    <img :src="output">
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  components: {
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