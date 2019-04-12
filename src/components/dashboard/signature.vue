<template>
    
     <button @click="clicked" class="signatureChrome signatureChrome-inverse">
            <span class="set-color">E-Notarized by:</span>
            <span class="initial-text" id="set-color">Create your Signature</span>
            <span class="set-color">{{userid}}</span>
     </button>

</template>

<script>

    import {mapActions} from 'vuex'


        export default {
    

            methods: {

                    ...mapActions(
                        [
                            // 'changeflag'
                        ]
                    ),
                    clicked(){
                        this.$store.dispatch('changeflag')
                    }                        
                    },
                computed:{
                userid:function(){
                    //  getuserid
                    return this.$store.getters.getuserid

                }
            }
}
</script>

<style scoped>


    @import url('https://fonts.googleapis.com/css?family=Parisienne');

    *{
        /* border: 1px solid black; */
    }

    .signatureChrome::before {
    border-bottom: 2px solid #005cb9;
    /* border-left: 2px solid #005cb9; */
    /* border-radius: 5px 0 0 5px; */
    border-top: 2px solid #005cb9;
    content: "";
    display: block;
    height: 50px;
    left: 0;
    position: absolute;
    top: 4px;
    width: 20px;
    border-color:#bad3f8;
    }

    .signatureChrome_signature {
    height: 52px;
    left: -12px;
    margin: -8px 0;
    max-width: 244px;
    position: relative;
    }

    .signatureChrome:hover{
        cursor: pointer;
        color: white;
    }

    #set-color{
        color: black;
    }
    .initial-text{
        display: block;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        margin: 5px 0;
        min-height: 26px;
        font-family: 'Parisienne', cursive;
    }

    /* *{
        color: #bad3f8;
    } */

    *:hover{
        color:  #bad3f8;
    }

    .signatureChrome:hover{
        color: #ffffff;

    }

</style>
