import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

const routes = [
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsList
  },
  {
    path: '/teams/:teamId',
    component: TeamMembers
  },
  {
    path: '/users/',
    name: 'Users',
    component: UsersList
  }
]

const rourer = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})
const app = createApp(App)

app.use(rourer)

app.mount('#app')
