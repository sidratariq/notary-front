<template>
  <div class="notary container">
    <h1>Welcome to E-Notary</h1>

    Hash to save: <input v-model="calculatehash" placeholder="hash value">
    Check Owner: <input v-model="checkOwner" placeholder="hash value">
    <ul>
      <li v-on:click="saveHash" >Save Hash</li>
      <li v-on:click="FindOwner" >Check Owner</li>

    </ul>
    <img v-if="pending" id="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
    <div class="event" v-if="winEvent">
      <p v-if="winEvent._status" id="has-won"><i aria-hidden="true" class="fa fa-check"></i> Congragulations, you have won {{winEvent._amount}} wei</p>
      <p v-else id="has-lost"><i aria-hidden="true" class="fa fa-times"></i> Sorry you lost, try again.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notary',
  data () {
    return {
      amount: null,
      pending: false,
      winEvent: null,
      calculatehash:'',
      checkOwner:'',
    }
  },
  methods: {
    clickNumber (event) {
      console.log('BETTING ON NUMBER, AMOUNT', event.target.innerHTML, this.amount)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().bet(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          let Won = this.$store.state.contractInstance().Won()
          Won.watch((err, result) => {
            if (err) {
              console.log('could not get event Won()')
            } else {
              this.winEvent = result.args
              this.winEvent._amount = parseInt(result.args._amount, 10)
              this.pending = false
            }
            console.log()
          })
        }
      })
    },
    FindOwner (event) {
      console.log ("hash = ",this.checkOwner)
        this.$store.state.contractInstance().getContractOwner(this.checkOwner ,{
        gas: 500000,
        value: this.$store.state.web3.web3Instance().toWei(0, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err,result) => {
        if (err) {
          console.log("error :",err)
        }
        else {
          console.log(result)
        }
      }
      )
    },

    saveHash (event) {
      console.log ("hash = ",this.calculatehash)
      this.$store.state.contractInstance().saveHash(this.calculatehash ,{
        gas: 500000,
        value: this.$store.state.web3.web3Instance().toWei(0.1, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err,result) => {
        if (err) {
          console.log("error :",err)
        }
        else {
          console.log("result :",result)
        }
      }
      )

  }},
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }

}
</script>

<style scoped>

*{
  background-color: antiquewhite;
  border: 1px solid black;
}

.notary {
     margin-top: 50px;
     text-align:center;
}
#loader {
  width:150px;
}
ul {
    margin: 25px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap:25px;
    grid-row-gap:25px;
}
li{
    padding: 20px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color:#fff;
    border: -2px solid #bf0d9b;
    color: #bf0d9b;
    box-shadow:3px 5px #bf0d9b;
}
li:hover{
    background-color:#bf0d9b;
    color:white;
    box-shadow:0px 0px #bf0d9b;
}
li:active{
    opacity: 0.7;
}
*{
   color: #444444;
}

</style>
