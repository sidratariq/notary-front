<template>
  <div class="container">
    <div class="col-2">
      {{status}}
      {{recipientid}}
    </div>

    <div class="dropdown" style="margin:7px">
      <button
        class="btn btn-sm btn-utility dropdown-none"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="width:70px"
      >
        {{signers[0].ContractID}}
        <span class="round-body small-main" v-rainbow>.</span>
        <span>Name</span>
      </button>
      <div class="dropdown-menu btn-utility" aria-labelledby="dropdownMenuButton">
        <a
          class="dropdown-item"
          v-for="(recipient,index) in signers"
          @click="setid(recipient)"
          :key="index"
          href="#"
        >
          <span class="round-body small" v-rainbow>.</span>
          <span>{{recipient.Name}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
  computed: {
    signers() {
      return this.$store.getters.getsigners;
    },
    status: {
      set(value) {
        this.$store.state.currentreipientname = value;
      },
      get() {
        return this.$store.state.currentreipientname;
      }
    },
    recipientid: {
      get() {
        return this.$store.state.currentrecipientid;
      },
      set(value) {
        this.$store.state.currentrecipientid = value;
      }
    }
  },
  methods: {
    setid(index) {
      this.status = index.Name;
      this.recipientid = index.UserID;
    }
  }
};
</script>

<style>
</style>
