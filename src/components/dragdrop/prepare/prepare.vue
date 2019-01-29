<template>
    <div class="row setback" style="position:relative" >
        <div class="col-12 set">
            <div class="row">
            
            <div class="col-1" style=" padding-right: 0px;">
            <img src="../../../assets/icons/image.svg" alt="" srcset="">
            </div>

            <div class="col-11" style="padding-left: 0px; padding-right: 0px;">
                <div class="row">

                    <!-- //uploading file name  -->
                    <div class="col-12" style="padding-left:0px">
                        <small class="font-weight-bold">
                           <!-- 857260_500931473281642_534467027_o.jpg -->
                           Finishing...
                        </small>
                    </div>

                    <div class="col-12" style="padding-left:0px">
                        <small class="text-muted">  
                            <!-- 1 page -->
                            <div class="progress">
                               <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                        </small>
                    </div>

                </div>
            </div>

            <div class="col-1">
                <i class="fas fa-ellipsis-v circle float-sm-right foldericon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                 <div class="btn-group" style="padding-right: 0px;padding-left: 8px;" >                            
                                        <div class="dropdown-menu" style="left:-145px">
                                            <div class="row">
                                                <div class="col-12">
                                                     <a class="dropdown-item date padding" href="#">Rename</a>
                                                     <a class="dropdown-item date padding" href="#">View Document</a>
                                                     <a class="dropdown-item date padding" href="#">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                 </div>
            </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

        *{
            /* border: 1px solid black; */
        }

        .setback{
            background-color: white;
            border-radius: 2%;
            height: 70px;
            padding: 1%;
        }

        .circle{
         color: #868686;
            }

         .foldericon:hover{
            color: #2463d1;
        }

        .set::after{    
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
            /* right: -35px; */
            /* z-index: 999; */
            /* font-weight: bold; */
            /* background: black; */
            /* padding: 0.25%; */
            /* display: block; */
            /* white-space: nowrap; */
            /* transform: scale(1); */
            /* transition:transform ease-out 150ms, */
            /* bottom ease-out 150ms; */
        }

        .set:hover::after{
            /* transform: scale(1); */
            /* bottom: 100%; */
        }

         .date{
            padding-left:0px; 
            color: rgb(51, 51, 51);
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: normal;
            text-rendering: optimizelegibility;
            font-size: 13px;
            line-height: 18px;
        }

        .padding{
            padding: .25rem 1.5rem;
        }

        .progress{
            height: 0.75rem;
        }

</style>
