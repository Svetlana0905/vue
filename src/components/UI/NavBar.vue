<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <!-- <my-button @click="$router.push('/')">Main Page</my-button>
        <my-button @click="$router.push('/posts')">Posts Page</my-button>
      <my-button style="navbar__link" @click="$router.push('/about')">About Page</my-button>
      <my-button style="navbar__link" @click="$router.push('/store')">Page With Store</my-button>
      <my-button style="navbar__link" @click="$router.push('/composition')"
        >Composition</my-button
      > -->
      <router-link class="navbar__link" to="/">Main Page</router-link>
      <router-link class="navbar__link" to="/posts">Posts Page</router-link>
      <router-link class="navbar__link" to="/about">About Page</router-link>
      <router-link class="navbar__link" to="/store"
        >Page With Store</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px teal;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: aliceblue;
}
.navbar__btns {
  display: flex;
  gap: 15px;
  margin-left: auto;
}
.navbar__link {
  padding: 7px 15px;
  font-weight: 600;
  color: white;
}
</style>
