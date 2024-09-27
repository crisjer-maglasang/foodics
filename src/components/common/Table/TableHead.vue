<template>
  <thead class="bg-gray-50 divide-y whitespace-nowrap">
    <TableRow
      v-for="(row, rowIndex) in normalizedRows"
      :key="rowIndex"
      class="text-gray-600 text-xs uppercase"
    >
      <TableCell
        v-for="(cell, cellIndex) in row.cells"
        :key="cellIndex"
        :type="'th'"
        class="py-3 font-normal"
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
  },
  setup(props) {
    const normalizedRows = computed(() => normalizeRows(props.rows));
    console.log("normalizedRows", normalizedRows.value);
    return {
      normalizedRows,
    };
  },
});
</script>
