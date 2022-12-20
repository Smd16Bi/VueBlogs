<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "MyButton"
}
</script>
<style scoped>
.btn {
  /* margin-top: 15px; */
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid teal;
  color: teal;
}
</style>