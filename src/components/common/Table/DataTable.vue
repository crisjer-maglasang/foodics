<template>
  <div>
    <LoaderSpinner v-if="loading" />
    <table v-else class="min-w-full bg-white dark:bg-gray-800">
      <TableHead v-if="theader" v-bind="theader" />
      <TableBody v-if="tbody" v-bind="tbody" />
    </table>
    <div v-if="pagination">
      <TablePagination
        :selectedPage="pagination.selectedPage"
        :pageSize="pagination.pageSize"
        :setPageSize="pagination.setPageSize"
        :totalItems="pagination.totalItems"
        :handlePageChange="pagination.handlePageChange"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { TablePagination } from "@/components/common/TablePaginator";
import LoaderSpinner from "@/components/common/LoaderSpinner.vue";
import { TableHead, TableBody } from "@/components/common/Table";

export default defineComponent({
  name: "DataTable",
  components: {
    TablePagination,
    LoaderSpinner,
    TableHead,
    TableBody,
  },
  props: {
    theader: {
      type: [Object, Array, Function],
      required: true,
    },
    tbody: {
      type: [Object, Array, Function],
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: null,
    },
  },
});
</script>
