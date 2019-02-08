<template>
    <div class="row">

        <form action="">

        <div class="col-sm-8  col-sm-offset-2 col-xs-12  col-md-6 col-md-offset-3 form-group">
            <label for="">Recipient</label>
            <textarea class="form-control" name="" v-model="quote" id="" cols="30" rows="3"></textarea>
        </div>

        <div class="col-sm-8  col-sm-offset-2 col-xs-12  col-md-6 col-md-offset-3 form-group">
            <button @click.prevent="CreateNew"  class="btn btn-primary">
                Add Recipient
            </button>
        </div>


        </form>

    </div>
</template>

<script>

export default {

    data(){
        return{
            quote:''
        }
    },

    methods:{

        CreateNew(){
            this.$emit('recipienteadded',this.quote);
            this.quote ='';
        }

    },

    components:{
    }
}
</script>

<style scoped>
    

</style>
