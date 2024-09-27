<template>
  <button
    type="button"
    @click="click"
    :disabled="disabled"
    :class="[
      'h-10 relative items-center px-2 rounded-md border border-gray-300 text-sm font-medium',
      disabled
        ? 'text-gray-200 dark:text-gray-500 cursor-default'
        : 'text-gray-500 dark:text-gray-100 hover:bg-gray-50',
    ]"
  >
    <span class="sr-only">{{ value }}</span>
    <component :is="buttonIcon" class="h-5 w-5" />
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginatorButton",
  props: {
    buttonIcon: {
      type: [Object, Function],
      required: true,
    },
    value: {
      type: String,
      default: "",
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
});
</script>
