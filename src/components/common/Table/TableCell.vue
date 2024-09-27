<template>
  <component
    :is="type"
    :class="['px-4 py-4', `text-${align}`, `align-${valign}`, classes]"
    @click="onClick"
  >
    <span v-if="isReadMore && truncatedValue !== value">
      {{ isExpanded ? value : truncatedValue }}
      <span @click.stop="toggleReadMore" class="cursor-pointer underline">{{
        isExpanded ? "Show less" : "Read more"
      }}</span>
    </span>
    <span v-else>{{ hoverValue && isHovered ? hoverValue : value }}</span>
  </component>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "TableCell",
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      required: true,
    },
    hoverValue: {
      type: [String, Number, Boolean, Object, Array],
      default: null,
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "td",
      validator: (value) => ["td", "th"].includes(value),
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
    valign: {
      type: String,
      default: "middle",
      validator: (value) => ["top", "middle", "bottom"].includes(value),
    },
    classes: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    isReadMore: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const isExpanded = ref(false);

    const truncatedValue = computed(() => {
      if (props.isReadMore && props.value.length > props.isReadMore) {
        return props.value.substring(0, props.isReadMore) + "...";
      }
      return props.value;
    });

    const toggleReadMore = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      isExpanded,
      truncatedValue,
      toggleReadMore,
    };
  },
});
</script>
