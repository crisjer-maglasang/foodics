<template>
  <div class="fixed">
    <ModalWrapper :show="isOpen" :close="close" title="Post Details">
      <div v-if="loading" class="flex justify-center items-center">
        <LoaderSpinner />
      </div>
      <div v-else class="bg-white dark:bg-gray-800 p-4 rounded max-w-lg w-full">
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
      </div>
    </ModalWrapper>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "vue";
import { ModalWrapper } from "@/components/common/Modal";
import LoaderSpinner from "@/components/common/LoaderSpinner.vue";

export default defineComponent({
  components: {
    ModalWrapper,
    LoaderSpinner,
  },
  props: {
    post: {
      type: [Object, null],
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const comments = ref([]);
    const loading = ref(false);

    const fetchComments = async () => {
      loading.value = true;
      if (props.post && props.post.id) {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`
          );
          comments.value = await response.json();
        } catch (error) {
          console.error("Error fetching comments:", error);
        } finally {
          loading.value = false;
        }
      }
    };

    watch(
      () => props.isOpen,
      (newVal) => {
        if (newVal) {
          fetchComments();
        }
      }
    );

    return { comments, loading };
  },
});
</script>
