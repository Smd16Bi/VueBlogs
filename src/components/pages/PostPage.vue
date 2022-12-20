<template>
    <div>
      <h1>Page with posts</h1>
      <MyInput  v-model:value="searchQuery" placeholder="Seach..." />
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
      <!-- <div ref="observer" class="observer"></div> -->
      <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
  </template>
  
  <script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import PostPage from "@/components/PostPage.vue";
  import MyDialog from "@/components/UI/MyDialog.vue";
  
  import axios from "axios";
  
  export default {
    components: {
      PostForm,
      PostList,
      MyDialog,
      PostPage
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPage: 0,
        sortOptions: [
          { value: "title", name: "Name" },
          { value: "body", name: "By body" },
        ],
      };
    },
    methods: {
      showDialog: function () {
        this.dialogVisible = !this.dialogVisible;
      },
      createPost: function (post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost: function (post) {
        this.posts = this.posts.filter((p) => {
          return p.id !== post.id;
        });
      },
      // changePage: function(pageNumber) {
      //   this.page = pageNumber;
      // },
      loadMorePosts: async function () {
        try {
          this.page += 1
          // this.isPostsLoading = true;
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
          );
          this.totalPage = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = [...this.posts ,...response.data];
        } catch {
          throw new Error("Error happen");
        } finally {
          // this.isPostsLoading = false;
        }
      },
      fetchPost: async function () {
        try {
          this.isPostsLoading = true;
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
          );
          this.totalPage = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
        } catch {
          throw new Error("Error happen");
        } finally {
          this.isPostsLoading = false;
        }
      },
    },
    watch: {
      // page: function() {
      //   this.fetchPost();
      // }
    },
    computed: {
      sorterPost() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(
            post2[this.selectedSort]
          );
        });
      },
      sorterAndSearch() {
        return this.sorterPost.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      },
    },
    mounted() {
      this.fetchPost();
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
  