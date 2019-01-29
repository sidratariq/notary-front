<template>
<div>
    <p>Counter is: {{ counter }}</p>
    <p> The number of clicks are {{clicks}}  </p>

</div>
</template>

<script>

    import {mapGetters} from 'vuex';

        export default {
            computed:{
                ...mapGetters(
                  {
                    counter:'doublecounter',
                    clicks:'stringcounter'                  

                  }
                ),
                ourOwn(){
                    
                }
            }
        }
</script>