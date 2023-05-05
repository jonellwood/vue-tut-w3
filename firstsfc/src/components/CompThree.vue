<template>
  <div :style="{ backgroundColor: bgColor }">
    <h2>Component Three</h2>
    <p>Choose a new background-color:</p>
    <p>
      I am keeping only for the color picker feature. I am sure I can use this somewhere down the
      road
    </p>
    <input type="color" v-model="bgColor" />
    <strong>{{ this.bgColor }}</strong>
  </div>
</template>

<script>
export default {
  name: 'CompThree',
  data() {
    return {
      bgColor: ''
    }
  }
}
</script>

<style></style>
