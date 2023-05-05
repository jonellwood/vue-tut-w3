<template>
  <h2>2023 Season Teams</h2>
  <div v-for="x in teams" :key="x.displayName">
    <p class="pName">{{ x.displayName }}</p>
  </div>
</template>

<script>
export default {
  inject: ['teams']
}
</script>
<style scoped>
div {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  width: 80px;
  background-color: cadetblue;
  border-radius: 10px;
}
.pName {
  text-align: center;
  margin: 10px 0 0 0;
}
img {
  width: 100%;
}
</style>
