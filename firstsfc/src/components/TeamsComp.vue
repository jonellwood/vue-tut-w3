<template>
  <h1>Teams</h1>
  <div class="card-holder">
    <div
      v-for="t in teams"
      :key="t.team.displayName"
      class="tCard-holder"
      v-bind:style="{ backgroundColor: '#' + t.team.color }"
    >
      <p class="tCard">{{ t.team.displayName }}</p>
      <!-- <p>{{ '#' + t.team.color }}</p> -->
    </div>
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

img {
  width: 100%;
}
.card-holder {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  gap: 10px;
}
.tCard-holder {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
}
.tCard {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 3px;
  color: whitesmoke;
}
.tCard:hover {
  color: white;
  cursor: pointer;
}
</style>
