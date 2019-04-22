<template>
  <div class="row">
    <div class="col-1 setpadding">
      <button class="btn btn-primary btn-sm" type="button">SIGN</button>
    </div>

    <div class="col-1 setpadding">
      <button class="btn btn-sm apply" type="button">MOVE</button>
    </div>

    <div class="col-1 col-md-2 col-xs-2 col-sm-2 setpadding">
      <div class="btn-group setpadding">
        <button
          class="btn btn-sm dropdown-toggle apply"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >MORE</button>
        <div class="dropdown-menu setpadding">
          <div class="row">
            <div class="col-12">
              <!-- <a class="dropdown-item date padding" href="#">Forward</a> -->
              <!-- <a class="dropdown-item date padding" href="#">Create a Copy</a> -->
              <!-- <a class="dropdown-item date padding" href="#">Save as Template</a> -->
              <a class="dropdown-item date padding" href="#">Export as CSV</a>
              <a class="dropdown-item date padding" href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-1 col-md-2 setpadding">
      <button class="btn btn-sm apply" type="button">RESEND</button>
    </div>

    <div class="col-1 setpadding">
      <button class="btn btn-sm apply" type="button">Continue</button>
    </div>
    <div class="col-1 setpadding">
      <!-- <button class="btn btn-sm apply" type="button">Continue</button> -->
    </div>

    <div class="col-3 setpadding">
      <button
        class="btn btn-md apply green"
        @click="SaveinBlockhchain()"
        type="button"
      >Save in Blockchain<i class="fab fa-bitcoin" style="color:green;transform: rotate(-16deg); margin:3px"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contractid"],
  methods: {
    SaveinBlockhchain() {
      let token = this.token;
      let store = this.$store;
      console.log(this.contractid);

      this.$http
        .post(
          "http://localhost:8000/SaveinBlockchain",
          { ContractID: this.contractid },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          if (res.status == 200) {
              console.log(token);
              console.log(this.contractid)

            let value = JSON.parse(res.bodyText)
            // console.log(value)

            store.dispatch("updateContracthash", value);

            this.$router.push('/saveinblockchain');

            
          }
          return res;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    token: function() {
      return this.$store.getters.getToken;
    }
  }
};
</script>



<style scoped>
.dropdown-item {
  width: 120px;
}

.sucess {
  color: #008938;
}

.padding {
  padding: 0.25rem 1.5rem;
}

.date {
  /* padding-left:0px;  */
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-rendering: optimizelegibility;
  font-size: 13px;
  line-height: 18px;
}

.apply {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

.green {
  /* background: #008938; */
  font-size: 14px;
}

.dropdown-item {
  width: 120px;
}

.dropdown-menu {
  min-width: 10rem;
}

.setpadding {
  padding-left: 0px;
  padding-right: 0px;
}

.setmargin {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
