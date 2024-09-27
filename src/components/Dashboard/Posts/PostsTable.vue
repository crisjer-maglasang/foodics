<template>
  <div class="border-4 border-gray-300/50 dark:border-gray-600/50 rounded-lg">
    <div v-if="loading"><LoaderSpinner /></div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <DataTable
        :loading="loading"
        :theader="{
          rows: [
            { value: 'Title', align: 'center' },
            { value: 'Body', align: 'center' },
          ],
          classes: 'text-sm border-b-2 border-gray-300 dark:border-gray-400',
        }"
        :tbody="{
          rows: postRows,
          classes:
            'divide-y divide-gray-300 dark:divide-gray-600 border-b-2 border-b-gray-300',
        }"
        :pagination="{
          selectedPage,
          pageSize,
          setPageSize,
          handlePageChange,
          totalItems,
        }"
        classes="w-full"
      />
      <PostModal
        :post="selectedPost"
        :isOpen="isModalOpen"
        :close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import PostModal from "./PostModal.vue";
import LoaderSpinner from "@/components/common/LoaderSpinner.vue";
import DataTable from "@/components/common/Table/DataTable.vue";

export default defineComponent({
  name: "PostsTable",
  props: {
    posts: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
      default: false,
    },
    error: {
      type: Object,
      default: null,
    },
    selectedPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    setPageSize: {
      type: Function,
      required: true,
    },
    handlePageChange: {
      type: Function,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
  components: {
    PostModal,
    LoaderSpinner,
    DataTable,
  },
  setup(props) {
    const selectedPost = ref(null);
    const isModalOpen = ref(false);

    const postRows = computed(() =>
      props.posts.map((post) => [
        {
          value: post.title,
          onClick: () => {
            isModalOpen.value = true;
            selectedPost.value = post;
          },
          classes:
            "cursor-pointer w-48 lg:w-72 bg-gray-200/75 dark:bg-gray-900/50 hover:text-blue-500",
        },
        {
          value: post.body,
          isReadMore: 50,
        },
      ])
    );

    const closeModal = () => {
      isModalOpen.value = false;
      selectedPost.value = null;
    };

    return { selectedPost, isModalOpen, closeModal, postRows };
  },
});
</script>
