<template>
  <div class="body">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}
.subtitle-red {
  color: red;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: auto;
  max-width: 890px;
  padding: 12px;
}
</style>
