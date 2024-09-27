<template>
  <button
    @click="toggleDarkMode"
    class="rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 p-2"
  >
    <img
      :src="isDarkMode ? sunIcon : moonIcon"
      alt="Toggle Dark Mode"
      class="w-5 h-5"
    />
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
import sunIcon from "/src/assets/svg/sun.svg";
import moonIcon from "/src/assets/svg/moon.svg";

export default {
  setup(props, { emit }) {
    const isDarkMode = ref(false);

    onMounted(() => {
      isDarkMode.value = localStorage.getItem("darkMode") === "true";
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    });

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle("dark", isDarkMode.value);
      localStorage.setItem("darkMode", isDarkMode.value);
      emit("toggleDarkMode");
    };

    return { toggleDarkMode, isDarkMode, sunIcon, moonIcon };
  },
};
</script>
