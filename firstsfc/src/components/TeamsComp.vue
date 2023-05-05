<template>
  <h1>Teams</h1>
  <!-- <button @click="fetchData">Get Teams</button> -->
  <div class="card-holder">
    <div
      v-for="t in teams"
      :key="t.team.displayName"
      class="tCard-holder"
      v-bind:style="{ backgroundColor: '#' + t.team.color }"
      @click="alert"
    >
      <p class="tCard">{{ t.team.displayName }}</p>
      <img :src="t.team.logos[0].href" class="tiny-hidden" />
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
  mounted: function () {
    this.fetchData()
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
      //this.imgUrl = data.sports[0].leagues[0].teams[0].team.logos[0].href
      this.randomTeam = data.sports[0].leagues[0].teams[randIndex].team
      this.teams = data.sports[0].leagues[0].teams
      const teams = this.teams
      console.log(teams)
    },
    alert() {
      alert("You'd think this is a link but it is not.....yet")
    }
  }
}
</script>
<style scoped>
div {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  width: 80px;
  /* background-color: cadetblue; */
  border-radius: 10px;
}

/* img {
  width: 100%;
} */
.card-holder {
  display: grid;
  /* grid-auto-columns: auto auto; */
  grid-template-columns: auto auto auto auto auto auto auto auto;
  /* grid-template-columns: min-content; */
  gap: 20px;
  align-content: space-evenly;
  justify-content: flex-start;
  align-items: flex-start;
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
  margin-right: -30px;
  margin-top: -10px;
  z-index: 3;
}
img {
  /* border: white 1px solid; */
  margin-top: 35px;
  margin-right: -35px;
}
.tCard:hover {
  color: white;
  cursor: pointer;
}
</style>
