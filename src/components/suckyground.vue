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
            console.log(this.$refs.message.innerHTML);
            console.log(this.$refs.choora.innerText);
            let el = this.$refs.message;
            // let el1 = this.$refs
            console.log(el+'el')
            // console.log(el1+"el1")
            this.output = (html2canvas(el)).toDataURL();
            console.log(this.output)

          

		}
    },


    
}
</script>

<style>

</style>
