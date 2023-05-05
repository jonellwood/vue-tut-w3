<template>
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
  <hr />
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
      randomTeam: null,
      activeComp: 'teams-comp',
      teams: this.teams
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
      // console.log(data.sports[0].leagues[0].teams[randIndex].team.logos[0].href)
      this.imgUrl = data.sports[0].leagues[0].teams[randIndex].team.logos[0].href
      this.randomTeam = data.sports[0].leagues[0].teams[randIndex].team
      this.teams = data.sports[0].leagues[0].teams
      const teams = this.teams
      console.log(teams)
    }
  },
  provide() {
    return {
      teams: this.teams
    }
  }
}
</script>
<style>
#app {
  margin: 30px;
  /* display: flex; */
  /* justify-content: center; */
}
img {
  width: 250px;
}
.divBtn {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background-color: white;
  border: solid 2px #04aa6d;
  border-radius: 10px;
  font-family: Verdana, sans-serif;
  color: black;
  padding: 10px;
  margin: 10px;
}
.divBtn:hover {
  background-color: #04aa6d;
  color: white;
  cursor: pointer;
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
