        <template>
  <div style="height: 100vh;">
    <div
      class="h-100 w-100 row"
      style="width: 120px; margin-left:0px; margin-right:0px; background-color: rgba(0,0,255,.1)"
    >
      <div class="col-8" style="background-color:cray">
        <div class="container">
          <div class="row">
            <h1>Review and Send</h1>
          </div>

          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-6">
              <div class="row">
                <strong>
                  <p>To</p>
                </strong>
              </div>

              <div class="row">
                <p>
                  <small>All Recipients</small>
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <form>
                <div class="form-group" style="padding:0px">
                  <label for="exampleInputEmail1">
                    <strong>Email Subject*</strong>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="emailsubject"
                  >
                  <small
                    id="emailHelp"
                    class="form-text text-muted"
                  >We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    <strong>Email Message</strong>
                  </label>
                  <textarea
                    class="form-control"
                    v-model="message"
                    placeholder="add multiple lines"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <small
                    id="emailHelp"
                    class="form-text text-muted"
                  >We'll never share your email with anyone else.</small>
                </div>

                <button
                  type="button"
                  class="OliveReact-Button--sizeLarge btn-sm OliveReact-Button--main OliveReact-Button to-upper"
                  style="border:1px solid #ccc; background-color:white"
                  @click="backroute()"
                >back</button>
                <button
                  class="OliveReact-Button--sizeLarge btn-sm OliveReact-Button--main OliveReact-Button to-upper"
                  @click="sendrequest()"
                >Sign Now</button>
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
              <small class="setcolor">{{filename}}</small>
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
            <!-- {{recipients}} -->
          </div>

          <div class="col-md-12 col-lg-12 col-sm-12 setcolor">
            <div
              class="row setcolor"
              style="margin-top:4px"
              v-for="(recipient,index) in recipients"
              :key="index"
            >
              <div class="col-md-2 col-lg-2 col-sm-2 setcolor">
                <div class="row setcolor">
                  <span
                    style="border-radius:50%; padding:5px; font-size:10px; background:rgb(232, 237, 247) "
                  >{{index}}</span>
                </div>
              </div>

              <div class="col-md-5 col-lg-5 col-sm-5 setcolor">
                <small class="text-muted">{{recipient.Name}}</small>
              </div>
              <div class="col-md-5 col-lg-5 col-sm-5 setcolor">
                <i
                  :class="{'fas fa-file-signature seteffect':recipient.CC==0,'far fa-closed-captioning seteffect':recipient.CC==1}"
                ></i>
                <small class="text-muted">{{(recipient.CC==1)? 'Receive a Copy':'Need to Sign'}}</small>
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
  data: function() {
    return {
      emailsubject: "",
      message: ""
    };
  },

  methods: {
    backroute() {
      this.$router.push("/playground");
    },
    sendrequest() {
      let token = this.token;
      this.$http
        .post(
          "http://localhost:8000/SendContract",
          {
            ContractID: this.contractid,
            EmailSubj: this.emailsubject,
            EmailMsg: this.message
          },
          {
            headers: {
              Token: token
            }
          }
        )
        .then(res => {
          console.log(res);

          if (res.status == 200) {
            console.log(res.bodyText);
            this.$router.push("/signnow");
          }

          return res;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  computed: {
    contractid: function() {
      return this.$store.getters.getcontractid;
    },

    token: function() {
      return this.$store.getters.getToken;
    },
    recipients: function() {
      return this.$store.getters.getsigners;
    },
    filename() {
      return this.$store.getters.getfilename;
    }
  }
};
</script>q

    <style scoped>
* {
  background-color: rgb(244, 244, 244);
  /* border: 1px solid black; */
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}

.setborder {
  border: 1px solid #cccccc;
}

.setcolor {
  background-color: #ffffff;
}

.h-25 {
  height: 8vh !important;
  border-bottom: 1px solid #cccccc;
}

.form-control {
  font-size: 0.85rem;
}

.OliveReact-Button--sizeLarge {
  min-height: 44px;
  min-width: 52px;
  padding: 7px 18px;
}

.seteffect {
  color: rgb(153, 153, 153);
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
  letter-spacing: 0.66px;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 4px 14px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
}

ul li {
  list-style: none;
}
</style>
