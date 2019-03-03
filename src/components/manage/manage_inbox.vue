  <template>

      <div class="container-fluid"  style="" >
        <div class="row">
        <head_head></head_head>
        <div class="col-2 col-xs-0  content-bar" >
          <btn_btn></btn_btn>
          <div>

         <h6 class="text-centerr">ENVELOPES</h6>
            <!-- <menu-icon style=" fill-color:#868686; padding-right:4px"></menu-icon> -->
         <router-link class="nav-link menuitem"  active-class="active" to="/manage_inbox/inbox" exact tag="li"><i class="fas fa-box-open menuicon"></i><span>Inbox</span> </router-link> 
         <router-link class="nav-link menuitem"  active-class="active" to="/manage_inbox/sent" exact tag="li"><i class="far fa-paper-plane menuicon"></i><span> Sent</span> </router-link>
         <router-link class="nav-link menuitem"  active-class="active" tag="li" exact   to="/manage_inbox/draft"><i class="far fa-edit menuicon"></i><span>Draft</span></router-link>
         <router-link class="nav-link menuitem"  active-class="active" tag="li" exact   to="/manage_inbox/delete"><i class="fas fa-trash menuicon"></i><span>Delete</span></router-link>

          </div>

          <div class="envelopclass">
          <h6 class="text-centerr">quick views</h6>
        
          <router-link class="nav-link menuitem"  active-class="active" to="/manage_inbox/actionrequired" exact tag="li"><i class="fas fa-exclamation-circle menuicon"></i><span>Actions Required</span></router-link>
          <router-link class="nav-link menuitem"   active-class="active" to="/manage_inbox/waitingforother" exact  tag="li"><i class="far fa-clock menuicon"></i><span>Waiting for Others</span></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact to="/manage_inbox/expiringsoon"><i class="fas fa-exclamation-triangle menuicon"></i><span>Expiring Soon</span></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact to="/manage_inbox/completed"><i class="fas fa-check menuicon"></i><span>Completed</span></router-link>

           </div>

       


           <folders>

           </folders>

        </div>
      <div class="col-10 col-lg-10 col-md-10 col-xs-12 content-area " > 

        <router-view>

          
        </router-view>

        <!-- <test></test> -->
        
      </div>

        </div>
      </div>
  </template>

  <script>

  import head_head from '../header/header.vue';
  import btn_btn from './button.vue';
  // import inner_header from "./inbox/inbox_header.vue"
  import folders from "./createfolder/createfolderold.vue"
  // import test from "./createfolder/oldversion/addrecipients.vue"

  export default {
    name: "HelloWorld",
    data() {
      return {
        id: this.$route.params.id,
        foldername:''
      };
    },

    components:{
        head_head,
        btn_btn,
        // inner_header,
        folders,
        // test
    },
      methods:{
                  
                },
               
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  *{
    /* border:1px solid green */
  }

  .container-fluid{
    height: 100vh;
    overflow: scroll;

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

  li:hover{
    text-decoration: none;

  }

  li:focus{
    font-weight: bolder;
  }

  li:active{
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
    color: #2463d1;
    

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
