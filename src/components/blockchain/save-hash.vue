  <template>
    <div class="container-fluid">
  <notary-component/>


  </div>
  </template>
  <script>
  import NotaryComponent from './notary-component'
  import reipient from '../viewfile/recipients.vue'
  export default {

    name: 'notary-dapp',
    beforeCreate () {
      console.log('registerWeb3 Action dispatched from E-Notary.vue')
      this.$store.dispatch('registerWeb3')
    },
    components: {
      'notary-component': NotaryComponent
    }
  }
  </script>
  <style scoped>
  body{
    /* border:1px solid black; */
  }

  </style>
