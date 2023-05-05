import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
// import FoodItem from './components/FoodItem.vue'
// import TodoItem from './components/TodoItem.vue'
// import SlotComp from './components/SlotComp.vue'
// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'
// import CompThree from './components/CompThree.vue'
import TeamsComp from './components/TeamsComp.vue'
import SuperBowlComp from './components/SuperBowlComp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsComp },
    { path: '/superbowl', component: SuperBowlComp }
  ]
})

const app = createApp(App)
// app.component('food-item', FoodItem)
// app.component('todo-item', TodoItem)
// app.component('slot-comp', SlotComp)
// app.component('comp-one', CompOne)
// app.component('comp-two', CompTwo)
// app.component('comp-three', CompThree)
// app.component('teams-comp', TeamsComp)
// app.component('super-bowl', SuperBowlComp)
app.use(router)
app.mount('#app')
