<template>
  <div class="container mx-auto flex flex-col md:flex-row gap-6 md:gap-0">
    <div class="flex w-full md:w-80 justify-center relative mt-6 px-4">
      <Sidebar />
    </div>
    <div class="flex-1 justify-center my-6 mx-4">
      <div
        class="bg-gray-200 dark:bg-gray-800 rounded-lg px-6 py-4 bg-opacity-50 backdrop-filter backdrop-blur-lg z-10 shadow-md"
      >
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script>
import MainContent from "@/components/Dashboard/MainContent.vue";
import Sidebar from "@/components/Dashboard/DashboardSidebar.vue";

export default {
  name: "AppDashboard",
  components: {
    MainContent,
    Sidebar,
  },
};
</script>
