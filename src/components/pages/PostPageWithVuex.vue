<template>
  <div>
    <div>
      <MyButton v-on:click="$store.commit('plusLikes')">Plus</MyButton>
      <MyButton v-on:click="$store.commit('minusLikes')">Minus</MyButton>
    </div>
    <h1>Page with posts store</h1>
    <MyInput v-model:value="searchQuery" placeholder="Seach..." />
    <div class="app_btns">
      <MyButton v-on:click="showDialog">Post create</MyButton>
      <MySelect v-model="selectedSort" v-bind:options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm v-on:create="createPost" />
    </MyDialog>
    <PostList
      v-bind:posts="sorterAndSearch"
      v-on:remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading ...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PostPage from "@/components/PostPage.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    PostPage,
  },
  namespaced: true,
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
};
</script>

<style>
.app_btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>
