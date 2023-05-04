<template>
  <div>
    <h2>
      {{ foodName }}
      <!-- <img src="/public/img_quality.svg" v-show="isFavorite" /> -->
      <img src="/img_quality.svg" v-show="isFavorite" />
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>

<!-- <script>
export default {
  props: ['foodName', 'foodDesc', 'isFavorite'],
  //   props: {
  //     foodName: {
  //       type: String,
  //       required: true
  //     },
  //     foodDesc: {
  //       type: String,
  //       required: false,
  //       default: 'This is generic description of the thing you are reading about right now',
  //       //   we are adding a valdator function to make sure the length is withing the right range
  //       validator: function (value) {
  //         if (20 < value.length && value.length < 50) {
  //           return true
  //         } else {
  //           return false
  //         }
  //       }
  //     },
  //     isFavorite: Boolean
  //   },
  data() {
    return {
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite
    }
  }
}
</script> -->
<script>
export default {
  props: ['foodName', 'foodDesc', 'isFavorite'],
  emits: ['toggle-favorite'], // this makes it easier for others to understand the code after you get fired
  data() {
    return {
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-Favorite', this.foodName)
    }
  }
}
</script>

<style>
img {
  height: 1.5em;
  float: right;
}
</style>
