<template>
  <div style="margin:0px">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-12">
                <i class="fas fa-check sucess"></i>
                      
                <strong>{{value.Name}}dadadadad</strong>

                <div class="col-12" style="padding-left:22px">
                  <small
                    class="text-muted"
                  >{{value.UserID}}sidratariq48@gmail.com(not comming from backend)</small>
                </div>

                <div class="col-12" style="padding-left:22px">
                  <small class="text-muted">Status: {{value.SignStatus}}</small>
                </div>

                <div class="col-12" style="padding-left:22px">
                  <small class="text-muted">Message: {{value.Message}}</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-1 setpadding">
                    <i
                      :class="{'far fa-closed-captioning':value.CC==1,'fas fa-signature':value.CC!=1}"
                      class="circle"
                    ></i>
                  </div>
                  <div class="col-11">
                    <div class="row">
                      <div class="col-12">
                        <strong>Copy Received</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-1 setpadding">
                    <!-- <i class="far fa-closed-captioning circle"></i> -->
                  </div>
                  <div class="col-11">
                    <div class="row">
                      <div class="col-12">
                        <small class="text-muted">on {{date}} | {{time}}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>

    <!-- akldakjldkj -->
  </div>
</template>

<script>
export default {
  props: ["value","date","time"]
  
};
</script>

<style scoped>
.sucess {
  color: #008938;
}

.circle {
  color: #868686;
  /* height: 16px; */
  /* width: 16px; */
}
.apply {
  color: #000000;
  background-color: #f9f9f9;
  border-color: #ccc;
}

.setpadding {
  padding: 0px;
}

i {
  padding-left: 4px;
  padding-right: 4px;
}
</style>
