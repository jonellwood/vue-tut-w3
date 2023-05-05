<template>
  <h1>Weekly Pick Em</h1>
  <h2>Today is {{ this.today }} and the 4th week of the 2023 season</h2>
  <div>
    <h3>Pick a winner for each game this week</h3>
    <div class="games-holder">
      <div class="game-holder">
        <div class="team-one">
          <label>
            <h4>Baltimore Colts</h4>
            <input type="checkbox" />
          </label>
        </div>
        <div class="team-two">
          <label>
            <h4>Houston Oilers</h4>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: null
    }
  },
  mounted: function () {
    this.getDate()
  },
  methods: {
    getDate() {
      let today = new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      this.today = today
      console.log(this.today)
    }
  }
}
</script>
<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.games-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}
.game-holder {
  width: 400px;
  height: 100px;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #00000070;
  box-shadow: 0 0 0.5em #00000050;
  align-items: center;
  justify-content: safe;
}
</style>
