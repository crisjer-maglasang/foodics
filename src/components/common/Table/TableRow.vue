<template>
  <tr v-bind="$attrs">
    <slot></slot>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableRow",
  inheritAttrs: false,
});
</script>
