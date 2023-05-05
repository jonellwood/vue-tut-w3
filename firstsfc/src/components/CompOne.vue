<template>
  <div>
    <h2>Jon</h2>
    <p>This is Jon's contact Card</p>
    <p><b>Phone:</b> (843) 555-1919</p>
    <p><b>Email:</b> yeahright@gmail.com</p>
    <Teleport to="body">
      <div id="redDiv" @click="toggleVal = !toggleVal" :style="{ backgroundColor: bgColor }">
        <img src="/img_salad.svg" />
        Hello! <br />
        Click Me!
      </div>
    </Teleport>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleVal: true
    }
  },
  computed: {
    bgColor() {
      if (this.toggleVal) {
        return 'black'
      } else {
        return 'white'
      }
    }
  }
}
</script>
<style scoped>
#redDiv {
  margin: 10px;
  padding: 10px;
  display: inline-block;
}
#redDiv:hover {
  cursor: pointer;
}
div {
  background-color: darkblue;
  color: goldenrod;
}
img {
  width: 250px;
  /* padding: 20px; */
  background-color: white;
}
</style>
