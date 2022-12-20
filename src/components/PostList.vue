<template>
  <div v-if="posts.length > 0">
    <h3>List</h3>
    <transition-group name="user-list">
      <Postitem
        v-for="post in posts"
        v-bind:post="post"
        v-bind:key="post.id"
        v-on:remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div v-else>
    <h3>List is empty</h3>
  </div>
</template>

<script>
import Postitem from "./postitem.vue";
export default {
  components: {
    Postitem,
  },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: all 0.4s ease;
}
</style>
