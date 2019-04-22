    <template>
  <div class="container-fluid">
    <div class="row h-100">
      <div class="col-xs-0 content-bar">
        <div>
          <h6 class="text-centerr">Choose From Options</h6>
          <li class="nav-link menuitem" @click="add('Signature')"  active-class="active" exact tag="li">
            <span style="padding:4px" > 
              <i class="fas fa-file-signature menuicon set"></i>
            </span>
            <span class="setlayout">signature</span>
          </li>

          <li class="nav-link menuitem" @click="add('Initial')" active-class="active" exact tag="li">
            <span style="padding:4px">
              <i class="fas fa-signature set menuicon"></i>
            </span>
            <span class="setlayout">Initials</span>
          </li>

          <li class="nav-link menuitem" @click="add('Calender')"  active-class="active" tag="li" exact>
            <!-- <i class="far fa-edit menuicon"></i> -->
            <span style="padding:4px">
              <i class="far fa-calendar menuicon set"></i>
            </span>

            <span class="setlayout">Date Signed</span>
          </li>

          <li class="nav-link menuitem" @click="add('Name')" active-class="active" tag="li" exact>
            <span style="padding:4px">
              <i class="fas fa-user menuicon set"></i>
            </span>

            <span class="setlayout">Name</span>
          </li>
        </div>

        <div class="envelopclass">
          <h6 class="text-centerr">_____________________</h6>
          <li class="nav-link menuitem" @click="add('Email')" active-class="active" exact tag="li">
            <span style="padding:4px">
              <i class="far fa-envelope set menuicon"></i>
            </span>

            <span class="setlayout">Email</span>
          </li>

          <li class="nav-link menuitem" @click="add('Company')" active-class="active" exact tag="li">
            <span style="padding:4px">
              <i class="far fa-building menuicon"></i>
            </span>
            <span class="setlayout">Company</span>
          </li>
          <!-- <li class="nav-link menuitem" @click="add('Text')" active-class="active" exact tag="li">
            <span style="padding:4px">
              <i class="fas fa-text-height menuicon"></i>
            </span>
            <span class="setlayout">Text</span>
          </li> -->


        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed:{
      recipientid: {
      get() {
        return this.$store.state.currentrecipientid;
      },
      set(value) {
        this.$store.state.currentrecipientid = value;
      }
    },
    recipientname(){
        return this.$store.state.currentreipientname;

    }
  },

  methods:{
        add(args) {
      this.$store.state.rect.rects.push({
        width: 50,
        height: 50,
        top: 10,
        left: 10,
        draggable: true,
        resizable: true,  
        minw: 20,
        minh: 20,
        axis: "both",
        parentLim: true,
        snapToGrid: false,
        aspectRatio: false,
        zIndex: 1,
        color: "lightblue url('http://localhost:8000/Files/User_signs/Signs/997c679b-7f54-4908-b254-2925c51d8889.png') no-repeat  ",
        active: false,
        text: args,
        recipient:this.recipientid,
        recipientname: this.recipientname
      });
      console.log(this.$store.state.rect.rects)
    }
  }
};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>


.container-fluid {
  height: 100vh;
}

.setlayout {
  font-size: 15px;
}

i {
  background-color: aquamarine;
  border: 1px solid #cccccc;
}

.row {
  height: auto;
}

.content-bar {
  background-color: #f4f4f4;
  width: 100%;
  padding: 0px;
}

.text-centerr {
  height: auto;
  padding-left: 20px;
  font-weight: 600;
  font-family: "Maven Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 10px;
}

.nav-link {
  line-height: 10px;
  margin: 4px 0px 4px 0px;
  padding-left: 20px;
}

.envelopclass {
  margin-top: 20px;
}

a {
  color: #1e1e1e;
  font-weight: normal;
  font-size: 15px;
  padding: 5px 0px 5px 0px;
}

.nav-link:hover {
  background: #e9e9e9;
}

.haha::before {
  content: "\EA4F";
}

.seconddiv li a {
  padding-top: 5px;
  cursor: pointer;
  padding-bottom: 5px;
}

.menuitem {
  padding-top: 7px;
}

li:hover {
  text-decoration: none;
}

li:focus {
  font-weight: bolder;
}

li:active {
  font-weight: bolder;
}

.menuitem:focus {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.content-area {
  background-color: white;
  padding: 0;
}

.setright {
  float: right;
}

.foldericon,
.menuicon {
  color: #868686;
}

.hide {
  display: none;
}

.foldericon:hover {
  color: #2463d1;
}

.active {
  background: #e9e9e9;
}

i {
  padding-left: 4px;
  padding-right: 8px;
}

@media screen and (max-width: 631px) {
  .content-bar {
    display: none;
  }
}
</style>
