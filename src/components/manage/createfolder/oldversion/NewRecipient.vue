<template>
    <div class="row">

        <form action="">

        <div class="col-sm-8  col-sm-offset-2 col-xs-12  col-md-6 col-md-offset-3 form-group">
            <label for="">Recipient</label>
            <!-- <textarea class="form-control" name="" v-model="quote" id="" cols="30" rows="3"></textarea> -->
        </div>

        <div class="col-sm-8  col-sm-offset-2 col-xs-12  col-md-6 col-md-offset-3 form-group">
            <!-- <button @click.prevent="CreateNew"  class="btn btn-primary">
                Add Recipient
            </button> -->
        </div>


        </form>


             <span class="setright" data-toggle="modal" data-target="#myModal">
                      <i class="fas fa-plus foldericon plusicon"></i></span>


          <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 >New Folder</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>

      </div>
      <form @submit.prevent="">
  <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
    <label for="foldername">Folder name</label>
    <input type="text" class="form-control"  v-model="quote" id="foldername" aria-describedby="emailHelp" placeholder="Enter email">
            
    
  </div>

    <div class="modal-footer">
        <!-- <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button> -->
        <button @click.prevent="CreateNew"  class="btn btn-primary">
                Add Recipient
            </button>
      </div>

</form>
      
    </div>

  </div>
</div> 

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
