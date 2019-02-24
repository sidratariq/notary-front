<template>
  <div>
    <form>
      <div class="form-group">
        <input
          type="email"
          v-model="email"
          class="form-control"
          @input="$v.email.$touch()"
          style="width:90%"
          aria-describedby="emailHelp"
          placeholder="Enter email"
         autocomplete="on"

        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
        <small v-if="regexflag" class="invalid">Spaces are not allowed</small>
        <!-- <small   :class="{invalid: true}" v-if="!$v.email.required">This field must not be empty.</small> -->
        <small
          v-if="!$v.email.email"
          :class="{invalid:true}"
        >Provide a valid email like johndoe@domain.com</small>
      </div>

      <button
        class="bbutton btn-width"
        :class="{disabled:$v.email.$invalid}"
        @click.prevent="clickhappened()"
      >Continue</button>
    </form>

    <button class="btn btn-link" @click="signup">
      <small>No account? Sign up for free</small>
    </button>
    <!-- <small>{{$v.email.$invalid}}</small> -->
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {

  // data aur valiudation kaa name same hona chai hai
  data() {
    return {
      currentflag: this.flag,
      email:''
    };
  },
  props: ['flag']
  ,

  methods: {

    
    clickhappened() {

      // ****this function chnages the current component to password component******//
      if (this.$v.email.$invalid == false) {
        this.currentflag = !this.currentflag;
        this.$emit("gotclicked", this.currentflag);
        this.$emit("childemail", this.email);
      } else {
        //    console.log("enter a valid email address");
      }
    },


    signup() {
      // this function runs when new user signs in
           this.$router.push("/signup");
    }
  },

  validations: {
    email: {
      required,
      email
    }
  },

  computed: {
    regexflag: function() {
      if (/\s/.test(this.$v.email.$model)) {
        return true;
      } else {
        return false;
      }
    }
  },

  regex: function() {
    const string = "all your base are belong to us";
    const regex = /base/;
    const isexisting = regex.test(string);
    console.log(isexisting);
  }
};
</script>

<style scoped>
.invalid {
  text-align: left;
  color: #d03238;
  font-size: 12px;
  display: block;
}

.disabled {
  /* pointer-events: none; */
  cursor: not-allowed;

  /* opacity: 0.65; */
}
</style>




