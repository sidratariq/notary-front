<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editage()">Edit age{{userage}}</button>
    </div>
</template>

<script>

// import {eventBus} from '../../main.js';


export default{
    props:['userage'],
    methods:{
        editage(){
            this.userage = 30;
            this.$emit('editage',this.userage);
            // eventBus.$emit('editage',this.userage);
        }

    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>