<template>
  <div
    ref="paginatorContainer"
    :class="['px-3 py-2.5 flex items-center justify-between', classes]"
  >
    <div>
      <div
        class="items-center relative gap-2 z-0 flex rounded-md -space-x-px"
        aria-label="Pagination"
      >
        <div v-if="setPageSize" class="mb-0.5 mr-4 w-26">
          <FormElement
            :value="pageSize"
            id="pageSize"
            name="pageSize"
            type="select"
            :options="pageSizeOptions"
            :selectAction="setPageSize"
            :disabled="disabled"
          />
        </div>

        <PaginatorButton
          value="First Page"
          :click="handleFirstPage"
          :buttonIcon="ChevronDoubleLeftIcon"
          :disabled="selectedPage === 1 || disabled"
        />

        <PaginatorButton
          value="Previous"
          :click="handlePreviousPage"
          :buttonIcon="ChevronLeftIcon"
          :disabled="selectedPage === 1 || disabled"
        />

        <div class="flex items-center gap-2">
          <div
            class="text-sm sm:flex-1 sm:flex sm:items-center sm:justify-between"
          >
            <span>{{ selectedPage }} of {{ pageCount ? pageCount : 0 }}</span>
          </div>
        </div>

        <PaginatorButton
          value="Next"
          :click="handleNextPage"
          :buttonIcon="ChevronRightIcon"
          :disabled="selectedPage === pageCount || disabled"
        />

        <PaginatorButton
          value="Last Page"
          :click="handleLastPage"
          :buttonIcon="ChevronDoubleRightIcon"
          :disabled="selectedPage === pageCount || disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed, ref } from "vue";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/24/solid";
import FormElement from "@/components/common/Form/FormElement.vue";
import PaginatorButton from "./PaginatorButton.vue";

export default defineComponent({
  name: "TablePagination",
  components: {
    FormElement,
    PaginatorButton,
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
      default: 0,
    },
    selectedPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [
        { label: "10 rows", value: 10 },
        { label: "25 rows", value: 25 },
        { label: "50 rows", value: 50 },
        { label: "100 rows", value: 100 },
      ],
    },
    setPageSize: {
      type: Function,
    },
    handlePageChange: {
      type: Function,
      required: true,
    },
    classes: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { totalItems, selectedPage, pageSize, handlePageChange } =
      toRefs(props);

    const initialPage = ref(1);

    const pageCount = computed(() =>
      Math.ceil(totalItems.value / pageSize.value)
    );

    let rowStart = computed(
      () => (selectedPage.value - 1) * pageSize.value + 1
    );
    let rowEnd = computed(() =>
      Math.min(selectedPage.value * pageSize.value, totalItems.value)
    );

    const handleFirstPage = () => {
      if (selectedPage.value !== initialPage.value) {
        handlePageChange.value(initialPage.value);
      }
    };

    const handlePreviousPage = () => {
      if (selectedPage.value > initialPage.value) {
        handlePageChange.value(selectedPage.value - 1);
      }
    };

    const handleNextPage = () => {
      if (selectedPage.value < pageCount.value) {
        handlePageChange.value(selectedPage.value + 1);
      }
    };

    const handleLastPage = () => {
      if (selectedPage.value !== pageCount.value) {
        handlePageChange.value(pageCount.value);
      }
    };

    const handlePageKeyUp = (event) => {
      if (event.key === "Enter") {
        const page = parseInt(event.target.value, 10);
        handlePageChange.value(page);
      }
    };

    const handlePageBlur = (event) => {
      const page = parseInt(event.target.value, 10);
      if (page < initialPage.value) {
        handlePageChange.value(initialPage.value);
      } else if (page > pageCount.value) {
        handlePageChange.value(pageCount.value);
      } else if (page === "") {
        handlePageChange.value(initialPage.value);
      } else {
        handlePageChange.value(page);
      }
    };

    return {
      pageCount,
      rowStart,
      rowEnd,
      handleFirstPage,
      handlePreviousPage,
      handleNextPage,
      handleLastPage,
      handlePageKeyUp,
      handlePageBlur,
      ChevronDoubleLeftIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      ChevronDoubleRightIcon,
    };
  },
});
</script>
