<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white dark:bg-gray-800 p-4 rounded max-w-lg w-full">
        <h2 class="text-xl font-bold mb-4">{{ post.title }}</h2>
        <p class="mb-4">{{ post.body }}</p>
        <div v-if="comments.length">
          <h3 class="text-lg font-semibold mb-2">Comments:</h3>
          <ul>
            <li v-for="comment in comments" :key="comment.id" class="mb-2">
              <p class="font-semibold">{{ comment.name }}</p>
              <p>{{ comment.body }}</p>
            </li>
          </ul>
        </div>
        <button @click="closeModal" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  
  export default {
    props: {
      post: Object,
      isOpen: Boolean
    },
    setup(props, { emit }) {
      const comments = ref([])
  
      const fetchComments = async () => {
        if (props.post && props.post.id) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`)
          comments.value = await response.json()
        }
      }
  
      watch(() => props.isOpen, (newVal) => {
        if (newVal) {
          fetchComments()
        }
      })
  
      const closeModal = () => {
        emit('close')
      }
  
      return { comments, closeModal }
    }
  }
  </script>
  