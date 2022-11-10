<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    class="my-input"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.my-input {
  padding: 7px 15px;
  border: 1px solid teal;
}

.my-input:focus-visible {
  outline: none;
  border: 1px solid rgb(15, 70, 70);
}
.my-input:focus,
.my-input:hover {
  border: 1px solid rgb(15, 70, 70);
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
}
</style>
