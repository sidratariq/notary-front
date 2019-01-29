<template>
<div>
    <p>Counter is: {{ doublecounter }}</p>
    <p> The number of clicks are {{stringcounter}}  </p>

</div>
</template>

<script>

    import {mapGetters} from 'vuex';

    // export default {
        // computed:mapGetters({
            // counter:'doublecounter',
            // clicks:'stringcounter'
    // })
        //  }

        export default {
            computed:{
                ...mapGetters(
                    [
                        'doublecounter',
                        'stringcounter'
                    ]                    
                ),
                ourOwn(){
                    
                }
            }
        }
</script>