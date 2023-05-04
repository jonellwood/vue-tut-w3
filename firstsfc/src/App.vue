<template>
  <h1>Food</h1>
  <div id="wrapper">
    <food-item food-name="Apples" food-desc="Stupid red things" v-bind:is-favorite="false" />
    <food-item
      food-name="Vegan Pizza"
      food-desc="Plants plants and more yummy plants"
      v-bind:is-favorite="true"
    />
    <food-item
      food-name="Rice"
      food-desc="Grain people eat when the need to feel full"
      v-bind:is-favorite="false"
    />
  </div>
</template>

<script></script>
<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed 1px black;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
