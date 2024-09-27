<template>
  <thead :class="classes">
    <TableRow v-for="(row, rowIndex) in normalizedRows" :key="rowIndex">
      <TableCell
        v-for="(cell, cellIndex) in row.cells"
        :key="cellIndex"
        :type="'th'"
        :class="cellClasses"
        v-bind="cell"
      />
    </TableRow>
  </thead>
</template>

<script>
import { defineComponent, computed } from "vue";
import { normalizeRows } from "./utils";
import TableRow from "@/components/common/Table/TableRow.vue";
import TableCell from "@/components/common/Table/TableCell.vue";

export default defineComponent({
  name: "TableHead",
  components: {
    TableRow,
    TableCell,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    classes: {
      type: String,
      default: "",
    },
    cellClasses: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const normalizedRows = computed(() => normalizeRows(props.rows));
    return {
      normalizedRows,
    };
  },
});
</script>
