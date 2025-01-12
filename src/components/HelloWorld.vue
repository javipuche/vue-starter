<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Hello {{ firstName }} {{ lastName }}. You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  const firstName = ref('')
  const lastName = ref('')

  fetch('https://example.com/user')
    .then(response => response.json())
    .then(data => {
      firstName.value = data?.firstName
      lastName.value = data?.lastName
    })
</script>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
