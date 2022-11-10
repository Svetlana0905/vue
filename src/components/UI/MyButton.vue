<template>
  <button class="extra-button"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.extra-button {
  max-width: 210px;
  padding: 7px 15px;
  background: none;
  border-radius: 3px;
  border: 1px solid teal;
}
.extra-button:focus-visible,
.extra-button:focus,
.extra-button:hover {
  outline: none;
  border: 1px solid rgb(15, 70, 70);
  border-radius: 6px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(15, 70, 70, 0.2);
}
</style>
