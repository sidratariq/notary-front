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
      let token = this.token
      console.log(token)
    	 this.$http
        .post("http://localhost:8000/searchContract", { "ContractName": "", 'Status': "All", "Date": "Last one week" }, {
          headers: {
            Token: this.token
          }
        })
        .then(res => {
          if (res.status == 200) {
            console.log(res.body)
            return res.json()
          }
        })
        .then(error => {
          alert("error")
        });
        
        
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
