<template>
  <h3>Things TO-DO</h3>
  <p>
    This example lets style attributes "fall through" from the <code>App.vue</code> into the
    <code>&lt;li&gt;</code> components root element
  </p>
  <ul>
    <todo-item v-for="x in items" :key="x" :item-name="x" style="background-color: lightblue" />
  </ul>
  <input placeholder="Add your TO-DO's here" v-model="newItem" @keydown.enter="addItem" />
  <button @click="addItem">Add ➕</button>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: ['Spank Kids', 'Paint House', 'Rough up neighbor']
    }
  },
  methods: {
    addItem() {
      this.items.push(this.newItem)
      this.netItem = ''
    }
  }
}
</script>
<style>
ul {
  width: 150px;
}
</style>
