<template>
  <select v-on:change="changeOptions">
    <option disabled value="">Select one variant</option>
    <option
      v-for="option in options"
      v-bind:key="option.value"
      v-bind:value="option.value"
    >{{option.name}}</option>
  </select>
</template>
<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
        type: Array,
        default: () => [],
    },
  },
  data() {
    return {

    }
  },
  methods: {
    changeOptions: function(event) {
        this.$emit("update:modelValue", event.target.value)
    }
  }
};
</script>
<style scoped></style>
