<template>
  <p>Click to see</p>
  <router-link to="/teams">See teams</router-link>
  <router-link to="/superbowl">Pick Winner</router-link>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  background-color: black;
  border: solid 1px black;
  color: white;
  padding: 5px;
  margin: 10px;
}
a:hover,
a.router-link-active {
  background-color: rgb(110, 79, 13);
}
div {
  border: dashed black 1px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>
