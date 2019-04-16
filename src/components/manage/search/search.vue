    <template>
  <div class="row mx-0 setheight">
    <div class="setsearch col-lg-9">
      <input
        class="setsearchborder"
        type="text"
        placeholder="Search Contracts"
        @click="openfilter = !openfilter"
      >

      <div v-if="openfilter" class="filter">
        <ul class="setlist">
          <!-- // status -->
          <li style="min-height:64px">
            <!--Search by status-->
            <div class="form-group" style="padding-left: 0px;">
              <label for="exampleFormControlSelect1">Status</label>
              <select class="form-control" v-model="status" style="max-height:30px" id="exampleFormControlSelect1">
                <option @change="status='All'">All</option>
                <option @change="status='In Progress'">In Progress</option>
                <option @change="status='Completed'">Completed</option>
                <option @change="status='DRAFT'">DRAFT</option>
                <option @change="status='Voided'">Voided</option>

              </select>
            </div>
          </li>


          <!-- Date set -->
          <li style="min-height:64px">
            <!--Search by date  -->
            <div class="form-group" style="padding-left: 0px;">
              <label for="exampleFormControlSelect2">Date</label>
              <select class="form-control"  v-model="date" style="max-height:30px" id="exampleFormControlSelect2">
                <option @change="date='All'">All</option>
                <option @change="date='Last one year'">Last one year</option>
                <option @change="date='Last six months'">Last six months</option>
                <option @change="date='Last one month'">Last one month</option>
                <option @change="date='Last one week'">Last one week</option>
                <option @change="date='Last one day'">Last one day</option>
              </select>
            </div>
            <!-- <setdate></setdate> -->
          </li>

          <!-- Custom date -->
          <li v-if="custom" style="min-height:64px">
            <input type="date" name id>
            <input type="date" name id>
          </li>

          <!-- Apply and reset buttons -->
          <li style="min-height:44px">
            <button type="submit" @click="searchalgo()" class="btn btn-sm btn-primary">Apply</button>
            <span></span>
            <button type="submit" @click="openfilter = !openfilter" class="btn btn-sm btn-secondary">Cancel</button>

          </li>

        </ul>
      </div>
    </div>

    <div class="col-3 setposition" style="margin-top:10px; z-index:1;">
      <div @click="openfilter = !openfilter">
        <i class="fas fa-sliders-h setposition setfont" style="color:#999"></i>
        <span class="setspan">FILTERS</span>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      openfilter: false,
      custom: false,
      check: true,
      statusselected:'All',
      Dateselected:'All',
      contractname:''
    };
  },
  methods: {
    run(args){
      alert(args)
      this.status=args
    },

    searchalgo() {
     let token = this.token
     let date = this.date
     let status = this.status
    let store = this.$store;
     let contracts = []
     let contractname = this.contractname
      console.log(date+"date")
      console.log(status+"status")

    	 this.$http
        .post("http://localhost:8000/searchContract", { "ContractName": contractname, 'Status': status, "Date": date }, {
          headers: {
            Token: this.token
          }
        })
        .then(res => {
          if (res.status == 200) {
            console.log(res.body)
            contracts = res.body
            store.dispatch("act_contractdata", contracts);
            return res.json()
          }
        })
        .then(error => {
          console.log("error")
        });
    }
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    status:{
      set(value){
        this.statusselected = value;
      
      },
      get(){
          return this.statusselected;
      }
    },
    date:{
      set(value){
        this.Dateselected= value;
      },
      get(){
        return this.Dateselected;
      }
    }
  }
};
</script>

    <style scoped>
* {
  box-sizing: border-box;
  /* border: 1px solid black; */
}

.form-control {
  font-size: 0.75rem;
}

.setheight,
form {
  max-height: 62px;
}

.setsearchborder {
  /* margin-top: 5%; */
  /* width: 100%; */
  width: 90%;
  z-index: 2;
  position: relative;
  margin-top: 10px;
  margin-left: 51px;
  font-size: 12px;
  padding: 1px;
}

.setsearch {
  margin-top: 2%;
  border-left-width: 15px;
  padding-left: 15px;
}

.filter {
  z-index: 1;
  position: absolute;
  background: #f9f9f9;
  border: 1px solid #ccc;
  top: -8px;
  /* left:1px; */
  right: -120px;
  min-width: 414px;
  height: 300px;
}

.setlist {
  position: absolute;
  top: 70px;
  list-style: none;
  width: 90%;
  padding-left: 31px;
}

.setposition {
  /* padding: 9px;
      padding-top: 5px; */
  margin-bottom: 7px;
  z-index: 1;
  padding-right: 13px;
  /* padding-left: 18px; */
  padding-top: 6px;
}

/* .setposition::after {
      content: " ";
      white-space: pre;
    } */

.setfont {
  font-weight: 700px;
  color: #1e1e1e;
  font-size: 15px;
  z-index: 1;
}
.setspan {
  font-size: 13px;
  font-weight: bold;
}

.backset {
  background: #f9f9f9;
}
</style>
