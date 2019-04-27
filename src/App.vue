<template>
  <div  id="app">
      <head_head></head_head>
      <router-view></router-view>
      <footer_footer v-if="this.$route.path !='/signscreen' &&this.$route.path !='/playground'" ></footer_footer >
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


/* width */ 
::-webkit-scrollbar {
  width: 10px;
  display: none;
}


/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}



</style>
