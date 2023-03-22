<script setup>
import { inject } from 'vue'
import TeamsItem from './TeamsItem.vue'

const teams = inject('teams')
</script>
<template>
  <RouterView />
  <ul>
    <teams-item
      v-for="team in teams"
      :id="team.id"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
