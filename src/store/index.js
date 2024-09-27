import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    pageSize: 10,
    selectedPage: 1,
    totalItems: 0,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPageSize(state, pageSize) {
      state.pageSize = pageSize;
    },
    setCurrentPage(state, selectedPage) {
      state.selectedPage = selectedPage;
    },
    setTotalItems(state, totalItems) {
      state.totalItems = totalItems;
    },
  },
  actions: {
    async fetchPosts({ commit, state }) {
      try {
        const { selectedPage, pageSize } = state;

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${selectedPage}`
        );
        const posts = await response.json();
        const totalItems = parseInt(response.headers.get("x-total-count"), 10);
        commit("setPosts", posts);
        commit("setTotalItems", totalItems);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    changePage({ commit, dispatch }, page) {
      commit("setCurrentPage", page);
      dispatch("fetchPosts");
    },
    changePageSize({ commit, dispatch }, pageSize) {
      commit("setPageSize", pageSize);
      dispatch("fetchPosts");
    },
  },
  getters: {
    pagenatedPosts: (state) => state.posts,
    totalItems: (state) => state.totalItems,
    pageSize: (state) => state.pageSize,
    selectedPage: (state) => state.selectedPage,
  },
});
