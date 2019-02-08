<template>
     <div class="row cross"  style="position:relative" >
                    
                    <div class="">
                                <div class="alert alert-info">
                                    Info: Click on a Recipient  to delete it

                                    <input type="text">
                                    <input type="email">

                                <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>

                                </div>


                               

                                
                            </div>
                    </div>
</template>

<script>
export default {
    props:['no_of_recipient','index'],
    methods:{
         remove(id) {
            this.$emit('DeleteRecipient',id)

        }
    }
}
</script>

<style scoped>

    *{
         border-left: 1px solid black;

    }

    .row:hover{
        


       }   

     .cross::after{    
                content: 'X';
                border: 1px solid black;
                background: black;
                color: white;
                position: absolute;
                font-size: .65em;
                max-width: 20px;
                max-height: 20px;
                padding: 3px;
                border-radius:45%;
                font-weight: bold;
                /* height: 20rem; */
                /* width: 20rem; */
                /* bottom: 10px; */
                right: -35px;
                z-index: 999;
                font-weight: bold;
                /* background: black; */
                /* padding: 0.25%; */
                display: block;
                /* white-space: nowrap; */
                /* transform: scale(1); */
                /* transition:transform ease-out 150ms, */
                /* bottom ease-out 1500ms; */
            }


</style>
