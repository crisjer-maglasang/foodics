<template>
  <div class="relative" ref="selectContainer">
    <button
      @click="toggleDropdown"
      type="button"
      class="relative hover:cursor-pointer w-full hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm"
      :aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="block truncate">{{
        selectedOption ? selectedOption.label : placeholder
      }}</span>
      <span
        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        :aria-activedescendant="activeDescendant"
      >
        <li
          v-for="option in options"
          :key="option.value"
          class="text-gray-900 select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-200"
          :class="{
            'text-black': option.value === selectedOption?.value,
          }"
          role="option"
          @click="selectOption(option)"
        >
          <span
            class="block truncate"
            :class="{ 'font-semibold': option.value === selectedOption?.value }"
          >
            {{ option.label }}
          </span>
          <span
            v-if="option.value === selectedOption?.value"
            class="absolute inset-y-0 right-0 flex items-center pr-4 text-black"
            :class="{ 'text-black': option.value === selectedOption?.value }"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "FormSelect",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: [String, Number, Object],
      default: null,
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
    selectAction: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const selectContainer = ref(null);
    const selectedOption = computed(() =>
      props.options.find((option) => option.value === props.value)
    );
    const activeDescendant = computed(() =>
      selectedOption.value ? `option-${selectedOption.value.value}` : ""
    );

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectOption = (option) => {
      isOpen.value = false;
      props.selectAction(option.value);
    };

    const handleClickOutside = (event) => {
      if (
        selectContainer.value &&
        !selectContainer.value.contains(event.target)
      ) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isOpen,
      selectContainer,
      selectedOption,
      activeDescendant,
      toggleDropdown,
      selectOption,
    };
  },
});
</script>
