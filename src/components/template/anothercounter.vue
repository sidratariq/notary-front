<template>
    <div>
        anothercounter trigger dispatch
        <button class="btn btn-primary" @click="asyncIncrementAction({by:50,duration:500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrementAction({by:50,duration:500})">Decrement</button>
    </div>
</template>
 
<script>

     import {mapMutations, mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrementAction',
                'asyncDecrementAction'
            ])
        }
    }
</script>

<style scoped>
  
    *{
        background-color: pink;
    }
</style>
