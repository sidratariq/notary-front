<template>
  <!-- file name -->
  <div class="col-12 sidedisplay" @click="showpreview">
    <div class="row">
      <div class="col-9">
        <div class="col-12">
          <small>pdf.pdf</small>
        </div>

        <div class="col-12">
          <small class="text-muted">{{filename}}</small>
        </div>
      </div>

      <div class="col-3">
        <i ref="change" class="fas fa-angle-down"></i>
      </div>
    </div>

    <hr>

    <div class="row">
      <!-- file show -->

      <div class="col-12 text-center">
        <a :href="image" target="_blank" rel="noopener noreferrer">
          <div style="position:relative">
            <img
              :src="image"
              style=" border:1px solid #ccc; z-index;111"
              width="130px"
              height="168.235px"
              alt="preview"
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showpreview() {
      //   this.$refs.change.className
      // =  'fas fa-angle-up';
      // console.log(changepic);
      // changepic.className =
    }
  },

  computed: {
    image() {
      return this.$store.getters.getcontractpath;
    },
    filename() {
      return this.$store.getters.getfilename;
    }
  }
};
</script>

<style scoped>
.sidedisplay {
  background: #e9e9e9;
  overflow: auto;
}

.setpadding {
  padding: 0px;
}

.circle {
  color: #868686;
}

.actionbar {
  background-color: #e9e9e9;
  height: 28px;
  position: absolute;
  width: 130px;
  right: 32px;
  /* top: 22%; */
  /* right: 13%; */
  bottom: 0px;
  z-index: 122;
  border: 1px solid #ccc;
}

.sidedisplay {
  background: #e9e9e9;
  overflow: auto;
}

.text-center {
  height: 74vh;
}

.circle {
  color: #868686;
}
</style>

