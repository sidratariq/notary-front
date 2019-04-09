  <template>
        
                <div class="envelopclass"  >

                    <div>
                    <ul  style="padding:0px 24px;">
                    <li id="mylist" >

                    <!-- caret sign -->
                    <span @click="avalible = !avalible" style="padding:4px"><i class="fas fa-caret-down menuicon"></i></span>
                    FOLDERS
                    
                    <!-- plus sign -->
                    <span class="setright"  data-toggle="modal" data-target="#myModal">
                      <i class="fas fa-plus foldericon plusicon"></i></span>

                        <ul style="padding:0px 3px 0px 24px" :class="{hide:avalible}">
                        <li class="whenhover" id="subfolder" v-for="(folder,key) in folders" :key="key">
                          <router-link :to="{name:'manage',query:{folder:folders[key].name}}" exact active-class="active">
                          <i class="fas fa-folder menuicon" style="padding:4px">
                          </i><span class="setlayout">{{folder.name}}{{key}}</span> <span>

                               <div class="btn-group" >                              

                                    <i data-v-09042f62="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="fas fa-ellipsis-v setright foldericon setdropdown"  style="padding: 4px;"></i>

                                       <div class="dropdown-menu">
                                           <div class="row">
                                               <div class="col-12">
                                               <a class="dropdown-item date padding" href="#">Move</a>
                                               <a class="dropdown-item date padding" href="#">Export As CSV</a>
                                               <a class="dropdown-item date padding" href="#">Delete</a>
                                           </div>
                                       </div>
                                       </div>
                               </div>
                      
                        </span>


                         <!-- Modal content-->
          <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 >New Folder</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
        
              <form @submit.prevent="">
               <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
                 <label for="foldername">Folder name</label>
                 <input type="text" class="form-control"  v-model="foldername" id="foldername" aria-describedby="emailHelp" placeholder="Enter email">
                <p>{{foldername}}</p>
               </div>
               
               <div class="modal-footer">
                <button type="button" @click="chalo()" class="btn btn-primary" data-dismiss="modal">Create</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
              </div>
              </form>
              
             </div>
            </div>
            </div> 
            </router-link>
                        </li> 
                        </ul>   
                        </li>
                    </ul>
                     </div>    


      
        
            </div>
          </template>
        
  <script>

 

  export default {
    name: "HelloWorld",
    data() {
      return {
        avalible:false,
        foldername:'',
        newname:'chalrhaahai',
        folders:[{name:'F1',id:1},
                 {name:'F2',id:2},
                 {name:'F3',id:3},
                 {name:'F4',id:4}]
      };
    },

    components:{
    },
      methods:{
      
                    chalo(){
                    // chalo(indexno){

                        this.folders.push({name:this.foldername});
                        
                        

                    },
                     subfolder(){
                    //  subfolder($event){

                    // let parent = $event.currentTarget.parentElement.id;
                    // let newfolder = document.createElement('li')
                    // let name = document.createTextNode(this.subfoldername)
                    // newfolder.appendChild(name)
                    // newfolder.className = 'fas fa-folder'
                    // parent.appendChild(newfolder)
                    // document.getElementById(parent).appendChild(newfolder)

                },

                rename(){
                // rename($event){
// 
                //  console.log($event.currentTarget.parentElement) 
                },
                delete(){
                // delete($event){


                }
                
                }
  };  
  </script>

  <style scoped>   

  *{
  }

  .envelopclass{
    margin-top:20px;
  }

  ul{
      padding: 0%
  }

   ul li{
       list-style: none;
       
   }

   .setright{
       float: right;
   }

  .menuicon,.foldericon{
    color: #868686;
  }

  .setlayout{
    font-size:14px;
  }

 .setdropdown, .plusicon{
    position: relative;
  }

  .setdropdown::after,.plusicon::after{
    content: 'New Folder';
    position: absolute;
    bottom: 10px;
    padding: 1em 3em;
    right: 20px;
    z-index: 999;
    min-width: 90px;
    color: white;
     font-size: .8em;
    background: #333;
    display: block;
    white-space: nowrap;
  transform: scale(0);
  transition:transform ease-out 150ms,
    bottom ease-out 150ms;
  }

 .setdropdown:hover::after, .plusicon:hover::after {
          transform: scale(1);
          bottom: 100%;
        }


  .setdropdown::after{
    content: 'Actions'
  }


  .btn-white{
        color: #000000;
        background-color: #f9f9f9;
        border-color: #ccc;
        }  
  
  .hide{
    display: none;
  }

  .foldericon:hover{
    /* color: #2463d1; */

  }

  .dropdown{
    height:200px; width:100px;
    border:1px solid black; 
    position:absolute;
    z-index:200;
    right:-1px;
    top: 525px;
    left: 74px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    float: none;
    cursor: pointer;
  }
  
  .container-fluid{
    height: 100vh;
  }

  .row{
    height: auto;
  }

  .content-bar{
    background-color: #f4f4f4;
    width: 100%;
    padding: 0px;
  }

  .text-centerr{

    height: auto;
    padding-left: 22px; 
    font-weight: 600;  
    font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
  }

  .nav-link{
    line-height: 10px;
    margin: 4px 0px 4px 0px;
    padding-left: 20px; 
  }

  .envelopclass{
    margin-top:20px;
  }

   a{
    color: #1e1e1e;
    font-weight: normal;
    font-size: 15px;
    padding: 5px 0px 5px 0px;    
  }

  .nav-link:hover{
    background: #e9e9e9;
  }

  .haha::before{
    content: '\EA4F'
  }

  .seconddiv li a{
  padding-top: 5px;
  cursor: pointer;
  padding-bottom: 5px;
  }



  .menuitem {
    padding-top: 7px; 
  }

  a:hover{
    text-decoration: none;

  }

  a:focus{
    font-weight: bolder;
  }

  a:active{
    font-weight: bolder;

  }

  .menuitem:focus{
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  }

  .content-area{
    background-color: white;
    padding: 0;
  }

  .setright{
       float: right;
   }

  .foldericon,.menuicon{
    color: #868686;
  }

  .hide{
    display: none;
  }

  .foldericon:hover{
    /* color: #2463d1; */
    

  }

  .active{
    background: #e9e9e9;

  }

  i{
    padding-left:4px;
    padding-right:8px;  
  }

    @media screen and (max-width: 631px) {
       .content-bar{
         display: none;
       }
        }



  </style>
