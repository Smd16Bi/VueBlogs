<template>
  <input
    v-bind:value="value"
    v-on:input="updateInput"
    class="input"
    type="text"
  />
</template>
<script>
export default {
  name: "MyInput",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput: function (event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
