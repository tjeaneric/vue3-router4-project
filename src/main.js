import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import TheNotFound from './components/nav/TheNotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const routes = [
  { path: '/', redirect: '/teams' },
  {
    path: '/teams',
    name: 'Teams',
    components: { default: TeamsList, footer: TeamsFooter },
    children: [{ name: 'team-members', path: ':teamId', component: TeamMembers, props: true }]
  },
  {
    path: '/users/',
    name: 'Users',
    components: { default: UsersList, footer: UsersFooter },
    beforeEnter: (to, from) => {
      // reject the navigation
      return { name: 'team-members', params: { teamId: 't3' } }
    }
  },
  { path: '/:notFound(.*)*', name: 'notFound', component: TheNotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) return savedPosition
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from) => {
  // console.log('Global beforeEach')
  // console.log(to, from)
  // if (to.name !== 'team-members') {
  //   return { name: 'team-members', params: { teamId: 't3' } }
  // }
})

const app = createApp(App)

app.use(router)

app.mount('#app')
