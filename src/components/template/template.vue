<template>
  <div class="container">
    <!-- <button @click="axiosrun">okay</button> -->
    <button @click="runresource">sent</button>
    <button @click="getinput">Input</button>
    <p @click="display" ref="foo"> I'm text inside the component.</p>
    <!-- <button @click="getdraft">Draft</button> -->
    <!-- <button @click=""></button> -->
    <!-- <button @click="get"></button> -->
    <!-- {{counter}} -->


    <!-- {{run()}} -->
  </div>
</template>

<script>

import html2canvas from 'html2canvas'
import axios from "axios";

export default {
  data(){
    return {
      counter:0
      }
  },
  methods: {
    run() {
      let n = +prompt('Enter the number to which you want to find the prime number','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTQ2NDkzMDUsImlhdCI6MTU1NDY0MjEwNSwiaXNzIjoiRU5vdGFyeSIsInVzZXJpZCI6ImE0NzJjNmZiLTA1NzMtNGYwMi1hNGUxLTFiN2E3ZDBmNmYwNCJ9.jRFBog9nhvxrfNN3GExKUK_t_JphtojtQ_OsDdZmFMo');
      // label:for(let i=2;i<=n;i++){
      //   for( let k=2;k<i;k++) {
      //         if(i%k==0){
      //             continue label;
      //         }
      //         else{
      //             console.log("it is a prime"+i)
      //         }
      //     }
      // }

      nextPrime: for (let i = 2; i <= n; i++) {
        // for each i...

        for (let j = 2; j < i; j++) {
          // look for a divisor..
          if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        console.log(i); // a prime
      }
    },
    axiosrun() {
      axios
        .get("http://localhost:8000/sent", {
          headers: {
            Token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTQ2NDkzMDUsImlhdCI6MTU1NDY0MjEwNSwiaXNzIjoiRU5vdGFyeSIsInVzZXJpZCI6ImE0NzJjNmZiLTA1NzMtNGYwMi1hNGUxLTFiN2E3ZDBmNmYwNCJ9.jRFBog9nhvxrfNN3GExKUK_t_JphtojtQ_OsDdZmFMo"
          }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },

    display(){
      console.log(this.$refs.foo)
      let vc = this
  alert("Descargando reporte visual")
  html2canvas(vc.showCaptureRef).then(canvas => {
      vc.document.body.appendChild(canvas)
  }).catch((error) => {
    console.log("Erorr descargando reporte visual")
    alert("Error descargando el reporte visual")
  });
    },


    // for sent route
    runresource() {
      this.$http
        .get("http://localhost:8000/sent", {
          headers: {
            Token:this.token
          }
        })
        .then(res => {
          // console.log("lalaland"+res.bodyText)
          if (res.status == 200) {
            // this.$router.push("/dashboard");
            console.log("aleezay pleezay")
            console.log(res)
          }
          return res.json();
        })
        .then(
          response => {},
          error => {
            // this.show =true
          }
        );
    },  

   

    // for draft
      getinput(){
         this.$http
        .get("http://localhost:8000/inbox", {
          headers: {
            Token:this.token
          }
        })
        .then(res => {
          // console.log("lalaland"+res.bodyText)
          if (res.status == 200) {
            // this.$router.push("/dashboard");
            console.log("aleezay pleezay")
            console.log(res)
          }
          return res.json();
        })
        .then(
          response => {},
          error => {
            // this.show =true
          }
        );
    },

  },
  computed:{

      token(){
              return localStorage.getItem("user_token")
          },
      
      
      },

  beforeCreate(){
    console.log("i get fire in the first place"+typeof(this.counter))
  },

  

  created() {
    setInterval(() => {
      this.counter++
    }, 100)
  },

 beforeUpdate() {
    console.log(this.counter) // Logs the counter value every second, before the DOM updates.
  },
  mounted() {
    // Element might not have been added to the DOM yet
    this.$nextTick(() => {
        // Element has been definitely added to the DOM
       console.log(this.$el.textContent); // I'm text inside the component.
    });
  }


      
  
};
</script>

<style>
</style>
