        <template>
            
            <div style="height: 100vh;">
                
                <div class="h-100  w-100 row" style="width: 120px; margin-left:0px; margin-right:0px; background-color: rgba(0,0,255,.1)">

                            
                                <div class="col-8" style="background-color:cray">

                                    <div class="container">

                                        <div class="row">
                                                <h1>
                                                    Review and Send
                                                </h1>
                                        </div>
                                    
                                        <div class="row">
                                            
                                        <div class="col-md-12 col-lg-12 col-sm-6">
                                            <div class="row">

                                                <strong>  
                                                    <p>To</p>
                                                </strong>

                                            </div>

                                            <div class="row">
                                                  <p>viking viking</p>
                                            </div>
                                        
                                        </div>    
                                        </div>

                                        <div class="row">

                                            <div class="col-md-12 col-lg-12 col-sm-12">

                                        <form>
                                        <div class="form-group" style="padding:0px">
                                        <label for="exampleInputEmail1">
                                            <strong>
                                                Email address *
                                            </strong>
                                            </label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">
                                                <strong>
                                                    Email Message 
                                                </strong>
                                                </label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>


                                        </div>
                                        
                                            <button type="button" class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper" style="border:1px solid #ccc; background-color:white">back</button>
                                            <button class="OliveReact-Button--sizeLarge OliveReact-Button--main OliveReact-Button to-upper" @click="changeroute"  >Sign Now</button>

                                        </form>

                                            </div>
                                      

                                        </div>
                                      
                                    </div>

                                </div>

                                <div class="col-4 setcolor setborder">
                                   
                                   <div class="row h-25 setcolor">
                                       <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 setcolor">
                                           <div class="row"></div>
                                        <strong class="setcolor">SUMMARY</strong>

                                       </div>

                                   </div>

                                   <div class="row">
                                       <div class="col-md-12 col-lg-12 col-sm-12 setcolor">
                                           <strong class="setcolor">Documents</strong>
                                           <p class="setcolor">
                                               <small class="setcolor">
                                                i am document name and blaa blaa blaa

                                               </small>
                                           </p>
                                       </div>
                                   </div>

                                   <div class="row setcolor">
                                       <div class="col-md-12 col-lg-12 col-sm-12 setcolor">
                                           <hr class="setcolor" style="2px solid #ccc">
                                       </div>
                                   </div>


                                   <div class="row">
                                       <div class="col-md-12 col-lg-12 col-sm-12 setcolor">
                                           <strong class="setcolor">Recipients</strong>
                                       </div>

                                        <div class="col-md-12 col-lg-12 col-sm-12 setcolor">

                                            <div class="row setcolor">
                                                 <div class="col-md-2 col-lg-2 col-sm-2 setcolor">
                                                     <div class="row">
                                                          <span style="border-radius:50%; padding:6%; font-size:17px; background-color:#e8edf7;">
                                                           {{name}}
                                                          </span>
                                                     </div>

                                                     <div class="row">
                                                         {{email}}
                                                     </div>
                                              
                                            </div>

                                            <div class="col-md-10 col-lg-10 col-sm-10 setcolor ">
                                                kdjadkja
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
        data:function(){
            return{
                recipients:[]
        
                //recipeint should be object coantaining name and email 

            }
        }

    }
    </script>q

    <style scoped>

    *{
          background-color: rgb(244, 244, 244);
          /* border: 1px solid black; */
    }

    .setborder{
        border: 1px solid #cccccc;
    }

    .setcolor{
        background-color: #ffffff;
    }

    .h-25{
        height: 8vh!important;
        border-bottom: 1px solid #cccccc;
    }


    .OliveReact-Button--sizeLarge {
            min-height: 44px;
            min-width: 52px;
            padding: 7px 18px;
        }

        .OliveReact-Button--main {
            background-color: #ffce00;
            border-color: #ffce00;
            color: #333;
        }

        .OliveReact-Button {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 2px;
            color: #333;
            cursor: pointer;
            font-size: 12px;
            font-weight: 700;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            letter-spacing: .66px;
            line-height: 1;
            margin: 0;
            overflow: visible;
            padding: 4px 14px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            vertical-align: middle;
        }



    </style>
