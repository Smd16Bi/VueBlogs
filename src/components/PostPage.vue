<template>
  <div class="page__wrapper">
    <div
      class="page"
      v-for="page in pages"
      v-bind:key="page"
      v-on:click="changePage(page)"
      v-bind:class="{
        'current_page': page === currentPage
      }"
    >{{page}}</div>
  </div>
</template>
<script>
export default {
  props: {
    currentPage: Number,
    pages: Number,
    page: Number,
  },
  methods: {
    changePage: function (numberPage) {
      this.$emit("changePage", numberPage);
    },
  },
};
</script>
<style scoped>
.page__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current_page {
  border: 2px solid teal;
}
</style>
