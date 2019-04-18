<template>
  <div class="contaier">
      <button v-on:click="fontSize++">
  Increase font size
</button>
<button v-on:click="fontSize--">
  Decrease font size
</button>

<p v-bind:style="{ fontSize: fontSize + 'px' }">
  Font size is: {{ fontSize }}
</p>


<h1>{{folders}}</h1>
<div style="height:200px; width:100px; background-color:gray;" :style="{ background: 'url(' + image + ') no-repeat' }">
  
</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fontSize: 10,
      image:this.$store.getters.getfilesrc
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
    },
       backgroundImage() {
        // let overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
        return 'background-image:'+ "url('  this.$store.getters.getfilesrc  ')";
      },
    folders(){
      return this.$store.getters.getfolder
    }

  }
};
</script>

<style>
</style>
