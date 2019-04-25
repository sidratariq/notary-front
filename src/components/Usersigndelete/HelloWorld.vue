  <template>
  <!-- :style="{ background: `url(`+image+`)`+'no-repeat center center', backgroundSize: 'cover'}" -->
  <div class="card" >
    <img :style="{content:`url(`+image+`)`}" >
    <small class="text-muted">{{getcontractid}}</small>

    <slot name="default"></slot>
    <slot name="signature"></slot>
    <slot name="initial"></slot>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      listWidth: 0,
      listHeight: 0
    };
  },

  methods: {},
  computed: {
    image() {
      let contractdata = this.$store.getters.getcontractdata;
      console.log(contractdata);
      let imgsource =
        "http://localhost:8000/" + contractdata.ContractData.Filepath;
      return imgsource;
    },
    getcontractid: function() {
      return this.$store.getters.getcontractdata.ContractData.ContractID;
    }
  }
};
</script>

  <style scoped>
body {
  background-color: #ececec;
}

.filler {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
}

.card {
  background-size: cover;
  background-repeat: none;
  background-position: center center;
  color: white;
  position: relative;
  background-color: tomato;
  font-family: sans-serif;
  text-align: center;
  width: 900px;
  height: 510px;
}

.text-muted {
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>