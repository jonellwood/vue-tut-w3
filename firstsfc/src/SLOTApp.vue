<template>
  <h3>Slots in Vue</h3>
  <p>We create card-like divs boxes from the foods array</p>
  <p>We also create a card-like footer by reusing the same component.</p>

  <div id="wrapper">
    <slot-comp v-for="x in foods" :key="x.name">
      <img v-bind:src="x.url" />
      <h4>{{ x.name }}</h4>
      <p>{{ x.desc }}</p>
    </slot-comp>
  </div>
  <slot-comp></slot-comp>
  <footer>
    <slot-comp>
      <h3>bróðir dev ops - 2023</h3>
    </slot-comp>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        {
          name: 'Apple',
          desc: 'Apples are a type of fruit that grow on trees.',
          url: '../../img_apple.svg'
        },
        {
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          url: '../../img_pizza.svg'
        },
        {
          name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          url: '/img_rice.svg'
        },
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg' },
        {
          name: 'Cake',
          desc: 'Cake is something sweet that tastes good but is not considered healthy.',
          url: '/img_cake.svg'
        }
      ]
    }
  }
}
</script>
<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#wrapper > div {
  background-color: lightgreen;
}
footer > div {
  background-color: lightblue;
}
#wrapper img {
  display: block;
  margin: 20% auto 0;
  width: 60%;
}
h3,
h4 {
  text-align: center;
}
</style>
