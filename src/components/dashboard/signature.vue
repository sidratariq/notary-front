<template>
    
     <div @click="clicked" class="signatureChrome signatureChrome-inverse">
            <span>E-Notarized by:</span>
            <!-- signature image from user choosen from database -->
            <img src="../../assets/icons/signature.gif" class="signatureChrome_signature"  alt="Signature">
            <span>AE9DB71A4A854B1...</span>
    </div>

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
}
</script>

<style>

 

  


                       


                            .signatureChrome::before {
                            border-bottom: 2px solid #005cb9;
                            border-left: 2px solid #005cb9;
                            border-radius: 5px 0 0 5px;
                            border-top: 2px solid #005cb9;
                            content: "";
                            display: block;
                            height: 50px;
                            left: 0;
                            position: absolute;
                            top: 4px;
                            width: 20px;
                            }

                            .signatureChrome_signature {
                            height: 52px;
                            left: -12px;
                            margin: -8px 0;
                            max-width: 244px;
                            position: relative;
                            }

                            .signatureChrome-inverse::before {
                            border-color: #fff;
                            }

                            .signatureChrome-inverse {
                            color: #fff;
                            }

                            .signatureChrome {
                            background: 0 0;
                            border: none;
                            font-size: 11px;
                            font-weight: 700;
                            line-height: 11px;
                            min-width: 140px;
                            padding: 0 0 0 25px;
                            position: relative;
                            text-align: left;
                            }


                           




</style>
