<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name:{{switchname()}}</p>
        <p>User age:{{userage}}</p>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>

// import {eventBus} from '../../main.js';


export default{
    props:{
    myName:{
    type:String
    },
    userage:{type:Number}, 
    resetFn:Function
    },
    methods:{
        switchname(){
            return this.myName.split("").reverse().join("");
        },
        resetname(){
            this.myName = 'Max'
            this.$emit('namewasreset',this.myName)
        }
    },

    // created(){
        // eventBus.$on('editage',()=>{
            // this.userage = age
        // })
    // }

}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>