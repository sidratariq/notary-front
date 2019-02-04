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
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
        <small v-if="flag" class="invalid">Spaces are not allowed</small>
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
    <small>{{$v.email.$invalid}}</small>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {};
  },
  props: {
    flag: {},
    email: {}
  },

  methods: {
    clickhappened() {
      if (this.$v.email.$invalid == false) {
        this.flag = !this.flag;
        this.$emit("gotclicked", this.flag);
        this.$emit("childemail", this.email);
      } else {
        //    console.log("enter a valid email address");
      }
    },
    signup() {
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
    flag: function() {
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
  cursor: not-allowed;
  /* opacity: 0.65; */
}
</style>




