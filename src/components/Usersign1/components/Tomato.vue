  <template>
  <div class="card" :style="{backgroundImage:'url('+thumbnail+')', position:'relative', }">
    <slot></slot>
    adjakdaja
  </div>
</template>

  <script>
export default {
  data: () => ({}),
  props: ["title", "previewtext", "thumbnail", "topspace", "bottomspace"],

  created() {
    console.log(this.thumbnail);
  }
};
</script>

  <style scoped>
.card {
  width: 100px;
  color: white;
  background-color: tomato;
  font-family: sans-serif;
  line-height: 100px;
  text-align: center;
  position: relative;
  position: relative;
  width: 900px;
  height: 510px;
  background-repeat: none;
}

.run {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.check {
  position: absolute;
  /* top: 20px; */
  /* bottom: 30px; */
}
</style>