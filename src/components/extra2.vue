<template>
  <div class="contaier">
    <button @click="run()">Search</button>
    {{value}}
  </div>
</template>

<script>
export default {
data:function(){
  return{
    value:""
  }
},

methods:{
  run(){
    // 	r.Handle("/searchContract", db.IsAuthorized(db.SearchAlgo)).Methods(http.MethodPost)

     let token = this.token;
      this.$http
        .post("http://localhost:8000/searchContract", {
          headers: {
            Token: token
          }
        })
        .then(res => {
         console.log(res.bodyText)

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
  }
},
computed:{
  token() {
      return this.$store.getters.getToken;
    }
}
}
</script>

<style>

</style>
