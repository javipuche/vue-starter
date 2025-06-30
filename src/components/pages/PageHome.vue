<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="user" class="user">Welcome, {{ user.firstName }} {{ user.lastName }}</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const user = ref(null)
  const error = ref(null)

  onMounted(async () => {
    try {
      const response = await fetch('http://api.example/user')
      if (!response.ok) {
        throw new Error('Failed to fetch user')
      }
      user.value = await response.json()
    } catch (err) {
      error.value = err.message
    }
  })
</script>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
