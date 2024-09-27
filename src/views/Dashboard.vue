<template>
  <div class="container mx-auto flex flex-col md:flex-row gap-6 md:gap-0">
    <div class="flex w-full md:w-80 justify-center relative mt-6 px-4">
      <Sidebar />
    </div>
    <div class="flex-1 justify-center my-6 mx-4">
      <MainContent />
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
