<template>
  <div id="app">
    <button @click="increment">+</button>
		<button @click="decrement">-</button>
        {{count}}
        <hr>
        <input type="text" v-model="value">
        {{value}}
        <h4>get counter</h4>
        {{ugetter}}
        <hr>    
        
       
        

    
    <input type="file" @change="uploadimage($event)" name="" id="">

    <hr>
    <img :src="imagesource" alt="">
  </div>
</template>

<script>

export default {  
  name: 'app',
  computed: {
    count() {
      return this.$store.state.count;
    },

    imagesource(){
      return this.$store.state.imagevalue
    },

     getcounter(){
      return this.$store.state.counter
    },


    value:{

      set(value){
          this.$store.dispatch('updateValue',value)
      },
      get(){
        return this.$store.getters.getvalue
      },
    },

    userdata:function(){
        return this.$store.state.userdata.Userdata;
    },
    ugetter:function(){
      return this.$store.getters;
    }
    

    
  },
  methods:{
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
         uploadimage(event){ 
                            let input = event.target;
                           let outerthis= this;
                            if(event.target.files.length > 0){
                                // console.log(event.target.files[0].name) 
                                let reader = new FileReader();
                                reader.onload = function(){    
                                var dataURL = reader.result;
                                outerthis.$store.dispatch('updateImage',dataURL)
                                }
                                reader.readAsDataURL(input.files[0])
                            }
                            },
         getclick() {
      this.$store.dispatch("changephoto");
    },
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
