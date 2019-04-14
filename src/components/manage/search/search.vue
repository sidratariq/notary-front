    <template>
  <form @submit.prevent="onSubmit">
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
                <select class="form-control" style="max-height:30px" id="exampleFormControlSelect1">
                  <option>All</option>
                  <option>In Progess</option>
                  <option>Completed</option>
                  <option>Declined</option>
                  <option>Voided</option>
                </select>
              </div>
            </li>

            <!-- // sent by -->
            <li style="min-height:64px">
              <!-- Search by Sent -->
              <div class="form-group" style="padding-left: 0px;">
                <label for="exampleFormControlSelect1">Sent</label>
                <!--  -->
                <select class="form-control" style="max-height:30px" id="exampleFormControlSelect1">
                  <option>By Anyone</option>
                  <option>By Me</option>
                  <option>To Me</option>
                </select>
              </div>
            </li>

            <!-- Date set -->

            <li style="min-height:64px">
              <!--Search by date  -->
              <div class="form-group" style="padding-left: 0px;">
                <label for="exampleFormControlSelect1">Date</label>
                <select class="form-control" style="max-height:30px" id="exampleFormControlSelect1">
                  <option>All</option>
                  <option>Last 12 Months</option>
                  <option>Last 6 Months</option>
                  <option>Last 30 days</option>
                  <option>Last Week</option>
                  <option>Last 24 Hours</option>
                  <option @click="custom = !custom">Custom</option>
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
              <button type="submit" class="btn btn-primary">Apply</button>
              <span></span>
              <button type="submit" class="btn btn-link">Reset</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-3 setposition" style="margin-top:10px; z-index:1;">
        <div @click="openfilter = !openfilter">
          <i class="fas fa-sliders-h setposition setfont" style="color:#999"></i>
          <span class="setspan ">FILTERS</span>
        </div>
      </div>
    </div>
  </form>
</template>

    <script>
export default {
  data() {
    return {
      openfilter: false,
      custom: false,
      check: true
    };
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
  height: 363px;
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
