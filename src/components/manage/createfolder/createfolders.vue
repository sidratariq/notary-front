  <template>
        
           <div class="envelopclass"  >

              <!-- <ul>
                <li v-for="(ingredient,key) in ingredients" :key="key">{{ingredient}}({{key}})</li>
              </ul> -->

              <hr>
              <ul>
                <li v-for="(folder,key)  in folders" :key="key"> 
                    key({{key}}){{folder.name}}
                    {{folder.subfolder}}
                    <!-- <ul v-for="(subfolder,key,index) in folder.subfolder" :key="key" >
                      <li>
                        {{subfolder.name}}
                      </li>
                    </ul> -->

                </li>

              </ul>
              <hr>
                  

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
        folders:[{name:'sidra',id:0,subfolder:{name:'hajra',id:0}},
        {name:'Ali',id:0,subfolder:{name:'tahir',id:0}},
        {name:'Usman',id:0,subfolder:{name:'nauman',id:0}},
        {name:'Zara',id:0,subfolder:{name:'ishra',id:0}}],
        ingredients:['sidra','usman','zara','iqra','bilal']
      };
    },

    components:{
     


    },
      methods:{
      
                    chalo(){
                        let newfolder = document.createElement('li')
                        let t = document.createTextNode(this.foldername)
                        newfolder.appendChild(t)
                        newfolder.className ='fas fa-folder'
                        document.getElementById('mylist').appendChild(newfolder)
                    },

                    subfolder($event){
                    let parent = $event.currentTarget.parentElement.id;
                    let newfolder = document.createElement('li')
                    let name = document.createTextNode(this.subfoldername)
                    newfolder.appendChild(name)
                    newfolder.className = 'fas fa-folder'
                    // parent.appendChild(newfolder)
                    document.getElementById(parent).appendChild(newfolder)

                },

                rename($event){
                 console.log($event.currentTarget.parentElement) 
                },
                delete($event){

                }
                
                }
  };  
  </script>

  <style scoped>   

  *{
    /* border: 1px solid black; */
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

  

  /* .menuicon::after{
    content: 'Actions';
    position: absolute;
  } */

  


  .hide{
    display: none;
  }

  .foldericon:hover{
    color: #2463d1;

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
 


  </style>
