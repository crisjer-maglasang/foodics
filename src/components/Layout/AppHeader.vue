<template>
  <header
    class="sticky top-0 w-full h-20 items-center bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg z-10 shadow-md"
  >
    <div class="container h-full mx-auto flex justify-between items-center">
      <div class="flex items-center justify-center gap-6 px-6">
        <a href="https://www.foodics.com">
          <img
            :src="isDarkMode ? logoDark : logoLight"
            alt="Logo"
            class="h-6 hover:cursor-pointer"
        /></a>
      </div>

      <div
        class="h-full flex flex-row items-center md:gap-4 md:divide-x-2 md:divide-gray-300 dark:md:divide-gray-700"
      >
        <div class="hidden md:flex flex-row items-center h-full">
          <p
            :class="[
              'h-full flex items-center justify-center font-semibold font-mono text-lg hover:cursor-pointer w-24 text-center hover:bg-gray-300 dark:hover:bg-gray-700',
              isActive('/')
                ? 'border-b-2 border-gray-400 dark:border-gray-500'
                : '',
            ]"
            @click="handleMenuClick('/')"
          >
            Home
          </p>
          <p
            :class="[
              'h-full flex items-center justify-center font-semibold font-mono text-lg hover:cursor-pointer w-24 text-center hover:bg-gray-300 dark:hover:bg-gray-700',
              isActive('/about-us')
                ? 'border-b-2 border-gray-400 dark:border-gray-500'
                : '',
            ]"
            @click="handleMenuClick('/about-us')"
          >
            About Us
          </p>
          <p
            :class="[
              'h-full flex items-center justify-center font-semibold font-mono text-lg hover:cursor-pointer w-24 text-center hover:bg-gray-300 dark:hover:bg-gray-700',
              isActive('/contact')
                ? 'border-b-2 border-gray-400 dark:border-gray-500'
                : '',
            ]"
            @click="handleMenuClick('/contact')"
          >
            Contact
          </p>
        </div>
        <div
          class="flex md:hidden items-center p-4 border-r-2 h-full border-gray-300 dark:border-gray-700"
        >
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full"
          >
            <svg
              class="w-6 h-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="h-full flex flex-row items-center gap-2 px-4">
          <DarkModeToggle @toggleDarkMode="toggleDarkMode" />
          <img
            :src="userAvatar"
            alt="User Avatar"
            class="w-10 h-10 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-gray-200 dark:bg-gray-800 z-10 shadow-md"
    >
      <p
        :class="[
          'font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-full text-center py-4',
          isActive('/')
            ? 'bg-gray-300 dark:bg-gray-600'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700',
        ]"
        @click="handleMenuClick('/')"
      >
        Home
      </p>
      <p
        :class="[
          'font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-full text-center py-4',
          isActive('/about-us')
            ? 'bg-gray-300 dark:bg-gray-600'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700',
        ]"
        @click="handleMenuClick('/about-us')"
      >
        About Us
      </p>
      <p
        :class="[
          'font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-full text-center py-4',
          isActive('/contact')
            ? 'bg-gray-300 dark:bg-gray-600'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700',
        ]"
        @click="handleMenuClick('/contact')"
      >
        Contact
      </p>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import DarkModeToggle from "@/components/common/DarkModeToggle.vue";
import userAvatar from "@/assets/no_avatar.png";
import logoLight from "@/assets/logo_light.png";
import logoDark from "@/assets/logo_dark.png";

export default {
  components: {
    DarkModeToggle,
  },
  setup() {
    const isDarkMode = ref(false);
    const isMenuOpen = ref(false);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      isDarkMode.value = localStorage.getItem("darkMode") === "true";
      document.documentElement.classList.toggle("dark", isDarkMode.value);
    });

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle("dark", isDarkMode.value);
      localStorage.setItem("darkMode", isDarkMode.value);
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      console.log(isMenuOpen.value);
    };

    const handleMenuClick = (path) => {
      router.push(path);
      isMenuOpen.value = false;
    };

    const isActive = (path) => {
      return route.path === path;
    };

    return {
      toggleDarkMode,
      isDarkMode,
      userAvatar,
      logoLight,
      logoDark,
      isMenuOpen,
      toggleMenu,
      handleMenuClick,
      isActive,
    };
  },
};
</script>
