<template>
  <div class="greenBG">⚽️</div>
  <li v-bind="$attrs">{{ itemName }}</li>
  <div class="redBG">⚽️</div>
</template>
<script>
export default {
  props: ['itemName']
}
</script>
<style>
.redBG {
  background-color: red;
}
.greenBG {
  background-color: green;
}
</style>
