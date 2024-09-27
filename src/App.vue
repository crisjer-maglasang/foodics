<template>
  <div class="relative min-h-screen flex flex-col text-black dark:text-white">
    <div
      class="absolute inset-0 -z-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-index-beams dark:bg-dark-index-beams bg-index-beams-size"
    ></div>
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layout/AppHeader.vue";
import Footer from "@/components/Layout/AppFooter.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
