<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Discription:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <MyButton v-on:click="$emit('remove', post)">Delete</MyButton>
      <MyButton v-on:click="$router.push(`/posts/${post.id}`)" >Open</MyButton>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btn button {
  margin-top: 0;
}
.post__btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
