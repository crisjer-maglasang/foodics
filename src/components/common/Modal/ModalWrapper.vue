<template>
  <transition name="modal">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
    >
      <div class="bg-white rounded-lg shadow-lg w-1/3">
        <div class="flex justify-between items-center p-4 border-b">
          <h5 class="text-lg font-bold">{{ title }}</h5>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div class="p-4">
          <slot></slot>
        </div>
        <div class="flex justify-end p-4 border-t">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalWrapper",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("update:show", false);
    };

    return {
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
