<template>
    <div class="row">
        <recipient v-for="(key,index) in quotes" :key="index" @click.native="deleterecipient(index)"> {{ key }}</recipient>
    </div>
</template>

<script>

import recipient from './recipient.vue'
export default {
    props:['quotes'],
    
    components:{
        recipient
    },
    
    methods:{
        deleterecipient(index){
            this.$emit('recipientdeleted',index);
        }
    }


}
</script>

<style scoped>
    

</style>
