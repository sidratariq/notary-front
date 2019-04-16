<template>
  <div class="contaier">
    <button @click="run()">Search</button>
    {{recipientlist+"i am empty"}}
    {{token}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },

  methods: {
    
    run() {
      let contract = this.contractid
      let token = this.token;
      let recipient = this.recipientlist

      console.log(recipient+'wth')
      console.log(token+"i am token izat nae hai meri");
      this.$http
        .post(
          "http://localhost:8000/addRecipients", 
          recipient
         ,
          {
            headers: {
              Token: this.token
            }
          }
        )
        .then(res => {
          if (res.status == 200) {
            console.log(res.body);
            return res;
          }
        })
        .then(error => {
          alert("error");
        });
    }
  },
  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    contractid(){
      return this.$store.getters.getcontractid
    },
    recipientlist(){
      console.log(this.$store.getters.getrecipient)
      return this.$store.getters.getrecipient
    }

  }
};
</script>

<style>
</style>
