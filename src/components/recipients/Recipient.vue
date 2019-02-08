<template>
     <div class="row">
                    
                    <div class="col-md-12 col-lg-12">
                                <form class="cross" style="position:relative">

                                <div class="form-group">
                                    <input class="from-control" type="text">
                                </div>

                                <div class="form-group">
                                    <input class="from-control" type="email">

                                </div>


                                 <!-- Drop down for options -->
                                <div class="dropdown">
                                   
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Dropdown
                                    </button>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                      <button class="dropdown-item" type="button"> Action

                                          <span>
                                            <i class="fas fa-pen"></i>
                                          </span>

                                      </button>
                                   
                                      <button class="dropdown-item" type="button">Something else here <span>
                                    <i class="far fa-closed-captioning"></i>
                                      </span>
                                      </button>
                                    </div>

                                    <span>
                                            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
                                    </span>
                                </div>
                                <!-- end of drop down -->
                                </form>


                                <span>
                                    <i class="fas fa-user"></i>
                                </span>

                                <span class="timeline_dot">

                                </span>

                                <span>
                                    <i class="fas fa-check"></i>
                                </span>            

                
                               

                               
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


            .timeline_dot::after {
                background-color: #ccc;
                border-radius: 2px;
                content: '';
                display: block;
                height: 10px;
                width: 10px;
            }

           

</style>
