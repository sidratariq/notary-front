<template>
  <span class="timeline_marker timeline_badge">
    <span class=" ">
      <div class="signatureChrome signatureChrome-inverse">
        <span style="position:absolute; color:#000000">E-Notarized by:</span>
        <!-- signature image from user choosen from database -->
        <img
          style="position:absolute;left:20px;top:20px;"
          :src="value"
          class="signatureChrome_signature"
          alt="Signature"
        >
      </div>
    </span>
  </span>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions([
      // 'changeflag'
    ]),

    clicked() {
      // this.$store.dispatch('changeflag')
    }
  },
  props:['value'],
  computed: {
    initialsignature(){
      return this.user_initial
    },
    profilepic: function() {
      return (
        "http://localhost:8000/" +JSON.parse(localStorage.getItem("Userdata")).Userdata.Picture
      );
    }
  }
};
</script>

<style scoped>
* {
  /* border: 1px solid black;a */
}

.signatureChrome::before {
  border-bottom: 2px solid #005cb9;
  border-left: 2px solid #005cb9;
  border-radius: 5px 0 0 5px;
  border-top: 2px solid #005cb9;
  color: #005cb9;
  content: "";
  display: block;
  height: 50px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 20px;
}

.sig-chrome {
        border-left: 2px solid #005cb9;
        border-radius: 8px;
        display: block;
        height: 55px;
        margin: 4px 0;
        overflow: visible;
        /* position: relative; */
    }

.signatureChrome_signature {
  height: 52px;
  left: -12px;
  margin: -8px 0;
  max-width: 244px;
  position: relative;
}

.signatureChrome-inverse::before {
  border-color: #fff;
}

.signatureChrome-inverse {
  color: #fff;
}

.signatureChrome {
  background: 0 0;
  border: none;
  font-size: 11px;
  font-weight: 700;
  line-height: 11px;
  min-width: 140px;
  padding: 0 0 0 25px;
  position: relative;
  text-align: left;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>
