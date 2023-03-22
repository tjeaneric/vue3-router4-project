<script setup>
import { ref, inject, watch } from 'vue'
// import { useRoute } from 'vue-router'
import UserItem from '../users/UserItem.vue'

const props = defineProps(['teamId'])

// const route = useRoute()
const teams = inject('teams')
const users = inject('users')

const teamName = ref('')
const teamMembers = ref([])

const chosenTeam = (teamId) => {
  const selectedTeam = teams.find((team) => team.id === teamId)
  const members = selectedTeam.members
  const selectedMembers = []
  for (const member of members) {
    const selectedUser = users.find((user) => user.id === member)
    selectedMembers.push(selectedUser)
  }
  teamName.value = selectedTeam.name
  teamMembers.value = selectedMembers
}

chosenTeam(props.teamId)

watch(() => {
  props.teamId, chosenTeam(props.teamId)
})
</script>

<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in teamMembers"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Got to team 2</router-link>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
