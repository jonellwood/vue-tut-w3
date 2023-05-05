<template>
  <div>
    <!-- <button @click="fetchData">Get Data</button> -->
    <pre v-if="data">{{ data }}</pre>
  </div>
  <div>
    <p>Click the button see what team will win this years Super Bowl!</p>
    <button @click="fetchData">Get Winner</button>
    <div v-if="randomTeam">
      <!-- <h2>{{ randomTeam.sports[0].leagues[0].teams.team.displayName }}</h2> -->
      <h2>{{ randomTeam.displayName }}</h2>
      <img :src="imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      randomTeam: null
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
      const data = await res.json()
      // console.log(data.sports[0].leagues[0].teams.length)
      const randIndex = Math.floor(Math.random() * data.sports[0].leagues[0].teams.length)
      // const randIndex = 4
      //   this.randomTeam = data.res[randIndex]
      console.log(data.sports[0].leagues[0].teams[randIndex].team.logos[0].href)
      this.imgUrl = data.sports[0].leagues[0].teams[randIndex].team.logos[0].href
      this.randomTeam = data.sports[0].leagues[0].teams[randIndex].team
    }
  }
}
</script>
<style>
#app {
  display: flex;
  justify-content: center;
}
img {
  width: 250px;
}
</style>
