<template>

        <div class="col-sm-6 col-md-4 col-lg-3">

            <div class="panel panel-default">
                 
                <div class="panel-body quote">
                    
                    <slot>
                        
                    </slot>

                </div>

            </div>

            <!-- <check_check></check_check> -->

        </div>

</template>

<script>

import check_check from '../../inbox/inbox.vue'

export default {

  components:{
      check_check
    }

}
</script>

<style scoped>
    
    *{

        background-color: palegreen;
        
    }

    .panel-body{
        font-family: 'Arizonia',cursive;
        font-size: 24px;
        color:#6e6e6e;
    }

    .quote{
        cursor: pointer;
        background-color: #ffe2e2;
    }
</style>
