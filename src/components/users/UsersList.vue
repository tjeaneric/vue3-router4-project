<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import UserItem from './UserItem.vue'

const users = inject('users')
const router = useRouter()
const confirmButton = () => router.push('/teams')
</script>
<template>
  <button @click="confirmButton">confirm</button>

  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
