<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <div ref="okay"></div>
    <div ref="okay1"></div>
    <div ref="okay2"></div> -->
    <HelloWorld ref1='hello'/>

    <HelloWorld ref='hello'/>
    <img :src="output">
  </div>
</template>

<script>
import HelloWorld from "./hellovue";
import html2canvas from 'html2canvas';

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    output: ""
  }),
  async mounted () {
    let el = this.$refs.hello.$el;
    console.log(el)
    let el1 = this.$refs
    console.log(el+'el')

    console.log(el1+"el1")
    // this.output = (await html2canvas(el)).toDataURL();
    // console.log(this.output)
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
