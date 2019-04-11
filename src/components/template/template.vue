<template>
  <div id="app">


    <HelloWorld ref='hello' msg='okay'/>
    <HelloWorld ref='hello1' msg='okay1'/>
    <HelloWorld ref='hello2' @click="chalo($event)" msg='okay2'/>
    <button @click="chalo($event)">chalo</button>
    <HelloWorld ref='hello3' msg='okay3'/>
    <HelloWorld ref='hello4' msg='okay4'/>
    <HelloWorld ref='hello5' msg='okay5'/>


    <img :src="output">
  </div>
</template>

<script>
import HelloWorld from "./hellovue";
import html2canvas from 'html2canvas';
import { resolve } from 'q';

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    output: "",
    output1:''
  }),
  
   mounted () {
    alert("inside mounted")
    
      let elementlist = [];
      var keyvalue =[]
      let output =''
      
      elementlist = Object.keys(this.$refs)
      var outerthis = this;

      elementlist.forEach(function(item, index, array) {
      var keyvalue = []
      keyvalue = Object.keys(outerthis.$refs)
      // console.log(outerthis.$refs.keyvalue[index].$el)
      console.log(outerthis.$refs.keyvalue)
      // console.log((keyvalue[5]))
      // console.log(keyvalue[index])
      // console.log(keyvalue[index])
      //  let el1 = outerthis.$refs.hello1.$el    
      //  output = (html2canvas(el1)) 

      // this.$refs.hello1.$el
      // console.log(outerthis.$refs.keyvalue[index]+'okay lol')
      // console.log(item, index,outerthis.$refs +"inside");
      //  (await html2canvas(key[])).toDataURL();
      
    });

    // console.log("length of object")
    // console.log(keyvalue)
    // console.log(elementlist+"list of refs")
    // let el1 = 
    // let el = this.$refs.hello.$el


    // console.log(el1+"el1 outing")
    // this.output1 = (await html2canvas(el)).toDataURL();
    // this.output = (await html2canvas(el)).toDataURL();
    
    // console.log(this.output)
    // console.log(this.output1)
  },
  created(){
   new Promise((resolve,reject)=>{
     setTimeout(resolve("done"),2000)
   })
   .finally(()=>alert("the promise is done running"))
   .then(alert('result'))
    
  },

  methods:{
    chalo(){
      alert(this + "outside")
  
    }
  }

};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
