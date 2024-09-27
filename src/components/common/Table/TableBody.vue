<template>
  <tbody :class="classes">
    <TableRow
      v-for="(row, rowIndex) in normalizedRows"
      :key="rowIndex"
      :class="['text-sm', row.isHeaderRow ? '' : headerClasses]"
      @click="onSelect ? () => onSelect(data[rowIndex]) : undefined"
      @mouseenter="handleMouseEnter(rowIndex)"
      @mouseleave="handleMouseLeave"
    >
      <TableCell
        v-for="(cell, cellIndex) in row.cells"
        :key="cellIndex"
        v-bind="cell"
        :isHovered="hoveredRowIndex === rowIndex"
      />
    </TableRow>
  </tbody>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { normalizeRows } from "./utils";
import { TableRow, TableCell } from "@/components/common/Table";

export default defineComponent({
  name: "TableBody",
  components: {
    TableRow,
    TableCell,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    onSelect: {
      type: Function,
      default: undefined,
    },
    classes: {
      type: String,
      default: "",
    },
    headerClasses: {
      type: String,
      default: "",
    },
    hasHoverAction: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hoveredRowIndex = ref(null);

    const handleMouseEnter = (index) => {
      if (props.hasHoverAction) {
        hoveredRowIndex.value = index;
      }
    };

    const handleMouseLeave = () => {
      if (props.hasHoverAction) {
        hoveredRowIndex.value = null;
      }
    };

    const normalizedRows = computed(() => normalizeRows(props.rows));

    return {
      normalizedRows,
      hoveredRowIndex,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
});
</script>
