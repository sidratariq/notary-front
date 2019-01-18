    <template>
    
        <div >
        
            <head_head></head_head>
            <div class="container">
            <h1 >Add Documents</h1>

                <uploadfile></uploadfile>
                <dragdrop></dragdrop>

                <div class="row">
                    
                        <div class="col-10"></div>
                        <div class="col-2 ">
                           <button class="btn-main btn-large btn btn-primary btn-sm float-right" @click="$router.push('/addrecipient')">NEXT</button>

                        </div>
                    </div>

                </div>



            </div>




    </template>

    <script>
    
    import head_head from '../header/header.vue'
    import dragdrop from './dragdrop.vue'
    import uploadfile from './prepare/prepare.vue'

    export default {
    components:{
        head_head,
        dragdrop,
        uploadfile
    },
    props:{
        
    }
    }
    </script>

    <style scoped>
    *{
                background-color: rgb(244, 244, 244);
                /* border: 1px solid black; */

    }


    button{
      border-radius: 0 2px 2px 0;
      border: none;
      margin:28px 20px 20px 20px;
      text-align: center;
     }

     button:hover{
         cursor: pointer;
     }

     .btn-main{
         background-color: #ffce00;
         color: #1e1e1e;    
     }

     .btn-large{
         font-size: 13px;
         min-height: 34px;
         font-weight: bolder;
     }
    
    </style>
