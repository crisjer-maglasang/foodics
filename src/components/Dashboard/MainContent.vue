<template>
  <div
    class="bg-gray-200 dark:bg-gray-800 rounded-lg px-10 py-8 bg-opacity-50 backdrop-filter shadow-md"
  >
    <PostsTable
      :posts="posts"
      :loading="loading"
      :error="error"
      :selectedPage="selectedPage"
      :pageSize="pageSize"
      :setPageSize="setPageSize"
      :handlePageChange="handlePageChange"
      :totalItems="totalItems"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import PostsTable from "./Posts/PostsTable.vue";

export default {
  components: {
    PostsTable,
  },
  setup() {
    const store = useStore();
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      loading.value = true;
      try {
        await store.dispatch("fetchPosts");
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    });

    const posts = computed(() => store.getters.pagenatedPosts);
    const totalItems = computed(() => store.getters.totalItems);
    const pageSize = computed(() => store.getters.pageSize);
    const selectedPage = computed(() => store.getters.selectedPage);

    const handlePageChange = (page) => {
      store.dispatch("changePage", page);
    };

    const setPageSize = (size) => {
      store.dispatch("changePageSize", size);
    };

    return {
      totalItems,
      posts,
      loading,
      error,
      pageSize,
      selectedPage,
      handlePageChange,
      setPageSize,
    };
  },
};
</script>
