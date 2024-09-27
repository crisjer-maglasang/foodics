<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <!-- Display comments here -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default {
    setup() {
      const route = useRoute()
      const post = ref(null)
      const loading = ref(true)
      const error = ref(null)
  
      onMounted(async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          post.value = await response.json()
        } catch (err) {
          error.value = err
        } finally {
          loading.value = false
        }
      })
  
      return { post, loading, error }
    }
  }
  </script>
  