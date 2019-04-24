<template>
  <div class="card">
    <slot></slot>
    {{value}}
  </div>
</template>

<script>
export default {
  props: ["value"]
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
}

.run {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>