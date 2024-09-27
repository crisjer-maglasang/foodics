<template>
  <button
    type="button"
    @click="click"
    :disabled="disabled"
    :class="[
      'h-10 items-center px-2 rounded-md text-sm font-medium',
      disabled
        ? 'text-gray-300 dark:text-gray-700 cursor-default'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700',
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
