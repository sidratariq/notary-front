<template>
  <div  id="app">
   
      <router-view></router-view>
      <footer_footer ></footer_footer >
  </div>
</template>

<script>
import footer_footer from "./components/footer/footer.vue"
export default {
  props: {
    msg: String
  },
  components:{
    footer_footer,
  }
  
}
</script>

<style>

body{
  background-color: rgb(244, 244, 244);
}


</style>
