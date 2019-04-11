<template>
    <div class="container">
        
        <p ref="message">k</p>
        <h1 ref="choora">{{ message }}</h1>
        <img :src="output">    
        <button @click="clickedButton">Click Me!</button>


   

    </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
data(){
    return{
        message: 'Hello World!',
        output: ""
    }
	},
	methods: {
    
    clickedButton: function() {
        console.log(this.$refs);
    },

    useruploadfile:function(){
       
    }

    },


    
}
</script>

<style>

</style>
