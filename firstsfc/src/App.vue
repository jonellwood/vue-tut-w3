<template>
  <nav>
    <router-link to="/teams">See teams</router-link>
    <router-link to="/superbowl">AI Predictor</router-link>
    <router-link to="/currentweek">Pick Em</router-link>
  </nav>

  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: aliceblue;
  /* margin: 30px; */
}
a {
  display: inline-block;
  background-color: #da291c;
  border: solid 1px #fbe122;
  color: white;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
}
a:hover,
a.router-link-active {
  background-color: #fbe122;
  color: #241f20;
  border: #da291c 1px solid;
}
div {
  /* border: dashed black 1px; */
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
.app-main {
  margin-top: 50px;
}
</style>
