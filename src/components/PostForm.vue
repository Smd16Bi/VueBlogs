<template>
  <form v-on:submit.prevent>
    <h2>Post create</h2>
    <MyInput v-focus v-model:value="post.title" type="text" placeholder="Name" />
    <MyInput v-model:value="post.body" type="text" placeholder="Discription" />
    <MyButton class="btn__form" v-on:click="createPost">Create</MyButton>
  </form>
</template>
<script>

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost: function () {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn__form {
  align-self: flex-end;
}
</style>
