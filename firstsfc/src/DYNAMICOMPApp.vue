<template>
  <h1>Dynamic Components</h1>
  <p>App.vue switches between which component to show</p>
  <p>
    we can use the 'max' attribute to <code>&lt;KeepAlive&gt;</code> to limie the number of
    components the browser needs to remember
  </p>
  <!-- <button @click="toggleValue = !toggleValue">Swap People</button> -->
  <button @click="compNbr++">Next Comp</button>
  <KeepAlive>
    <component :is="activeComp"></component>
  </KeepAlive>
</template>

<script>
export default {
  data() {
    return {
      compNbr: 1
    }
  },
  watch: {
    compNbr(val) {
      if (val > 3) {
        this.compNbr = 1
      }
    }
  },
  computed: {
    activeComp() {
      if (this.compNbr === 1) {
        return 'comp-one'
      } else if (this.compNbr === 2) {
        return 'comp-two'
      } else {
        return 'comp-three'
      }
    }
  }
}
</script>

<style>
#app {
  width: 350px;
  margin: 10px;
}
#app > div {
  border: solid black 2px;
  padding: 10px;
  margin-top: 10px;
}
</style>
