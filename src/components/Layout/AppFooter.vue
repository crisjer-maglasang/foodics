<template>
  <header
    class="w-full bg-gray-100 border-t border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 bg-opacity-50 backdrop-blur"
  >
    <div class="container mx-auto flex justify-center items-center">
      <div class="flex items-center gap-6 p-6">
        <span class="text-sm text-gray-500"
          >Copyright © 2024: www.foodics.com</span
        >
      </div>

      <!-- <div
        class="flex items-center md:gap-4 md:divide-x-2 md:divide-gray-300 dark:md:divide-gray-700"
      >
        <div class="hidden md:flex flex-row items-center">
          <p
            class="font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-24 text-center hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Home
          </p>
          <p
            class="font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-24 text-center"
          >
            About Us
          </p>
          <p
            class="font-semibold font-mono text-lg text-black dark:text-white hover:cursor-pointer w-24 text-center"
          >
            Contact
          </p>
        </div>
        <div class="flex md:hidden items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2">
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
        <div class="flex flex-row items-center gap-2 px-4">
          <DarkModeToggle @toggleDarkMode="toggleDarkMode" />
          <img
            :src="userAvatar"
            alt="User Avatar"
            class="w-10 h-10 rounded-full hover:cursor-pointer"
          />
        </div>
      </div> -->
    </div>
  </header>
</template>
