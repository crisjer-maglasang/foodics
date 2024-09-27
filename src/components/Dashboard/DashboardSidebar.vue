<template>
  <div
    class="md:fixed bg-gray-200 dark:bg-gray-800 w-full md:w-72 rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md"
  >
    <div @click="toggleCollapse" class="cursor-pointer px-6 py-4">
      <p class="text-gray-400 font-bold text-lg dark:text-gray-400">
        My Preference
      </p>
    </div>
    <transition name="collapse" class="border-gray-300 dark:border-gray-700">
      <div v-show="!isCollapsed" class="flex flex-col gap-4 border-t-2">
        <div class="flex flex-col">
          <p
            class="px-6 py-4 cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-b-md"
          >
            Front End Development
          </p>
          <p
            class="px-6 py-4 cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-b-md"
          >
            Back End Development
          </p>
          <p
            class="px-6 py-4 cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-b-md"
          >
            Full Stack Development
          </p>
          <p
            class="px-6 py-4 cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-b-md"
          >
            UI/UX Design
          </p>
          <p
            class="px-6 py-4 cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-700/50 rounded-b-md"
          >
            Devops
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DashboardSidebar",
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style>
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease;
}
.collapse-enter,
.collapse-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
