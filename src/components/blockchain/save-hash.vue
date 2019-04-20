  <template>
    <div>
  <hello-metamask/>
  <notary-component/>
  </div>
  </template>
  <script>
  import HelloMetamask from './hello-metamask'
  import NotaryComponent from './notary-component'
  export default {
    name: 'notary-dapp',
    beforeCreate () {
      console.log('registerWeb3 Action dispatched from E-Notary.vue')
      this.$store.dispatch('registerWeb3')
    },
    components: {
      'hello-metamask': HelloMetamask,
      'notary-component': NotaryComponent
    }
  }
  </script>
  <style scoped>
  *{
    background-color: #cccccc;
    border: 1px solid black;
  }

  </style>
