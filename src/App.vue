<template>
  <div  id="app">
      <head_head></head_head>
      <router-view></router-view>
      <footer_footer ></footer_footer >
  </div>
</template>

<script>
import footer_footer from "./components/footer/footer.vue"
import head_head from "./components/header/header.vue"
export default {
  props: {
    msg: String
  },
  components:{
    footer_footer,
    head_head
  }
  
}
</script>

<style scoped>

body{
  background-color: rgb(244, 244, 244);
}




</style>
